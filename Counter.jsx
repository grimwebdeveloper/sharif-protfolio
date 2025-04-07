import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>React Counter</h1>
      <div style={{ fontSize: '48px', margin: '20px' }}>{count}</div>
      <button
        onClick={decrement}
        style={{
          padding: '10px 20px',
          margin: '0 10px',
          fontSize: '18px',
          cursor: 'pointer',
        }}
      >
        -
      </button>
      <button
        onClick={increment}
        style={{
          padding: '10px 20px',
          margin: '0 10px',
          fontSize: '18px',
          cursor: 'pointer',
        }}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
