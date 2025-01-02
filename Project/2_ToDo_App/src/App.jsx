import Title from "./Components/Title";
import ToDoTask from "./Components/ToDoTask";
import ToDoItem from "./Components/ToDoItem";
import { useEffect, useState } from "react";
import { toDoListContext } from "./store/Context";

function App() {
  let [toDoList, setToDoList] = useState([]);
  let [name, setName] = useState("");
  let [date, setDate] = useState("");
  let [tid, setTid] = useState("");

  // const addItemHandler = (name, date) => {
  //   const newArray = [...toDoList, { name: name, date: date }];
  //   setToDoList(newArray);
  // };

  return (
    <center className="todo-container ">
      <toDoListContext.Provider
        value={{
          toDoList,
          setToDoList,
          name,
          setName,
          date,
          setDate,
          tid,
          setTid,
        }}
      >
        <Title></Title>
        <ToDoTask></ToDoTask>
        <ToDoItem></ToDoItem>
      </toDoListContext.Provider>
    </center>
  );
}

export default App;
