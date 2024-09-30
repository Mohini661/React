import { useState } from "react";

const Inputs = ({ onButtonClick }) => {
  let [name, setName] = useState(" ");
  let [email, setEmail] = useState("");
  let [phone, setPhone] = useState();
  const nameChange = (e) => {
    setName(e.target.value);
  };

  const emailChange = (e) => {
    setEmail(e.target.value);
  };

  const numberChange = (e) => {
    setPhone(e.target.value);
  };
  const SubmitButtonHandler = () => {
    onButtonClick(name, email, phone);
    setName("");
    setEmail("");
    setPhone("");
  };

  return (
    <div className="container form-control">
      <div className="row">
        <div className="col-3  ">
          <input
            type="text"
            placeholder="Enter your name"
            onChange={nameChange}
            value={name}
          />
        </div>
        <div className="col-3">
          <input
            type="email"
            placeholder="Enter your email"
            onChange={emailChange}
            value={email}
          />
        </div>
        <div className="col-3">
          <input
            type="number"
            placeholder="Enter your mobile number"
            onChange={numberChange}
            value={phone}
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
