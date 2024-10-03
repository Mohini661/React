import { useState } from "react";
import "./App.css";
import Title from "./Components/Title";
import Login from "./Components/Login";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col justify-center items-center max-w-full h-screen border bg-gray-100">
      <Title />
      <Login />
    </div>
  );
}

export default App;
