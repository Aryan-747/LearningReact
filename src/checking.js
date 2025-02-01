import React, { useState } from 'react';

const CounterApp = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setCount(count - 1);
  };

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>React Counter</h1>
      <p>{count}</p>
      <button onClick={increaseCount} style={{ marginRight: '10px' }}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  );
};

export default CounterApp;
