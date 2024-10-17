import { useState, useReducer } from "react";
import "./App.css";
import Title from "./Components/Title";
import Inputs from "./Components/Inputs";
import ShowData from "./Components/ShowData";
// import { listContext } from "./Store/Context";
import ListItemContextProvider from "./Store/Context";

function App() {
  return (
    <div className="Container bg-red text-center ">
      <ListItemContextProvider>
        <Title></Title>
        <Inputs></Inputs>
        <ShowData></ShowData>
      </ListItemContextProvider>
    </div>
  );
}

export default App;
