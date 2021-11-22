import { useState } from "react";

import Button from "./../components/Dialog/Button";
import Dialog from "./../components/Dialog/Dialog";
import data from "./../data/dialogData.json";

const PageDialog = () => {
  const [dialogWindow, setDialogWindow] = useState(false);

  function handleDialogWindow() {
    setDialogWindow(!dialogWindow);
  }

  function handleConfirm() {
    alert(`You have confirmed to discarg changes.`);
  }

  function handleAbort() {
    alert("You have decided to abort to the current page.");
  }

  return (
    <div>
      <Button handleClick={handleDialogWindow}>SHOW DIALOG</Button>
      {dialogWindow ? (
        <Dialog
          title={data.title}
          text={data.text}
          confirm="Confirm"
          abort="Abort"
          handleConfirm={handleConfirm}
          handleAbort={handleAbort}
          close={handleDialogWindow}
        />
      ) : null}
    </div>
  );
};

export default PageDialog;
