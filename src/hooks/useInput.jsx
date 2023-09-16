import { useState } from "react";

export const useInput = (initialValue, submitHandler) => {
  const [state, setState] = useState(initialValue);

  const handleChange = value => {
    setState(value);
  };
  const handleSubmit = () => {
    setState("");
    submitHandler(state);
  };
  return { state, handleChange, handleSubmit };
};
