import Item from "./Item";
const ToDoItem = ({ toDoItemList,deleteButtonClick }) => {
  return (
    <>
      {toDoItemList.map((item) => (
        <Item toDoName={item.name} toDoDate={item.date} key={item.name} deleteButtonClick={deleteButtonClick}></Item>
      ))}
    </>
  );
};
export default ToDoItem; 
