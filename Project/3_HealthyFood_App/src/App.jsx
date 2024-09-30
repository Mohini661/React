import { useState } from "react";
import "./App.css";
import Title from "./Components/Title";
import AddItems from "./Components/AddItems";
import ItemList from "./Components/ItemList";
import DefaultMsg from "./Components/DefaultMsg";

function App() {
  const [foodName, setFoodName] = useState([]);
 
  const changeInputHandler = (e) => {
    if (e.key === "Enter") {
      const newname = e.target.value;
      let newArray = [...foodName, newname];
      setFoodName(newArray);
      e.target.value = " ";
    }
  }; 

  return (
    <center className="container">
      <Title></Title>
      <AddItems inputChange={changeInputHandler}></AddItems>
      <DefaultMsg fData={foodName}></DefaultMsg>
      <ItemList fData={foodName}></ItemList>
    </center>
  );
}

export default App;
