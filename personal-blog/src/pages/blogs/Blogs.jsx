import "./blogs.scss";
import React from "react";

const Blogs = () => {
  return (
    <div className="blogs-page">
      <div className="introduction">
        Welcome to my blogs page.The purpose of the page is to share my passion,
        and that includes Coding, Reading Books and taking Walks. So I will be
        sharing all I have learnt from the books that I read and what benefits I
        get from taking walks on the daily basis. Also, since Im a self-taught
        developer, I will be sharing all the challenges I faced on my journey of
        becoming a software developer. I will also be sharing all the errors
        that I encouter on a daily or weekly basis and the solution to them when
        I solve them. Like I said before, my purpose has always been to make the
        world a better place and feel like this is the safiest space to
        kickstart my journey. I hope you will enjoy everything that I will be
        sharing.
      </div>
      <div className="posts"></div>
    </div>
  );
};

export default Blogs;
