import { useState } from 'react';

export const ToggleComp = () => {
  const [value, setValue] = useState(false);

  const togglehandler = value => {
    setValue(prev => !prev);
  };
  return (
    <div>
      <h1>ToggleComp</h1>
      <h2>{value ? 'true' : 'false'}test</h2>
      <button onClick={() => togglehandler(value)}>Toggle</button>
      <button onClick={() => setValue(true)}>Force "True"</button>
      <button onClick={() => setValue(false)}>Force "False"</button>
    </div>
  );
};
