import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const dec = () => {
    setCount(count - 1);
  };

  

  return (
    <div>
      <h1>Counter</h1>
      <p>{count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={dec}>Decrement!</button>
      {/* <>all button are working fine</> */}
      
    </div>
  );
};

export default Counter;
