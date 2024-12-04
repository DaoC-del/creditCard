import React, { useContext, useState } from 'react';
import RoomContext from '../context/RoomContext';

const Room: React.FC = () => {
  const roomContext = useContext(RoomContext);
  const [newStatus, setNewStatus] = useState<string>('');

  if (!roomContext) {
    return <div>Error: RoomContext not initialized</div>;
  }

  const { clients, setClientStatus } = roomContext;

  const handleSetStatus = () => {
    if (newStatus.trim()) {
      setClientStatus(newStatus);
      setNewStatus('');
    }
  };

  return (
    <div>
      <h1>Room Page</h1>
      <div>
        <h2>Clients</h2>
        {clients.map((client) => (
          <div key={client.id}>
            <strong>{client.name}:</strong> {client.status} (Updated at{' '}
            {new Date(client.timestamp).toLocaleTimeString()})
          </div>
        ))}
      </div>
      <input
        type="text"
        value={newStatus}
        onChange={(e) => setNewStatus(e.target.value)}
        placeholder="Set your status"
      />
      <button onClick={handleSetStatus}>Update Status</button>
    </div>
  );
};

export default Room;
