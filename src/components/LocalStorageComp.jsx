// import React, { useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useUpdateLogger } from '../hooks/useUpdateLogger';

export const LocalStorageComp = () => {
  const [name, setName] = useLocalStorage('name', '');
  useUpdateLogger(name);
  return (
    <div>
      <h1>LocalStorageCom</h1>
      <input type='text' value={name} onChange={e => setName(e.target.value)} />
    </div>
  );
};
