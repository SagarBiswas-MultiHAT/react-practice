import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <div className="counter-container">
        <h1>Counter App</h1>
        <div className="counter-display">
          <h2>{count}</h2>
        </div>
        <div className="counter-controls">
          <button onClick={increment} disabled={count >= 5}>
            Increment
          </button>
          <button onClick={reset}>Reset</button>
          <button onClick={decrement} disabled={count <= -5}>
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
