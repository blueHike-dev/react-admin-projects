import "./likes.scss";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";

const Likes = () => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="likes">
      <button
        onClick={handleLikeClick}
        className={`like-button ${isLiked ? "liked" : ""}`}>
        <FontAwesomeIcon
          icon={isLiked ? solidHeart : regularHeart}
          style={{ color: isLiked ? "red" : "darkGrey" }}
        />
      </button>
    </div>
  );
};

export default Likes;
