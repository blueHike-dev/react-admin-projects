import "./sidebar.scss";
import { Link } from "react-router-dom";

const Sidebar = ({ handleClick }) => {
  return (
    <div className="modal-wrapper">
      <div className="modal">
        <Link to="/projects" onClick={() => handleClick("/projects")}>
          Projects
        </Link>
        <Link to="/blogs" onClick={() => handleClick("/blogs")}>
          Blogs
        </Link>
        <Link to="/videos" onClick={() => handleClick("/videos")}>
          Videos
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
