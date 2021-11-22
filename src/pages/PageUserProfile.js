import { useLocation } from "react-router-dom";
import Button from "./../components/UserProfile";

function UserProfile() {
  let location = useLocation();
  const user = location.state.user;

  return (
    <div className="user">
      <h2>Zadanie 5. User Profile</h2>
      <div className="user--profile">
        <p>
          <span>Name:</span>
          <span>
            {user.name} {user.surname}
          </span>
        </p>
        <p>
          <span>Age:</span> {user.age}
        </p>
        <p>
          <span>Position:</span> {user.position}
        </p>
        <p>
          <span>City of origin:</span> {user.city}
        </p>
        <p>
          <span>Country of origin:</span> {user.country}
        </p>
        <p>
          <span>email:</span>
          <a href={`mailto: ${user.email}`}>{user.email}</a>
        </p>
      </div>
      <Button />
    </div>
  );
}

export default UserProfile;
