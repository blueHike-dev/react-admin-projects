import "./blogList.scss";
import React from "react";
import Likes from "../../components/likes/Likes";
import { Link } from "react-router-dom";

const BlogList = ({
  id,
  imageUrl,
  title,
  authorUrl,
  authorName,
  timePublished,
}) => {
  return (
    <div>
      <Link to={`/blog/${id}`}>
        <div className="card">
          <img src={imageUrl} alt="" />
          <h1>{title}</h1>
          <div className="page-section">
            <div className="left">
              <img src={authorUrl} alt="" />
              <span>{authorName}</span>
              <div className="dot"></div>
              <span>{timePublished}</span>
            </div>
            <div className="right">
              <div className="icons">
                <Likes />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogList;
