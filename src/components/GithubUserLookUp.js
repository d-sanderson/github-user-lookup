import React, { useEffect, useState } from "react";
import { useSearchGithubUser } from "../hooks/debounce";
import GithubUserCard from "./GithubUserCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import { css } from "@emotion/core";
import JsonWidget from "./JsonWidget";

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
        {search.loading && (
          <>
            <FontAwesomeIcon className="ml-5 mt-3" icon={faGithubAlt} />
            ...Searching for user
          </>
        )}
        {search.error && (
          <div className="text-red-900">
            <FontAwesomeIcon className="ml-5 mt-3" icon={faGithubAlt} />{" "}
            <strong>Error:</strong> user not found. Please Try again
          </div>
        )}
        {search.result?.login && search.status === "success" ? (
          <div className="text-green-400">
            <FontAwesomeIcon className="ml-5 mt-3" icon={faGithubAlt} /> User{" "}
            <span className="font-bold">{search.result.login}</span> found!
          </div>
        ) : (
          ""
        )}
        <div className="flex">
          <input
            value={inputText}
            className="justify-end my-2 font-bold border rounded"
            placeholder="Enter a github username"
            onChange={(e) => setInputText(e.target.value)}
          />
        </div>
        {search.result?.login && <JsonWidget result={search.result} />}
      </div>
    </>
  );
};

export default GithubUserLookUp;
