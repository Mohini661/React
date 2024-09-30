import { MdDelete } from "react-icons/md";

const Item = ({ toDoName, toDoDate,deleteButtonClick }) => {

  return  <div className="container mt-4">
    <div className="row">
      <div className="col-4">
        <span>{toDoName}</span>
      </div>
      <div className="col-4">
        <span>{toDoDate}</span>
      </div>
      <div className="col-4">
        <button className="btn btn-danger" onClick={()=>deleteButtonClick(toDoName)}><MdDelete /></button>
      </div> 
    </div>
  </div>;
};
export default Item;
