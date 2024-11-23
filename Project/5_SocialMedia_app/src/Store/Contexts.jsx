import { createContext, useReducer, useState } from "react";

export const PostlistContext = createContext([]);

const postlistReducer = (postlist, action) => {
  // let newList = postlist;
  if (action.type === "ADD_POST") {
    return [...postlist, action.payload];
  } else if (action.type === "DELETE_POST") {
    return (postlist = postlist.filter((ele) => ele.id !== action.payload));
  } else if (action.type === "INIT_POST") {
    return (postlist = action.payload.posts);
  }
  // return newList;
};

const PostlistContextProvider = ({ children }) => {
  const [postlist, postlistDispatcher] = useReducer(postlistReducer, []);

  const addPost = (id, title, content) => {
    const addData = {
      type: "ADD_POST",
      payload: {
        id: id,
        title: title,
        content: content,
        likes: "0",
        comments: "0",
      },
    };
    postlistDispatcher(addData);
  };
  const deletePost = (id) => {
    const deleteData = {
      type: "DELETE_POST",
      payload: id,
    };
    postlistDispatcher(deleteData);
  };

  const initPost = (posts) => {
    const initPostData = {
      type: "INIT_POST",
      payload: { posts },
    };
    postlistDispatcher(initPostData);
  };
  return (
    <PostlistContext.Provider
      value={{ postlist, initPost, addPost, deletePost }}
    >
      {children};
    </PostlistContext.Provider>
  );
};

export default PostlistContextProvider;
