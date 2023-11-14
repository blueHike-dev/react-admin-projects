import "./blog.scss";
import React from "react";
import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { blogId } = useParams();
  const [blogPost, setBlogPost] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/api/blogs/${blogId}`)
      .then((response) => response.json())
      .then((data) => setBlogPost(data))
      .catch((error) => console.error("Error fetching blog posts:", error));
  }, [blogId]);

  if (!blogPost) {
    return <div>Loading...</div>;
  }

  return (
    
      <div className="blog-page">
        <h1>{blogPost.title}</h1>
        <img src={blogPost.img} alt="" />
        <p>{blogPost.content}</p>
      </div>
         <h3>{blogPost.author}</h3> 
    
  );
};

export default BlogPost;
