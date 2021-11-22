function SnackbarButton({ handleClick, children }) {
  return (
    <button className="snackbar--button__show" onClick={handleClick}>
      {children}
    </button>
  );
}

export default SnackbarButton;
