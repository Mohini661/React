import React, { useContext, useEffect, useState } from "react";
import Posts from "./Posts";
import { PostlistContext } from "../Store/Contexts";
import WelcomeMsg from "./WelcomeMsg";
import Loading from "./Loading";

const PostList = () => {
  const { postlist, initPost } = useContext(PostlistContext);

  const [loading, setLoading] = useState(false);

  const fetchPostsData = () => {};

  useEffect(() => {
    setLoading(true);
    fetch("https://dummyjson.com/posts")
      .then((result) => {
        return result.json();
      })
      .then((data) => {
        initPost(data.posts);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(postlist);

  return (
    <div className="cards  ">
      {loading && <Loading></Loading>}
      {!loading && postlist.length === 0 && (
        <WelcomeMsg fetchPostsData={fetchPostsData}></WelcomeMsg>
      )}
      {!loading &&
        postlist?.map((post) => <Posts key={post.id} post={post}></Posts>)}
    </div>
  );
};

export default PostList;
