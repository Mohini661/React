import { useContext } from "react";
import { toDoListContext } from "../store/Context";

const Demo = () => {
  const list = useContext(toDoListContext);
  return (
    <div>
      {/* <h1>Mohini patel</h1> */}
      {list.map((ele) => (
        <span>{ele.name}</span>
      ))}
    </div>
  );
};

export default Demo;
