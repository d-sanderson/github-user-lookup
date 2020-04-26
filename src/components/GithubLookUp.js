import React from "react";
import { useSearchGithubUser } from "../hooks/debounce";
const GithubLookUp = () => {
  const { inputText, setInputText, search } = useSearchGithubUser();
  return (
    <>
      <div className="flex justify-center items-center flex-col">
        <input
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <div className="md:flex justify-center items-center">
          <div className="md:flex-shrink-0">
            <img
              className="rounded-lg md:w-56"
              src=""
              alt="Woman paying for a purchase"
            />
          </div>
          <div className="mt-4 md:mt-0 md:ml-6">
            <div className="lowercase tracking-wide text-sm text-indigo-600 font-bold">
              {search.login}
            </div>
            <div className="lowercase tracking-wide text-sm text-indigo-600 font-bold"></div>
            <div className="lowercase tracking-wide text-sm text-indigo-600 font-bold"></div>
            <div className="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline"></div>
            <p className="mt-2 text-gray-600">Acct Created: </p>
            <p className="mt-2 text-gray-600">Last Updated: </p>
            <div className="flex">
              <span className="m-2 bg-indigo-500 text-white text-xs px-2 py-1 rounded-full uppercase font-semibold tracking-wide inline-block ">
                <a href="#"> public repos</a>
              </span>
            </div>
          </div>
        </div>
        <pre> {JSON.stringify(search)}</pre>{" "}
        <pre> {JSON.stringify(search.result, undefined, 2)}</pre>{" "}
      </div>
    </>
  );
};

export default GithubLookUp;
