import React, { useEffect, useState } from "react";
import { useSearchGithubUser } from "../hooks/debounce";
import GithubUserCard from "./GithubUserCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusSquare,
  faMinusSquare,
} from "@fortawesome/free-regular-svg-icons";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import { css } from "@emotion/core";

const GithubUserLookUp = () => {
  const [stars, setStars] = useState("hi");
  const [showJson, setShowJson] = useState(false);

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
        <div className="flex">
          <input
            value={inputText}
            className="justify-end my-2 font-bold border rounded"
            placeholder="Enter a github username"
            onChange={(e) => setInputText(e.target.value)}
          />
          {search.loading && (
            <FontAwesomeIcon className="ml-5 mt-3" icon={faGithubAlt} />
          )}
        </div>
        <span onClick={() => setShowJson(!showJson)}>
          {showJson ? (
            <FontAwesomeIcon icon={faMinusSquare} />
          ) : (
            <FontAwesomeIcon icon={faPlusSquare} />
          )}
        </span>
        {showJson && <pre>{JSON.stringify(search.result, undefined, 2)}</pre>}
      </div>
      <pre>{JSON.stringify(search, undefined, 2)}</pre>
    </>
  );
};

export default GithubUserLookUp;
