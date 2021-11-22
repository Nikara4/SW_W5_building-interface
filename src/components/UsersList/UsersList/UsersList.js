import User from "./../User";

const UsersList = ({ users }) => {
  return (
    <ul className="users--ul">
      {users.map((empl) => (
        <User key={`empl-${empl.id}`} user={empl} />
      ))}
    </ul>
  );
};

export default UsersList;
