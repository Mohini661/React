import { useState } from "react";
import "./App.css";
import Title from "./Components/Title";
import Inputs from "./Components/Inputs";
import ShowData from "./Components/ShowData";

function App() {
  const [inputData, setInputData] = useState([]);

  const inputHandler = (name, email, phone) => {
    setInputData((currentData) => [
      ...currentData,
      { name: name, email: email, phone: phone },
    ]);
  };
  const deleteButtonHandler = (name) => {
    setInputData(inputData.filter((ele) => ele.name != name));
  };

  return (
    <div className="Container bg-red text-center ">
      <Title></Title>
      <Inputs onButtonClick={inputHandler}></Inputs>
      <ShowData
        Sdata={inputData}
        deleteButtonClick={deleteButtonHandler}
      ></ShowData>
    </div>
  );
}

export default App;
