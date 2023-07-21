import React, { useState } from "react";
import Counter from "./Counter";
import './style.css';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  return (
    <div className="container">
      <h1>Simple React App</h1>
      <Counter count={count}/>
      <button className="myButton" onClick={increment}>Increment</button>
      <button className="myButton" onClick={decrease}>Decrease</button>
    </div>
  );
}

export default App;
