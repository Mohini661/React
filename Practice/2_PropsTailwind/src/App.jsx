import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./Components/Card";

function App() {
  const [count, setCount] = useState(0);

  
  return (
    <>
      <h1 className="bg-blue-400 text-black p-3 rounded-md mb-4">Tailwind CSS</h1>

      <Card name = "Mohini" btnText = "Click me" ></Card>
      <Card name = "Avi" ></Card>

    </>
  );
}

export default App;
