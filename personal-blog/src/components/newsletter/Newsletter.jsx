import "./newsletter.scss";
import React from "react";

const Newsletter = () => {
  return (
    <div className="main">
      <div className="intro">
        <h1>Let's develop and Build together</h1>
        <p>
          My Commmitment and Passion is belevied to be crucial in the creativity
          of developing great projects
        </p>
      </div>
      <div className="cards">
        <div className="card-intro">these are some of the samples</div>
        <div className="projects">
          <h3>hello</h3>
          <div className="samples">
            <img src="computer.jpg" alt="" />
            <div className="headline">
              <h3>blog post</h3>
              <p className="author">blueHike</p>
            </div>
            <div className="like">
              <button>view</button>
              <div className="icon">like icon</div>
            </div>
          </div>
          <div className="samples">
            <img src="computer.jpg" alt="" />
            <div className="headline">
              <h3>blog post</h3>
              <p className="author">blueHike</p>
            </div>
            <div className="like">
              <button>view</button>
              <div className="icon">like icon</div>
            </div>
          </div>
          <div className="samples">
            <img src="computer.jpg" alt="" />
            <div className="headline">
              <h3>blog post</h3>
              <p className="author">blueHike</p>
            </div>
            <div className="like">
              <button>view</button>
              <div className="icon">like icon</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
