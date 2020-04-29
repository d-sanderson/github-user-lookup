import React, { useState } from "react";
import CountUp from "react-countup";
import { useSearchGithubUserStarred } from "../hooks/debounce";
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import placeholderImg from "../assets/octokitteh.jpeg";
import Moment from "react-moment";
import Star from "./Star";

const PlaceHolder = () => (
  <div className="m-2 lg:w-full w-3/4 bg-indigo-500 text-white text-xs px-2 py-1 rounded-full uppercase font-semibold tracking-wide inline-block"></div>
);
const GithubUserCard = ({ result }) => {
  const user_since = result?.created_at ? (
    <Moment format="MM/DD/YYYY" date={result?.created_at} />
  ) : (
    <PlaceHolder />
  );
  const last_updated = result?.updated_at ? (
    <Moment format="MM/DD/YYYY" date={result?.updated_at} />
  ) : (
    <PlaceHolder />
  );
  return (
    <div className="container md:flex justify-center items-center">
      <div className="md:flex-shrink-0">
        <img
          src={result?.avatar_url || placeholderImg}
          className="rounded-lg w-56 mx-auto"
          alt="Github Profile Pic"
        />
      </div>
      <div className="mt-4 md:mt-0 md:ml-6 w-full">
        <div className="block mt-1 text-lg leading-tight font-bold text-gray-900 text-2xl">
          {result?.name}
        </div>
        <div className="lowercase tracking-wide text-sm text-indigo-600 font-bold text-xl">
          <a href={result?.html_url} target="_blank" rel="noopener noreferrer">
            {result?.login}
          </a>
        </div>
        <div className="lowercase tracking-wide text-sm text-indigo-600 font-bold">
          <a href={result?.blog} target="_blank" rel="noopener noreferrer">
            {result?.blog}
          </a>
        </div>
        <div className="lowercase tracking-wide text-sm text-indigo-600 font-bold">
          {result?.location}
        </div>
        <div className="w-5/6 block mt-1 text-lg leading-tight font-semibold text-gray-900">
          {result?.bio}
        </div>
        <div className="lowercase mt-2 text-gray-600 mx-auto">
          User Since: {user_since}{" "}
        </div>
        <div className="lowercase mt-2 text-gray-600">
          Last Active: {last_updated}
        </div>
        <div className="flex flex-col lg:flex-row">
          <span className="badge" css={css``}>
            <a
              href={`${result?.html_url}?tab=repositories`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <CountUp end={result?.public_repos || 0} /> public repos
            </a>
          </span>
          <span className="badge">
            <a
              href={`${result?.html_url}?tab=followers`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <CountUp end={result?.followers || 0} /> followers
            </a>
          </span>
          <span className="badge">
            <a
              href={`${result?.html_url}?tab=following`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <CountUp end={result?.following || 0} /> following
            </a>
          </span>
          <span className="badge">
            <a
              href={`${result?.html_url}?tab=starred`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <CountUp end={0} /> stars
            </a>
          </span>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default GithubUserCard;
