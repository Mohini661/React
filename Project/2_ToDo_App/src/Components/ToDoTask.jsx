import { useState } from "react";
import { IoMdAdd } from "react-icons/io";

const ToDoTask = ({ onButtonClick }) => {

  let [name, setName] = useState("");
  let [date, setDate] = useState("");

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  }; 
  const dateChangeHandler = (e) => {
    setDate(e.target.value);
  };
  const addBtnHandler = () => {
    onButtonClick(name, date);
    setName(" ");
    setDate(" ");
  };

  return (
    <div className="container mt-4 fs-4">
      <div className="row">
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
        <div className="col-4">
          <button className="btn btn-success" onClick={addBtnHandler}>
          <IoMdAdd />
          </button>
        </div>
      </div>
    </div>
  );
};
export default ToDoTask;
