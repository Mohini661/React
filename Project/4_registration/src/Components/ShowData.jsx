import AddData from "./AddData"
const ShowData = ({Sdata,deleteButtonClick}) =>{
    return <>
    {Sdata.map((ele)=><AddData key={ele.name} name={ele.name} email={ele.email} phone={ele.phone} deleteButtonClick={deleteButtonClick}></AddData>)}
    </>
}
export default ShowData