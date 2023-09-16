import { useState, useEffect } from 'react';

export const useLocalStorage = () => {
  const [value, setValue] = useState('');
  return [value, setValue];
};
