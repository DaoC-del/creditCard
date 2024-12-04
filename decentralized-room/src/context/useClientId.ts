import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

export const useClientId = () => {
  const [searchParams] = useSearchParams();
  const clientIdFromUrl = searchParams.get('client_id');
  const clientId = clientIdFromUrl || uuidv4();

  useEffect(() => {
    if (!clientIdFromUrl) {
      console.warn('No client_id provided, generating a new one.');
    }
  }, [clientIdFromUrl]);

  return clientId;
};
