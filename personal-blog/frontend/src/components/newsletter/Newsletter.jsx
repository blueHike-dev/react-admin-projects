import "./newsletter.scss";
import React from "react";
import { Link } from "react-router-dom";

import Likes from "../likes/Likes";

const Newsletter = () => {
  return (
    <div className="main">
      <div className="intro">
        <h1>Let's develop and Build together</h1>
        <p>
          My Commmitment and Passion is belived to be crucial in the creativity
          of developing great projects
        </p>
      </div>
      <div className="cards">
        <div className="card-intro">
          <h1>Developing Quality Projects over Quantity</h1>
          <p>
            Even though I believe in Quality over Quantity, I put more time and
            effort to develop more Quality projects.
          </p>
        </div>
        <div className="projectSample">
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
              <Link to="projects">
                <button className="view">view</button>
              </Link>
              <div className="icon">
                <Likes />
              </div>
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
              <Link to="blogs">
                <button className="view">view</button>
              </Link>
              <div className="icon">
                <Likes />
              </div>
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
              <Link to="videos">
                <button className="view">view</button>
              </Link>
              <div className="icon">
                <Likes />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
