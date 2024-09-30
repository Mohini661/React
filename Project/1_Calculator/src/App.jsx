import "./App.css";
import Title from "./components/Title";
import Display from "./components/Display ";
import Buttons from "./components/Buttons";
import { useState } from "react";
// import Calculator from "./components/Calculator";

function App() {
  let [inputVal, setInputVal] = useState("");
  let [result, setResult] = useState("");

  const btnClickHandle = (value) => {
    console.log(value);
    if (value === "=") {
      const res = eval(inputVal);
      setResult(res);
      setInputVal(res);
    } else if (value === "C") {
      setInputVal("");
      setResult("");
    } else if (value === "&larr;") {
      const res = inputVal.slice(0, -1);
      setInputVal(res);
    } else {
      setInputVal((prev) => prev + value);
    }
    // console.log("🚀 ~ btnClickHandle ~ setResult:", result)
  };

  return (
    <>
      <Title></Title>
      <div className="container">
        <Display data={inputVal} result={result}></Display>
        <Buttons btnClickHandle={btnClickHandle}></Buttons>
      </div>
      {/* <Calculator></Calculator> */}
    </>
  );
}

export default App;
