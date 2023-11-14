import "./footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstitution } from "@fortawesome/free-solid-svg-icons";

import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="left">
          <ul className="social-icons">
            <li>
              <a href="#" target="_blank" style={{ color: "#1DA1F2" }}>
                <FontAwesomeIcon icon={faInstitution} />
              </a>
            </li>
          </ul>
        </div>
        <div className="right">right</div>
      </div>
      <div className="bottom">Copyright © 2023</div>
    </div>
  );
};

export default Footer;
