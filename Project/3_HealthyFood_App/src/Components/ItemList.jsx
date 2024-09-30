import { useState } from "react";
import Item from "./Item";

const ItemList = ({ fData }) => {
  let [boughtItem, setBoughtItem] = useState([]);

  const buyButtonHandler = (name) => {
    const newItemList = [...boughtItem, name];
    setBoughtItem(newItemList);
  };

  const removeButtonHandler = (name)=>{
    const newItemList = boughtItem.filter(ele=>ele!=name)
    setBoughtItem(newItemList)
  }

  return (
    <>
      <ul className={`list-group `}>
        {fData.map((ele) => (
          <Item
            key={ele}
            fname={ele}
            bought={boughtItem.includes(ele)}
            buyButtonHandler={buyButtonHandler}
            removeButtonHandler={removeButtonHandler}
          ></Item>
        ))}
      </ul>
    </>
  );
};
export default ItemList;
