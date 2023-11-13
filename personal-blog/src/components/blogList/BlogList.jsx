import "./blogList.scss";
import React, { useState } from "react";
import Likes from "../../components/likes/Likes";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisVertical,
  faPaperPlane,
  faShareAlt,
} from "@fortawesome/free-solid-svg-icons";

const BlogList = ({
  id,
  imageUrl,
  title,
  authorUrl,
  authorName,
  timePublished,
}) => {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          url: window.location.href,
        });
        alert("Shared Successfuly");
      } catch (error) {
        console.error("Error sharing:", error);
      }
    }
  };

  const [showOptions, setShowOptions] = useState(false);

  const handleOption = () => {
    setShowOptions(!showOptions);
  };

  const handleRandomOption = () => {
    const options = ["Option 1", "Option 2", "Option 3"];
    const randomOption = options[Math.floor(Math.random() * options.length)];
    alert(`Selected option: ${randomOption}`);
  };
  return (
    <div>
      <div className="card">
        <Link className="link" to={`/blogs/${id}`}>
          <img src={imageUrl} alt="" />
          <h1>{title}</h1>
        </Link>
        <div className="page-section">
          <div className="left">
            <Link to="/about">
              <img src={authorUrl} alt="" />
            </Link>
            <span>{authorName}</span>
            <div className="dot"></div>
            <span>{timePublished}</span>
          </div>
          <div className="right">
            <Likes />
            <button onClick={handleShare} className="share">
              <FontAwesomeIcon icon={faShareAlt} />
            </button>
            <button className="share">
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogList;
