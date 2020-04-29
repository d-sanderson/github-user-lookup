import { useAsyncAbortable } from "react-async-hook";

import { useState } from "react";
import useConstant from "use-constant";
import AwesomeDebouncePromise from "awesome-debounce-promise";

const searchGithubUser = async (text, abortSignal) => {
  const url = `https://api.github.com/users/${text}`;
  const result = await fetch(url, {
    signal: abortSignal,
  });
  if (result.status !== 200) {
    throw new Error("bad status = " + result.status);
  }
  return result.json();
};

const searchGithubUserStarred = async (text, abortSignal) => {
  const url = `https://api.github.com/users/${text}/starred`;
  const result = await fetch(url, {
    signal: abortSignal,
  });
  if (result.status !== 200) {
    throw new Error("bad status = " + result.status);
  }
  return result.json();
};

export const useSearchGithubUserStarred = () => {
  // Handle the input text state
  const [username, setUserName] = useState("");

  // Debounce the original search async function
  const debouncedSearchGithubUser = useConstant(() =>
    AwesomeDebouncePromise(searchGithubUserStarred, 500)
  );

  const stars = useAsyncAbortable(
    async (abortSignal, text) => {
      // If the input is empty, return nothing immediately (without the debouncing delay!)
      if (text.length === 0) {
        return [];
      }
      // Else we use the debounced api
      else {
        return debouncedSearchGithubUser(text, abortSignal);
      }
    },
    // Ensure a new request is made everytime the text changes (even if it's debounced)
    [setUserName]
  );

  // Return everything needed for the hook consumer
  return {
    username,
    setUserName,
    stars,
  };
};

export const useSearchGithubUser = () => {
  // Handle the input text state
  const [inputText, setInputText] = useState("");

  // Debounce the original search async function
  const debouncedSearchGithubUser = useConstant(() =>
    AwesomeDebouncePromise(searchGithubUser, 500)
  );

  const search = useAsyncAbortable(
    async (abortSignal, text) => {
      // If the input is empty, return nothing immediately (without the debouncing delay!)
      if (text.length === 0) {
        return [];
      }
      // Else we use the debounced api
      else {
        return debouncedSearchGithubUser(text, abortSignal);
      }
    },
    // Ensure a new request is made everytime the text changes (even if it's debounced)
    [inputText]
  );

  // Return everything needed for the hook consumer
  return {
    inputText,
    setInputText,
    search,
  };
};
