import { useState, useReducer } from "react";
import "./App.css";
import Title from "./Components/Title";
import Inputs from "./Components/Inputs";
import ShowData from "./Components/ShowData";
import { listContext } from "./Store/Context";

const listReducer = (inputData, action) => {
  let newArray = inputData;
  if (action.type == "Add_Data") {
    newArray = [
      ...inputData,
      { name: action.name, email: action.email, phone: action.phone },
    ];
  } else if (action.type == "Remove_Data") {
    newArray = inputData.filter((ele) => ele.name != action.name);
  }
  return newArray;
};

function App() {
  // const [inputData, setInputData] = useState([]);

  const [inputData, dispatcherList] = useReducer(listReducer, []);

  const inputHandler = (name, email, phone) => {
    const addData = {
      type: "Add_Data",
      name: name,
      email: email,
      phone: phone,
    };
    dispatcherList(addData);
  };
  const deleteButtonHandler = (name) => {
    const removeData = {
      type: "Remove_Data",
      name: name,
    };
    dispatcherList(removeData);
  };

  return (
    <div className="Container bg-red text-center ">
      <listContext.Provider
        value={{ inputData, inputHandler, deleteButtonHandler }}
      >
        <Title></Title>
        <Inputs></Inputs>
        <ShowData></ShowData>
      </listContext.Provider>
    </div>
  );
}

export default App;
