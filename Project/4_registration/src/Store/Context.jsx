import { createContext, useReducer } from "react";
export const listContext = createContext([]);

const listReducer = (inputData, action) => {
  let newArray = inputData;
  if (action.type == "Add_Data") {
    newArray = [
      ...inputData,
      { name: action.name, email: action.email, phone: action.phone },
    ];
  } else if (action.type == "Remove_Data") {
    newArray = inputData.filter((ele) => ele.name != action.name);
  }
  return newArray;
};

const ListItemContextProvider = (props) => {
  const [inputData, dispatcherList] = useReducer(listReducer, []);

  const inputHandler = (name, email, phone) => {
    const addData = {
      type: "Add_Data",
      name: name,
      email: email,
      phone: phone,
    };
    dispatcherList(addData);
  };
  const deleteButtonHandler = (name) => {
    const removeData = {
      type: "Remove_Data",
      name: name, 
    };
    dispatcherList(removeData);
  };
  return (
    <listContext.Provider
      value={{ inputData, inputHandler, deleteButtonHandler }}
    >
      {props.children}
    </listContext.Provider>
  );
};
export default ListItemContextProvider;
