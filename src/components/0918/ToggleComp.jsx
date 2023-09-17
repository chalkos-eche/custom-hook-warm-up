import { useState } from 'react';

export const ToggleComp = () => {
  const [value, setValue] = useState(false);

  const togglehandler = value => {
    if (!value) {
      return setValue(true);
    } else {
      return setValue(false);
    }
  };
  return (
    <div>
      <h1>ToggleComp</h1>
      <h2>{value}</h2>
      <button onClick={togglehandler(value)}>Toggle</button>
      <button onClick={setValue(false)}>Force "True"</button>
      <button onClick={setValue(true)}>Force "False"</button>
    </div>
  );
};
