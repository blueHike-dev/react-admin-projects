import "./blog.scss";
import React from "react";
import { useParams } from "react-router-dom";
import { blogData } from "../../data";

const BlogPost = () => {
  const { blogId } = useParams();
  const blogPost = blogData.find((post) => post.id === blogId);

  if (!blogPost) {
    return <div>Blog post not found</div>;
  }

  return (
    <div className="blog-page">
      <img src={blogPost.imageUrl} alt="" />
      <h2>{blogPost.title}</h2>
      <p>{blogPost.content}</p>
    </div>
  );
};

export default BlogPost;
