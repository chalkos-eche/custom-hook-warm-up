import React, { useState } from "react";

export const InputEnter = () => {
  const [inputValue, setInputValue] = useState();

  const handleChange = e => {
    setInputValue(e.target.value);
  };
  const handleSubmit = () => {
    alert(inputValue);
    setInputValue("");
  };
  return (
    <>
      <div>
        <h1>Input</h1>
        <input type="text" value={inputValue} onChange={handleChange} />
        <button onClick={handleSubmit}>확인</button>
      </div>
    </>
  );
};
