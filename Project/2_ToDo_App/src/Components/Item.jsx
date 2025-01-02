import { MdDelete, MdEdit } from "react-icons/md";

const Item = ({ task, updateToDo }) => {
  const deleteToDo = (id) => {
    fetch(`http://localhost:3000/tasks/${id}`, {
      method: "delete",
    });
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-2">
          <span>{task.id}</span>
        </div>
        <div className="col-3">
          <span>{task.name}</span>
        </div>
        <div className="col-3">
          <span>{task.date}</span>
        </div>
        <div className="col-1">
          <button
            className="btn btn-primary"
            onClick={() => updateToDo(task.id)}
          >
            <MdEdit />
          </button>
        </div>
        <div className="col-1">
          <button
            className="btn btn-danger"
            onClick={() => deleteToDo(task.id)}
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Item;
