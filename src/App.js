import React from "react";
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import GithubLookUp from "./components/GithubLookUp";

function App() {
  // Nav Bar component
  return (
    <>
      <GithubLookUp />
    </>
  );
}

export default App;
