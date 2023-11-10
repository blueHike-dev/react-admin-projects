import "./newsletter.scss";
import React from "react";
import { Link } from "react-router-dom";

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
              <h3>Sample project</h3>
              <p>
                developed by
                <Link to="/about">
                  <span> blueHike</span>
                </Link>
              </p>
            </div>
            <div className="like">
              <button>view</button>
              <div className="icon">like icon</div>
            </div>
          </div>
          <div className="samples">
            <img src="computer.jpg" alt="" />
            <div className="headline">
              <h3>Blog posts</h3>
              <p className="author">
                written by{" "}
                <Link to="/about">
                  <span> blueHike</span>
                </Link>
              </p>
            </div>
            <div className="like">
              <button>view</button>
              <div className="icon">like icon</div>
            </div>
          </div>
          <div className="samples">
            <img src="computer.jpg" alt="" />
            <div className="headline">
              <h3>Videos posts</h3>
              <p className="author">
                published by{" "}
                <Link to="/about">
                  <span> blueHike</span>
                </Link>
              </p>
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
