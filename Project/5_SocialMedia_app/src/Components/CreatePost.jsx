import React, { useContext, useRef } from "react";
import { PostlistContext } from "../Store/Contexts";

const CreatePost = () => {
  const idRef = useRef();
  const titleRef = useRef();
  const contentRef = useRef();

  const { addPost } = useContext(PostlistContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost(
      idRef.current.value,
      titleRef.current.value,
      contentRef.current.value
    );
    e.target.reset();
  };

  return (
    <div className="create-item card mt-4 col-6 mx-auto p-5 ">
      <form className="form-container w-100" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="id" className="form-label">
            Post Id
          </label>
          <input
            type="text"
            className="form-control"
            id="id"
            aria-describedby="emailHelp"
            ref={idRef}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Post Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            ref={titleRef}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="content" className="form-label">
            Post Content
          </label>
          <input
            type="text"
            className="form-control"
            id="content"
            ref={contentRef}
          />
        </div>
        <div className="mb-3">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
