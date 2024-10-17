import { listContext } from "../Store/Context";
import { useContext } from "react";
import AddData from "./AddData";
const ShowData = () => {
  const { inputData } = useContext(listContext);
  return (
    <>
      {inputData.map((ele) => (
        <AddData
          key={ele.name}
          name={ele.name}
          email={ele.email}
          phone={ele.phone}
        ></AddData>
      ))}
    </>
  );
};
export default ShowData;
