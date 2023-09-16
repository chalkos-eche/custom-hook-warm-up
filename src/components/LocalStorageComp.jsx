import React, { useState } from 'react';

export const LocalStorageComp = () => {
  const [name, setName] = useState('');
  return (
    <div>
      <h1>LocalStorageCom</h1>
      <input type='text' value={name} onChange={e => setName(e.target.value)} />
    </div>
  );
};
