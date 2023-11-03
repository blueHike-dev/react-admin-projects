import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import "./navbar.scss";
import React, { useContext, useState } from "react";
import {
  BsFillBrightnessHighFill,
  BsFillMoonFill,
  BsFilterLeft,
  BsGithub,
} from "react-icons/bs";
import Sidebar from "../sidebar/Sidebar";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { mode, darkMode } = useContext(DarkModeContext);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = (path) => {
    setOpen(false);
    navigate(path);
  };

  const openSidebar = () => {
    setOpen(!open);
  };
  return (
    <div>
      <div className="navbar">
        <div className="left">
          <div className="toggle">
            <button onClick={openSidebar}>
              {open ? (
                <div className="close-icon">x</div>
              ) : (
                <div className="menu-icon">
                  <BsFilterLeft />
                </div>
              )}
            </button>
          </div>
          {open && (
            <div className="sidebar">
              <Sidebar handleClick={handleClick} />
            </div>
          )}
          <Link to="/" className="logo">
            blueHike
          </Link>
        </div>
        <div className="middle">
          <Link to="/projects">Projects</Link>
          <Link to="/blogs">Blogs</Link>
          <Link to="/videos">Videos</Link>
        </div>
        <div className="right">
          <div className="toggleMode">
            {darkMode ? (
              <BsFillBrightnessHighFill onClick={mode} />
            ) : (
              <BsFillMoonFill onClick={mode} />
            )}
          </div>
          <div className="icon">
            <a href="https://github.com/simo6lues">
              <BsGithub />
            </a>
          </div>
          <Link to="/about">
            <span>
              <img src="simo.jpg" alt="simo" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
