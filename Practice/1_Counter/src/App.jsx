import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // let count = 1;
  let [count, setCount] = useState(5);
  const addValue = () => {
    if (count < 20) {
      setCount((count) => count + 1); // imp Interview Question
      setCount((count) => count + 1);
      setCount((count) => count + 1);
    }
  };

  const decreseValue = () => {
    if (count >= 1) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <h1>Counter using useState</h1>
      <h2>Counter value: {count}</h2>
      <button onClick={addValue}> Increment</button>
      <button onClick={decreseValue}> Decrement</button>
    </>
  );
}

export default App;
