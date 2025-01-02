import { useContext, useEffect, useState } from "react";
import Item from "./Item";
import { toDoListContext } from "../store/Context";

const ToDoItem = ({}) => {
  const { toDoList, setToDoList, name, date, setName, setDate } =
    useContext(toDoListContext);
  useEffect(() => {
    fetch("http://localhost:3000/tasks")
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        setToDoList(result);
      });
  }, [toDoList]);

  const updateToDo = (id) => {
    fetch(`http://localhost:3000/tasks/${id}`)
      .then((resp) => {
        return resp.json();
      })
      .then((result) => {
        setName(result.name);
        setDate(result.date);
      });
  };

  return (
    <>
      <h1 className="mt-4">ToDo List</h1>
      {toDoList?.map((item) => (
        <Item
          task={item}
          key={item.id}
          updateToDo={updateToDo}
          // deleteButtonClick={deleteButtonClick}
        ></Item>
      ))}
    </>
  );
};
export default ToDoItem;
