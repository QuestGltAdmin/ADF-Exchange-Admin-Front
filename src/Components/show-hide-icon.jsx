const ShowHideIcon = ({ hidden = false, onClick }) => {
  return (
    <span onClick={onClick} style={{ cursor: "pointer" }}>
      <i className={`fa ${hidden ? "fa-eye-slash" : "fa-eye"}`} />
    </span>
  );
};

export default ShowHideIcon;
