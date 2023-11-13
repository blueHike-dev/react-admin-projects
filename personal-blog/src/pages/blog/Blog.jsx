import "./blog.scss";
import React from "react";
import { useParams } from "react-router-dom";
import { blogData } from "../../data";
import SingleBlog from "../../components/singleBlog/SingleBlog";

const Blog = () => {
  const { blogId } = useParams();
  // const blogId = "1";
  const selectedBlog = blogData.find((blog) => blog.id === blogId);

  if (!selectedBlog) {
    return <div>Blog not found</div>;
  }
  return (
    <div className="blog-page">
      <SingleBlog {...selectedBlog} />
    </div>
  );
};

export default Blog;
