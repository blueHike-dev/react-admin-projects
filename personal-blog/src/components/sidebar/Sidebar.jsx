import "./sidebar.scss";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="modal-wrapper">
      <div className="modal">
        <Link to="/blogs">Blogs</Link>
        <Link to="/videos">Videos</Link>
        <Link to="/category">Categories</Link>
      </div>
    </div>
  );
};

export default Sidebar;
