function Buttons({btnClickHandle}) {

  return (
    <div className="buttons">
      <button className="btn" onClick={()=>{btnClickHandle("C")}}>C</button>
      <button className="btn" onClick={()=>{btnClickHandle("&larr;")}}>&larr;</button>
      <button className="btn" onClick={()=>{btnClickHandle("/")}}>/</button>
      <button className="btn" onClick={()=>{btnClickHandle("1")}}>1</button>
      <button className="btn" onClick={()=>{btnClickHandle("2")}}>2</button>
      <button className="btn" onClick={()=>{btnClickHandle("*")}}>*</button>
      <button className="btn" onClick={()=>{btnClickHandle("3")}}>3</button>
      <button className="btn" onClick={()=>{btnClickHandle("4")}}>4</button>
      <button className="btn" onClick={()=>{btnClickHandle("+")}}>+</button>
      <button className="btn" onClick={()=>{btnClickHandle("5")}}>5</button>
      <button className="btn" onClick={()=>{btnClickHandle("6")}}>6</button>
      <button className="btn" onClick={()=>{btnClickHandle("-")}}>-</button>
      <button className="btn" onClick={()=>{btnClickHandle("7")}}>7</button>
      <button className="btn" onClick={()=>{btnClickHandle("8")}}>8</button>
      <button className="btn" onClick={()=>{btnClickHandle(".")}}>.</button>
      <button className="btn" onClick={()=>{btnClickHandle("9")}}>9</button>
      <button className="btn" onClick={()=>{btnClickHandle("0")}}>0</button>  
      <button className="btn" id="equal" onClick={()=>{btnClickHandle("=")}}> 
        =
      </button>
    </div>
  );
}
export default Buttons;
