import "./blogPost.scss";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { id } = useParams();
  const [blogPost, setBlogPost] = useState({});

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:5000/api/blogs/${id}`)
        .then((response) => response.json())
        .then((data) => setBlogPost(data))
        .catch((error) => console.error("Error fetching blog:", error));
    }
  }, [id]);

  if (!blogPost) {
    return <div>Loading...</div>;
  }
  return (
    <div className="blog-page">
      <h1>{blogPost.title}</h1>
      <img src={blogPost.img} alt="" />
      <p>{blogPost.content}</p>
      <p>Author: {blogPost.author}</p>
      <p>{blogPost.createdAt}</p>
    </div>
  );
};

export default BlogPost;
