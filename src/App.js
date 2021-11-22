import "./styles/styles.sass";
import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavMenu from "./components/NavMenu";
import MenuToggleButton from "./components/MenuToggleButton";
import Home from "./pages/Home";
import PageDialog from "./pages/Dialog";
import PageSnackbar from "./pages/Snackbar";
import UsersContainer from "./components/UsersList/UsersContainer";
import PageUserProfile from "./pages/PageUserProfile";

const App = () => {
  const [navMenu, setNavMenu] = useState(false);

  const handleNav = () => {
    setNavMenu(!navMenu);
  };

  return (
    <Router>
      <div className="wrapper">
        <aside className="navbar">
          <NavMenu isMenuActive={navMenu} handleNavClose={handleNav} />
        </aside>
        <main className="main-content">
          <h1 className="main-content--title">Tydzień 5: Szkoła Reacta</h1>
          {!navMenu ? (
            <MenuToggleButton handleNav={handleNav} label="show menu" />
          ) : (
            <MenuToggleButton handleNav={handleNav} label="hide menu" />
          )}

          <Switch>
            <Route path="/" exact={true}>
              <Home />
            </Route>
            <Route path="/dialog">
              <PageDialog />
            </Route>
            <Route path="/snackbar">
              <PageSnackbar />
            </Route>
            <Route path="/users">
              <UsersContainer />
            </Route>
            <Route path="/user-profile">
              <PageUserProfile />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default App;
