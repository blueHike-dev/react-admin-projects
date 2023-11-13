import "./blog.scss";
import React from "react";
import ReactMarkdown from "react-markdown";

const Blog = ({ title, content }) => {
  return (
    <div className="blog">
      <h1>{title}</h1>
      <ReactMarkdown source={content} />
    </div>
  );
};

export default Blog;
