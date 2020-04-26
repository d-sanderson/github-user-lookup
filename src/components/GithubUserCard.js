import React from "react";
import CountUp from "react-countup";
import placeholderImg from "../assets/octokitteh.jpeg";
import Moment from "react-moment";
const GithubUserCard = ({ result }) => {
  const user_since = result?.created_at ? (
    <Moment format="MM/DD/YYYY" date={result?.created_at} />
  ) : (
    ""
  );
  const last_updated = result?.updated_at ? (
    <Moment format="MM/DD/YYYY" date={result?.updated_at} />
  ) : (
    ""
  );
  return (
    <div className="md:flex justify-center items-center">
      <div className="md:flex-shrink-0">
        <img
          src={result?.avatar_url || placeholderImg}
          className="rounded-lg md:w-56"
          alt="Github Profile Pic"
        />
      </div>
      <div className="mt-4 md:mt-0 md:ml-6">
        <div className="block mt-1 text-lg leading-tight font-bold text-gray-900">
          {result?.name}
        </div>
        <div className="lowercase tracking-wide text-sm text-indigo-600 font-bold">
          <a href={result?.html_url} target="_blank" rel="noopener noreferrer">
            {result?.login}
          </a>
        </div>
        <div className="lowercase tracking-wide text-sm text-indigo-600 font-bold">
          {result?.location}
        </div>
        <div className=" w-5/6 block mt-1 text-lg leading-tight font-semibold text-gray-900">
          {result?.bio}
        </div>
        <p className="lowercase mt-2 text-gray-600">
          User Since: {user_since}{" "}
        </p>
        <p className="lowercase mt-2 text-gray-600">
          Last Active: {last_updated}
        </p>
        <div className="flex">
          <span className="m-2 bg-indigo-500 text-white text-xs px-2 py-1 rounded-full uppercase font-semibold tracking-wide inline-block ">
            <a href="#">
              {" "}
              <CountUp end={result?.public_repos || 0} /> public repos
            </a>
          </span>
          <span className="m-2 bg-indigo-500 text-white text-xs px-2 py-1 rounded-full uppercase font-semibold tracking-wide inline-block ">
            <a href="#">
              {" "}
              <CountUp end={result?.followers || 0} /> followers
            </a>
            <a href="#"> stars</a>
          </span>
          <span className="m-2 bg-indigo-500 text-white text-xs px-2 py-1 rounded-full uppercase font-semibold tracking-wide inline-block ">
            <a href="#">
              {" "}
              <CountUp end={result?.following || 0} /> following
            </a>
          </span>
          <span className="m-2 bg-indigo-500 text-white text-xs px-2 py-1 rounded-full uppercase font-semibold tracking-wide inline-block ">
            <a href="#"> stars</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default GithubUserCard;
