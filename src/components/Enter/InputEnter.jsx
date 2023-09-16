import React, { useState } from "react";
import { useInput } from "../../hooks/useInput";

function displayMsg(inputValue) {
  alert(inputValue);
}
export const InputEnter = () => {
  // const [inputValue, setInputValue] = useState();
  const { state, handleChange } = useInput("", displayMsg);
  const {
    state: state2,
    handleChange: handleChange2,
    handleSubmit,
  } = useInput("");
  // const handleChange = e => {
  // setInputValue(e.target.value);
  // };

  return (
    <>
      <div>
        <h1>Input</h1>
        <input
          type="text"
          value={state}
          onChange={e => handleChange(e.target.value)}
        />
        <input
          type="text"
          value={state2}
          onChange={e => handleChange2(e.target.value)}
        />
        <button onClick={handleSubmit}>확인</button>
      </div>
    </>
  );
};
