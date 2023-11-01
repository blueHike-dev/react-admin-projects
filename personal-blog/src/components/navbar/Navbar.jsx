import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import "./navbar.scss";
import React, { useContext, useState } from "react";
import {
  BsFillBrightnessHighFill,
  BsFillMoonFill,
  BsFilterLeft,
} from "react-icons/bs";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  const { mode, darkMode } = useContext(DarkModeContext);
  const [open, setOpen] = useState(false);
  return (
    <div>
      {open && <Sidebar setOpen={setOpen} />}
      <div className="navbar">
        <div className="left">
          <div className="toggle">
            <button onClick={() => setOpen(true)}>
              <BsFilterLeft />
            </button>
          </div>
          <Link to="/" style={{ textDecoration: "none" }}>
            blueHike
          </Link>
        </div>
        <div className="middle">
          <Link to="/blogs">Blogs</Link>
          <Link to="/videos">Videos</Link>
          <Link to="/category">Categories</Link>
        </div>
        <div className="right">
          {darkMode ? (
            <BsFillBrightnessHighFill onClick={mode} />
          ) : (
            <BsFillMoonFill onClick={mode} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
