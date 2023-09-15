import { useState, useCallback } from "react";

export const useGetData = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchTasks = useCallback(async fetchData => {
    setIsLoading(true);
    setError(null);
    try {
      // console.log("1", fetchData.url);
      const response = await fetch(fetchData.url, {
        method: fetchData.method ? fetchData.method : "GET",
        headers: fetchData.headers ? fetchData.headers : {},
        body: fetchData.body ? JSON.stringify(fetchData.body) : null,
      });
      // console.log("2", response);
      if (!response.ok) {
        throw new Error("Request failed!");
      }

      const data = await response.json();
      console.log(data);
      setIsLoading(false);
      return data;
    } catch (err) {
      setError(err.message || "Something went wrong!");
      setIsLoading(false);
      return null;
    }
  }, []);

  return {
    isLoading,
    error,
    fetchTasks,
  };
};
