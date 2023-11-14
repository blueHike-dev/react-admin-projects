import BlogList from "../../components/blogList/BlogList";
import ReadMore from "../../components/readMore/ReadMore";
import { blogData } from "../../data";
import "./blogs.scss";
import React, { useEffect, useState } from "react";

const Blogs = () => {
  const introWords = `
         Welcome to my blogs page.The purpose of the page is to share my passion,
        and that includes Coding, Reading Books and taking Walks. So I will be
        sharing all I have learnt from the books that I read and what benefits I
        get from taking walks on the daily basis. Also, since Im a self-taught developer, I will be sharing all the challenges I faced on my journey of
        becoming a software developer. I will also be sharing all the errors
        that I encouter on a daily or weekly basis and the solution to them when
        I solve them. Like I said before, my purpose has always been to make the
        world a better place and feel like this is the safiest space to
        kickstart my journey. I hope you will enjoy everything that I will be
        sharing.`;

  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/blogs")
      .then((response) => response.json())
      .then((data) => setBlogPosts(data))
      .catch((error) => console.error("Error fetching blog posts:", error));
  }, []);

  return (
    <div className="blogs-page">
      <div className="introduction">
        <ReadMore text={introWords} maxLength={321} />
      </div>
      <div className="search">
        <input type="text" placeholder="Search blog..." />
      </div>
      <div className="posts">
        {blogPosts.map((blog) => (
          <BlogList key={blog._id} {...blog} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
