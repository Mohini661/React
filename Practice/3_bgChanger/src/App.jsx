import { useState } from "react";

function App() {
  const [color, setColor] = useState("pink");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className=" fixed flex flex-wrap justify-center px-2 inset-x-0">
          <div className="flex flex-wrap justify-center gap-3 bg-white px-3 py-2 mt-8 rounded-2xl">
            <button
              onClick={()=>{setColor("blue")}}
              className="outline-none px-4 py-1 rounded-2xl text-white"
              style={{ backgroundColor: "blue" }}>
              blue
            </button>
            <button
              onClick={()=>{setColor("red")}}
              className="outline-none px-4 py-1 rounded-2xl text-white"
              style={{ backgroundColor: "red" }}>
              red
            </button>
            <button
              onClick={()=>{setColor("green")}}
              className="outline-none px-4 py-1 rounded-2xl text-white"
              style={{ backgroundColor: "green" }}>
              green
            </button>
            <button
              onClick={()=>{setColor("orange")}}
              className="outline-none px-4 py-1 rounded-2xl text-white"
              style={{ backgroundColor: "orange" }}>
              orange
            </button>
            <button
              onClick={()=>{setColor("grey")}}
              className="outline-none px-4 py-1 rounded-2xl text-white"
              style={{ backgroundColor: "grey" }}>
              grey
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
