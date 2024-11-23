import { useContext, useRef } from "react";
import { listContext } from "../Store/Context";

const InputData = () => {
  const { inputHandler } = useContext(listContext);
  let nameChange = useRef();
  let emailChange = useRef();
  let phoneChange = useRef();
  const SubmitButtonHandler = () => {
    inputHandler(
      nameChange.current.value,
      emailChange.current.value,
      phoneChange.current.value
    );
    nameChange.current.value = "";
    emailChange.current.value = "";
    phoneChange.current.value = "";
  };

  return (
    <div className="container form-control mb-4">
      <div className="row">
        <div className="col-3  ">
          <input
            type="text"
            placeholder="Enter your name"
            ref={nameChange}
            className="form-control"
          />
        </div>
        <div className="col-3">
          <input
            type="email"
            placeholder="Enter your email"
            ref={emailChange}
            className="form-control"
          />
        </div>
        <div className="col-3">
          <input
            type="number"
            placeholder="Enter your mobile number"
            ref={phoneChange}
            className="form-control"
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
export default InputData;
