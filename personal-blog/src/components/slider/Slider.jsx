import { BsInstagram, BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs";
import "./slider.scss";

const Slider = () => {
  return (
    <div className="container">
      <div className="profile-words">hellp world</div>
      <div className="profile-image">
        <div className="profile-wrapper">
          <div className="profile">
            <div className="profile-image">
              <img src="engineer.jpg" alt="simo" />
            </div>
            <ul className="social-icons">
              <li>
                <a href="#instagram" title="instagram">
                  <BsInstagram className="instagram" />
                </a>
              </li>
              <li>
                <a href="#twitter" title="twitter">
                  <BsTwitter className="twitter" />
                </a>
              </li>
              <li>
                <a href="#linkedin" title="linkedin">
                  <BsLinkedin className="linkedin" />
                </a>
              </li>
              <li>
                <a href="#youtube" title="youtube">
                  <BsYoutube className="youtube" />
                </a>
              </li>
            </ul>
            <div className="profile-name">
              <h2>blueHike</h2>
              <div className="profile-bio">
                I'm a javascript full-stack developer, and I enjoy working with
                <em> React</em> and <em>NodeJs</em>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
