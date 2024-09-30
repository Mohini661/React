function Calculator(params) {
  let display = document.getElementById("inputtext");
  let buttons = document.getElementsByClassName("btn");
  Array.from(buttons).map((button) => {
    button.addEventListener("click", (e) => {
      // console.log(e.target);
      if (e.target.innerHTML == "=") {
        display.value = eval(display.value);
      } else if (e.target.innerHTML == "C") {
        display.value = " ";
      } else if (e.target.innerHTML == "back") {
        display.value = display.value.slice(0, -1);
      } else {
        display.value += e.target.innerHTML;
      }
    });
  });
}  

export default Calculator;
