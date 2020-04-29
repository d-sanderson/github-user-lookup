import React, { useEffect, useState } from "react";
import { useSearchGithubUser } from "../hooks/debounce";

import GithubUserCard from "./GithubUserCard";
import { css } from "@emotion/core";
const GithubUserLookUp = () => {
  const [stars, setStars] = useState("hi");
  const { inputText, setInputText, search } = useSearchGithubUser();
  useEffect(() => {
    const searchGithubUserStarred = async (text, abortSignal) => {
      const url = `https://api.github.com/users/${text}/starred`;
      const result = await fetch(url, {
        signal: abortSignal,
      });
      if (result.status !== 200) {
        throw new Error("bad status = " + result.status);
      }
      console.log(result);
      setStars(result.json());
    };
    searchGithubUserStarred(search.result?.login);
  }, [inputText]);

  return (
    <>
      <div className="flex justify-center items-center flex-col mx-4">
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
