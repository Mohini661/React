const AddData = ({ name, email, phone,deleteButtonClick}) => {
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
          <button className="btn btn-danger" onClick={()=>deleteButtonClick(name)}>Delete</button>
        </div>
      </div>
    </div>
  );
};
export default AddData;
