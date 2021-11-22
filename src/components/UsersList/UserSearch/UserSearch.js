import { useState } from "react";

const UserSearch = ({ query }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    setSearchValue(event.target.search.value);
    query(searchValue);
  };

  const getValue = (event) => {
    setSearchValue(event.target.value);
  };

  const handleReset = () => {
    setSearchValue("");
    query("");
  };

  return (
    <form type="submit" onSubmit={handleSearch} className="search--form">
      <label className="search--label" htmlFor="search">
        Search for user:
      </label>
      <input
        type="text"
        placeholder="Search for name/surname"
        className="search--input"
        id="search"
        value={searchValue}
        onChange={getValue}
      ></input>
      <button
        type="button"
        className="search--button__reset"
        onClick={handleReset}
      >
        reset
      </button>
    </form>
  );
};

export default UserSearch;
