import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isRunning) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
    } else if (!isRunning && timer !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, timer]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTimer(0);
  };

  return (
    <div className="App">
      <p style={{ fontWeight: 'bold', fontSize: '40px' }}>Count: {count}</p>
      <button
        style={{
          borderWidth: '4px',
          borderRadius: '20px',
          padding: '10px',
          fontSize: '40px',
          fontWeight: 'bolder',
          cursor: 'pointer',
        }}
        onClick={() => setCount(count+1*99999)}
      >
        Set Count
      </button>
      <p style={{ fontWeight: 'bold', fontSize: '40px' }}>Time: {timer}s</p>
      <button
        style={{
          borderWidth: '2px',
          borderRadius: '10px',
          padding: '10px',
          fontSize: '20px',
          fontWeight: 'bold',
          margin: '10px',
          cursor: 'pointer',
        }}
        onClick={handleStart}
        disabled={isRunning}
      >
        Start
      </button>
      <button
        style={{
          borderWidth: '2px',
          borderRadius: '10px',
          padding: '10px',
          fontSize: '20px',
          fontWeight: 'bold',
          margin: '10px',
          cursor: 'pointer',
        }}
        onClick={handleStop}
        disabled={!isRunning}
      >
        Stop
      </button>
      <button
        style={{
          borderWidth: '2px',
          borderRadius: '10px',
          padding: '10px',
          fontSize: '20px',
          fontWeight: 'bold',
          margin: '10px',
          cursor: 'pointer',
        }}
        onClick={handleReset}
      >
        Reset
      </button>
    </div>
  );
}

export default App;
