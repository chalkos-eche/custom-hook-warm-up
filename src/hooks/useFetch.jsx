import { useState, useEffect, useCallback } from 'react';

export const useFetch = (baseUrl, initialValue) => {
  const [data, setData] = useState(null);

  const fetchData = useCallback(async () => {
    const response = await fetch(baseUrl + '/' + initialValue);
    const resData = await response.json();
    setData(resData);
  }, [baseUrl, initialValue]);

  useEffect(() => {
    fetchData(initialValue);
  }, [fetchData, initialValue]);

  return { data, fetchData };
};
