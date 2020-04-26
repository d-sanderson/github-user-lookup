import React, { useState } from "react";
import { useSearchGithubUser } from "../hooks/debounce";
import GithubUserCard from "./GithubUserCard";
import { css } from "@emotion/core";
const GithubUserLookUp = () => {
  const [seeJson, setSeeJson] = useState(false);
  const { inputText, setInputText, search } = useSearchGithubUser();
  return (
    <>
      <div className="flex justify-center items-center flex-col lg:my-48 md:my-24 my-12 mx-4">
        <GithubUserCard result={search.result} />
        <input
          value={inputText}
          className="m-5 font-bold border rounded"
          placeholder="Enter a github username"
          onChange={(e) => setInputText(e.target.value)}
        />
      </div>
    </>
  );
};

export default GithubUserLookUp;
