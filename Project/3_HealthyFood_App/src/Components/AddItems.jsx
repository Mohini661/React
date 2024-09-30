const AddItems = ({inputChange})=>{
    return <div className="inputtext mt-4">
        <input type="text" placeholder="Enter Food name" className="form-control" onKeyUp={inputChange}/>
    </div>
}
export default AddItems