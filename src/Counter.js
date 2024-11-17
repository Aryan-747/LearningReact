import React, { useState } from 'react';

const Counter = () => {
  // useState hook to manage counter state
  const [count, setCount] = useState(0);

  // Functions to increment and decrement the counter
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Counter</h1>
      <div style={styles.counter}>
        <button style={styles.button} onClick={decrement}>-</button>
        <span style={styles.count}>{count}</span>
        <button style={styles.button} onClick={increment}>+</button>
      </div>
      <p style={styles.instructions}>Click the buttons to increase or decrease the count.</p>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    width: '200px',
    margin: 'auto',
    marginTop: '50px',
    backgroundColor: '#f9f9f9',
  },
  header: {
    fontSize: '24px',
    margin: '10px 0',
  },
  counter: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
  },
  button: {
    fontSize: '18px',
    padding: '10px',
    cursor: 'pointer',
    border: '1px solid #ccc',
    borderRadius: '4px',
    backgroundColor: '#f0f0f0',
    transition: 'background-color 0.3s',
  },
  buttonHovered: {
    backgroundColor: '#dcdcdc',
  },
  count: {
    fontSize: '32px',
    fontWeight: 'bold',
  },
  instructions: {
    marginTop: '10px',
    fontSize: '14px',
    color: '#888',
  },
};

export default Counter;
