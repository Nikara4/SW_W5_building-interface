import { Link } from "react-router-dom";

const User = ({ user }) => {
  return (
    <li className="users--li">
      <Link
        className="users--link"
        to={{
          pathname: "/user-profile",
          state: { user }
        }}
      >
        {user.name} {user.surname}
      </Link>
    </li>
  );
};

export default User;
