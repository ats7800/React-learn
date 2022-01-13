import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const FetchDataUseEffect = () => {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    const response = await fetch(url);
    const gitUsers = await response.json();
    setUsers(gitUsers);
    console.log(gitUsers);
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      <h1>GitHub Users</h1>
      <ul>
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt="" width={"70px"} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>Profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default FetchDataUseEffect;
