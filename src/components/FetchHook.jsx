import React, { useEffect, useState } from "react";

const baseUrl = "http://jsonplaceholder.typicode.com";
export const FetchHook = () => {
  const [usersData, setUsersData] = useState(null);

  const fetchData = async type => {
    const response = await fetch(baseUrl + "/" + type);
    const data = await response.json();
    console.log(data);
    setUsersData(data);
  };

  useEffect(() => {
    fetchData("users");
  }, []);
  return (
    <>
      <h1>useFetch!</h1>
      <button onClick={() => fetchData("users")}>Users</button>
      <button onClick={() => fetchData("posts")}>Posts</button>
      <button onClick={() => fetchData("todos")}>Todos</button>
      <pre>{JSON.stringify(usersData, null, 2)}</pre>
    </>
  );
};
