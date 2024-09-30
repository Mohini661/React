import { useState } from "react";
import "./App.css";
import Title from "./Components/Title";
import Inputs from "./Components/Inputs";
import ShowData from "./Components/ShowData";

function App() {
  const [inputData, setInputData] = useState([]);

  const inputHandler = (name, email, phone) => {
    const newarray = [...inputData, { name: name, email: email, phone: phone }];
    setInputData(newarray);
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
