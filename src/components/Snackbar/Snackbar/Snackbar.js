function Snackbar({ type, handleClick, position }) {
  return (
    <div className={`snackbar--div snackbar--div__${type}`} style={position}>
      <div>This is a message!</div>
      <button
        className={`snackbar--button snackbar--button__${type}`}
        onClick={handleClick}
      >
        CLOSE
      </button>
    </div>
  );
}

export default Snackbar;
