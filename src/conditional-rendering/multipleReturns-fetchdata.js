import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/quincylarson";

const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          return response.json();
        } else {
          setIsLoading(false);
          setIsError(true);
        }
      })
      .then((jsonResult) => {
        setUser(jsonResult);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  } else if (isError) {
    return <h1>Error...</h1>;
  } else return <h1>{user.login}</h1>;
};

export default MultipleReturns;
