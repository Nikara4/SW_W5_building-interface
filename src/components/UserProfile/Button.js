import { Link } from "react-router-dom";

const Button = () => {
  return (
    <button className="user--button">
      <Link className="user--button__link" to="/users">
        Previous Page
      </Link>
    </button>
  );
};

export default Button;
