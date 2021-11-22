import { useState, useEffect } from "react";

import UsersList from "./../UsersList";
import UserSearch from "./../UserSearch";

const UsersContainer = () => {
  const [usersList, setUsersList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [matchedUser, setMatchedUser] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      await fetch("./data/users.json")
        .then((response) => response.json())
        .then((result) => {
          setUsersList(result.users);
          setLoading(true);
        })
        .catch((error) => {
          console.error(error);
          setLoading(false);
          setError(true);
        });
    };
    fetchData();
  }, []);

  useEffect(() => {
    setMatchedUser(
      usersList.filter((user) => {
        const fullName = `${user.name} ${user.surname}`
          .toLowerCase()
          .indexOf(searchQuery.toLowerCase());
        const firstName = user.name
          .toLowerCase()
          .indexOf(searchQuery.toLowerCase());
        const lastName = user.surname
          .toLowerCase()
          .indexOf(searchQuery.toLowerCase());
        if (fullName > -1 || firstName > -1 || lastName > -1) {
          return true;
        }
        return false;
      })
    );
  }, [usersList, searchQuery]);

  return (
    <div className="users">
      {!isLoading && <p className="users--p__loading">site loading...</p>}
      {isError && <p className="users--p__loading">An error occured</p>}

      <div className="users--search">
        <UserSearch query={setSearchQuery} />
      </div>
      <div className="users__list">
        <h3 className="users--h3">Users' profiles list</h3>
        {Object.keys(matchedUser).length > 0 ? (
          <UsersList users={matchedUser} />
        ) : (
          <p className="users--p__no-match">
            No user found with the search criteria provided
          </p>
        )}
      </div>
    </div>
  );
};

export default UsersContainer;
