import { useState, useCallback } from "react";

export const useGetData = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const responseData = useCallback(async (fetchData, loadData) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(fetchData.url, {
        method: fetchData.method ? fetchData.method : "GET",
        body: fetchData.body ? JSON.stringify(fetchData.body) : "{}",
        headers: fetchData.headers ? fetchData.headers : null,
      });

      if (!response.ok) {
        throw new Error("Request failed!");
      }

      const data = await response.json();
      loadData(data);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  }, []);

  return {
    isLoading,
    error,
    responseData,
  };
};
