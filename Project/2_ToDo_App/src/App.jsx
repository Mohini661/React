import Title from "./Components/Title";
import ToDoTask from "./Components/ToDoTask";
import ToDoItem from "./Components/ToDoItem";
import { useState } from "react";
import Demo from "./Components/demo";
import { toDoListContext } from "./store/hooks";

function App() {
  // const todolist = [{name:"Assignment",date:"10/09/2024"},{name:"Project",date:"11/09/2024"}]
  let [toDoList, setToDoList] = useState([]);
  const addItemHandler = (name, date) => {
    const newArray = [...toDoList, { name: name, date: date }];
    setToDoList(newArray);
  };

  const deleteTaskHandler = (name) => {
    setToDoList(toDoList.filter((ele) => ele.name !== name));
  };

  return (
    <center className="todo-container ">
      <toDoListContext.Provider value={toDoList}>
        <Title></Title>
        <ToDoTask onButtonClick={addItemHandler}></ToDoTask>
        <ToDoItem
          toDoItemList={toDoList}
          deleteButtonClick={deleteTaskHandler}
        ></ToDoItem>
        <Demo />
      </toDoListContext.Provider>
    </center>
  );
}

export default App;
