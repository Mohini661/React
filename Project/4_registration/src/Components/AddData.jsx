import { listContext } from "../Store/Context";
import { useContext } from "react";

const AddData = ({ name, email, phone }) => {
  const { deleteButtonHandler } = useContext(listContext);
  return (
    <div className="container form-control">
      <div className="row">
        <div className="col-3">
          <span>{name}</span>
        </div>
        <div className="col-3">
          <span>{email}</span>
        </div>
        <div className="col-3">{phone}</div>
        <div className="col-3">
          <button
            className="btn btn-danger"
            onClick={() => deleteButtonHandler(name)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
export default AddData;
