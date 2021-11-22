function Dialog(props) {
  const {
    close,
    title,
    text,
    handleConfirm,
    confirm,
    handleAbort,
    abort
  } = props;
  return (
    <div className="dialog">
      <div className="dialog--close" onClick={close}>
        X
      </div>
      <div className="dialog--title">{title}</div>
      <div className="dialog--text">{text}</div>
      <div className="dialog--button__confirm" onClick={handleConfirm}>
        {confirm}
      </div>
      <div
        className="dialog--button__confirm dialog--button__abort"
        onClick={handleAbort}
      >
        {abort}
      </div>
      <div className="dialog--div__background"></div>
    </div>
  );
}

export default Dialog;
