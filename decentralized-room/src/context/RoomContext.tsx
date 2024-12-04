import React, { createContext, useState, useEffect, ReactNode } from 'react';
import gun from '../network/gun';
import { ClientStatus } from '../types';
import { v4 as uuidv4 } from 'uuid';

interface RoomContextProps {
  clients: ClientStatus[];
  setClientStatus: (status: string) => void;
  removeClient: (clientId: string) => void;
  clearClients: () => void;
}

const RoomContext = createContext<RoomContextProps | undefined>(undefined);

export const RoomProvider = ({ children }: { children: ReactNode }) => {
  const [clients, setClients] = useState<ClientStatus[]>([]);
  const [currentClient, setCurrentClient] = useState<ClientStatus>({
    id: uuidv4(),
    name: `Client-${Math.floor(Math.random() * 1000)}`,
    status: 'Online',
    timestamp: Date.now(),
  });

  useEffect(() => {
    const clientsRef = gun.get('clients');

    // 监听所有客户端状态
    clientsRef.map().on((clientData, key) => {
      setClients((prev) => {
        const existingIndex = prev.findIndex((c) => c.id === clientData.id);
        if (existingIndex >= 0) {
          const updatedClients = [...prev];
          updatedClients[existingIndex] = clientData;
          return updatedClients;
        }
        return [...prev, clientData];
      });
    });

    // 广播当前客户端状态
    clientsRef.set(currentClient);

    return () => {
      clientsRef.off(); // 清理监听器
    };
  }, [currentClient]);

  const setClientStatus = (status: string) => {
    const updatedClient = {
      ...currentClient,
      status,
      timestamp: Date.now(),
    };

    setCurrentClient(updatedClient);
    gun.get('clients').set(updatedClient);
  };

  const removeClient = (clientId: string) => {
    setClients((prev) => prev.filter((client) => client.id !== clientId));
  };

  const clearClients = () => {
    setClients([]);
  };

  return (
    <RoomContext.Provider
      value={{ clients, setClientStatus, removeClient, clearClients }}
    >
      {children}
    </RoomContext.Provider>
  );
};

export default RoomContext;
