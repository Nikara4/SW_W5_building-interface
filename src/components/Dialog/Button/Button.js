function Button({ handleClick, children }) {
  return (
    <button className="dialog--button" type="button" onClick={handleClick}>
      {children}
    </button>
  );
}

export default Button;
