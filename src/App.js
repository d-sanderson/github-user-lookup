import React from "react";
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import GithubUserLookUp from "./components/GithubUserLookUp";

function App() {
  // Nav Bar component
  return (
    <>
      <GithubUserLookUp />
    </>
  );
}

export default App;
