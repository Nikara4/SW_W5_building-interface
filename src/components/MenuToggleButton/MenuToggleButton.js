const MenuToggleButton = ({ handleNav, label }) => {
  return (
    <button className="button" onClick={handleNav}>
      {label}
    </button>
  );
};

export default MenuToggleButton;
