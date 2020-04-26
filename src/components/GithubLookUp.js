import React, { useState, useEffect } from "react";
import axios from "axios";
const GithubLookUp = () => {
  const [data, setData] = useState({ users: [] });
  useEffect(() => {
    async function fetchData() {
      const result = await axios("https://api.github.com/users/dsanderson90");
      setData(result.data);
    }
    fetchData();
  }, []);

  return (
    <>
      {" "}
      <input type="text" />
      <pre>{JSON.stringify(data)} </pre>{" "}
    </>
  );
};

export default GithubLookUp;
