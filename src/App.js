import React from "react";
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import DeleteMe from "./components/DeleteMe";

function App() {
  // Nav Bar component
  return (
    <>
      <DeleteMe />
    </>
  );
}

export default App;
