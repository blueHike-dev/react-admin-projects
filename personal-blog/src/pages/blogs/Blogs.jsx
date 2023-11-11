import Likes from "../../components/likes/Likes";
import ReadMore from "../../components/readMore/ReadMore";
import "./blogs.scss";
import React from "react";

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
  return (
    <div className="blogs-page">
      <div className="introduction">
        <ReadMore text={introWords} maxLength={321} />
      </div>
      <div className="search">
        <input type="text" />
      </div>
      <div className="posts">
        <div className="card">
          <img src="book.jpg" alt="" />
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
            cupiditate!
          </h1>
          <div className="page-section">
            <div className="left">
              <img src="simo.jpg" alt="" />
              <h2>blueHike</h2>
              <h3>21h</h3>
            </div>
            <div className="right">
              <div className="icons">
                <Likes style={{ background: "transparent" }} />
              </div>
            </div>
          </div>
        </div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
      </div>
    </div>
  );
};

export default Blogs;
