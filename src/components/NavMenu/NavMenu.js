import className from "classnames";
import { NavLink } from "react-router-dom";

const NavMenu = ({ handleNavClose, isMenuActive }) => {
  const activeLink = className({ nav__active: isMenuActive });

  return (
    <nav className={`nav ${activeLink}`}>
      <div className="nav--div__close" onClick={handleNavClose}>
        close
      </div>
      <ul className="nav--ul">
        <li>
          <NavLink
            className="nav--link"
            activeClassName="nav--link__active"
            to="/"
            exact={true}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className="nav--link"
            activeClassName="nav--link__active"
            to="/dialog"
          >
            Dialog
          </NavLink>
        </li>
        <li>
          <NavLink
            className="nav--link"
            activeClassName="nav--link__active"
            to="/snackbar"
          >
            Snackbar
          </NavLink>
        </li>
        <li>
          <NavLink
            className="nav--link"
            activeClassName="nav--link__active"
            to="/users"
          >
            Users list
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
