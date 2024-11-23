import { useState, useReducer } from "react";
import "./App.css";
import Title from "./Components/Title";
import ShowData from "./Components/ShowData";
import ListItemContextProvider from "./Store/Context";
import InputData from "./Components/InputData";

function App() {
  return (
    <div className="Container bg-red text-center ">
      <ListItemContextProvider>
        <Title></Title>
        <InputData></InputData>
        <ShowData></ShowData>
      </ListItemContextProvider>
    </div>
  );
}
 
export default App;
