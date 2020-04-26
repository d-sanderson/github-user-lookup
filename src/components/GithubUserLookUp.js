import React from "react";
import { useSearchGithubUser } from "../hooks/debounce";
import GithubUserCard from "./GithubUserCard";
const GithubUserLookUp = () => {
  const { inputText, setInputText, search } = useSearchGithubUser();
  return (
    <>
      <div className="flex justify-center items-center flex-col">
        <GithubUserCard result={search.result} />
        <input
          value={inputText}
          className="m-5 font-bold border rounded"
          placeholder="Search for a github user"
          onChange={(e) => setInputText(e.target.value)}
        />
      </div>
    </>
  );
};

export default GithubUserLookUp;
