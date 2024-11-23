import React, { useContext, useState } from "react";
import { MdDelete } from "react-icons/md";
import { PostlistContext } from "../Store/Contexts";

const Posts = ({ post }) => {
  const { deletePost } = useContext(PostlistContext);
  // const [likeCount, setLikeCount] = useState(0);
  // const handleLikes = () => {
  //   setLikeCount(likeCount + 1);
  // };

  return (
    <div className="card m-2" style={{ width: "30rem" }}>
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        <MdDelete onClick={() => deletePost(post.id)} />
        {/* <span className="visually-hidden">unread messages</span> */}
      </span>
      <div className="card-body">
        <h5 className="card-title ">{post.title}</h5>
        <p className="card-text">{post.body}</p>
        {/* <span className="badge text-bg-primary m-2" onClick={handleLikes}>
          Likes {likeCount}
        </span>
        <span className="badge text-bg-success">Comments {post.comments}</span> */}
        {post.tags?.map((ele) => (
          <span className="badge text-bg-success m-2" key={ele}>
            {ele}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Posts;
