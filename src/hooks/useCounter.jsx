import { useState, useEffect } from "react";

export const useCounter = (bool = true) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (bool) {
        setCounter(prev => prev + 1);
      } else if (!bool) {
        setCounter(prev => prev - 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [bool]);

  return counter;
};
