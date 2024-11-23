import React from "react";

const WelcomeMsg = ({ fetchPostsData }) => {
  return (
    <center>
      <h1>There is no Post !!!</h1>
      <button className="btn btn-success" onClick={fetchPostsData}>
        View All Posts
      </button>
    </center>
  );
};

export default WelcomeMsg;
