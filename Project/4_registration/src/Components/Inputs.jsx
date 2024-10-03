import { useState, useRef } from "react";

const Inputs = ({ onButtonClick }) => {
  let nameChange = useRef();
  let emailChange = useRef();
  let phoneChange = useRef();
  const SubmitButtonHandler = () => {
    onButtonClick(
      nameChange.current.value,
      emailChange.current.value,
      phoneChange.current.value
    );
    nameChange.current.value = "";
    emailChange.current.value = "";
    phoneChange.current.value = "";
  };

  return (
    <div className="container form-control">
      <div className="row">
        <div className="col-3  ">
          <input type="text" placeholder="Enter your name" ref={nameChange} />
        </div>
        <div className="col-3">
          <input
            type="email"
            placeholder="Enter your email"
            ref={emailChange}
          />
        </div>
        <div className="col-3">
          <input
            type="number"
            placeholder="Enter your mobile number"
            ref={phoneChange}
          />
        </div>
        <div className="col-3">
          <button className="btn btn-primary" onClick={SubmitButtonHandler}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
export default Inputs;
