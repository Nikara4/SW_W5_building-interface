import { useState, useEffect } from "react";

import SnackbarButton from "./../components/Snackbar/Button";
import Snackbar from "./../components/Snackbar/Snackbar";
import { position } from "./../data/snackbarPosition";

const PageSnackbar = () => {
  const [snackbar, setSnackbar] = useState(false);

  function handleClick() {
    setSnackbar(!snackbar);
  }

  function setSnackbarTimeout() {
    setTimeout(() => {
      setSnackbar(!snackbar);
    }, 5000);
  }

  function closeSnackbar() {
    setSnackbar(!snackbar);
  }

  useEffect(() => {
    if (snackbar) setSnackbarTimeout();

    return clearTimeout(setSnackbarTimeout);
  });

  return (
    <div>
      <SnackbarButton handleClick={handleClick}>OPEN SNACKBAR</SnackbarButton>
      {snackbar ? (
        <Snackbar
          position={position.bottomRight}
          handleClick={closeSnackbar}
          type="error"
        />
      ) : null}
    </div>
  );
};

export default PageSnackbar;
