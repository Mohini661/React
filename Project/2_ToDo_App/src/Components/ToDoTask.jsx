import { useContext, useEffect, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { toDoListContext } from "../store/Context";

const ToDoTask = () => {
  const { name, date, setName, setDate, tid, setTid } =
    useContext(toDoListContext);

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };
  const dateChangeHandler = (e) => {
    setDate(e.target.value);
  };
  const idChangeHandler = (e) => {
    setTid(e.target.value);
  };
  const addBtnHandler = () => {
    fetch("http://localhost:3000/tasks", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        date: date,
      }),
    });
    setName(" ");
    setDate(" ");
  };

  return (
    <div className="container mt-4 fs-4">
      <div className="row">
        <div className="col-1">
          <input
            type="text"
            name=""
            className="form-control"
            onChange={idChangeHandler}
            value={tid}
          />
        </div>
        <div className="col-4">
          <input
            type="text"
            placeholder="Enter your task "
            className="form-control"
            onChange={nameChangeHandler}
            value={name}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            className="form-control"
            onChange={dateChangeHandler}
            value={date}
          />
        </div>
        <div className="col-3">
          <button className="btn btn-success" onClick={() => addBtnHandler()}>
            <IoMdAdd />
          </button>
        </div>
      </div>
    </div>
  );
};
export default ToDoTask;
