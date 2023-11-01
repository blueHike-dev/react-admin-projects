import "./sidebar.scss";

const Sidebar = ({ props }) => {
  return (
    <div className="modal-wrapper">
      <div className="modal">
        <span className="close" onClick={() => props.setOpen(false)}>
          X
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
