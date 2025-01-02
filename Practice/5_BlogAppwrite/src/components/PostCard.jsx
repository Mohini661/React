import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

const PostCard = ({ $id, title, featuredImage }) => {
  const imageUrl = featuredImage
    ? appwriteService.getFilePreview(featuredImage)
    : "https://via.placeholder.com/300?text=No+Image";
  // : null;

  // console.log(featuredImage);

  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-gray-100 rounded-xl p-4">
        <div className="w-full justify-center mb-4">
          <img
            // src={appwriteService.getFilePreview(featuredImage)}
            src={imageUrl}
            alt={title}
            className="rounded-xl"
          />
        </div>
        <h6 className="text-xl font-bold">{title}</h6>
      </div>
    </Link>
  );
};

export default PostCard;
