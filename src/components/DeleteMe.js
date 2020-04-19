import React from "react";
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { ReactComponent as TailWindLogo } from "../assets/tailwind.svg";
import EmotionLogo from "../assets/emotion.png";
const DeleteMe = () => {
  return (
    <div
      css={css`
        height: 100vh;
      `}
      className="flex flex-col pt-16 items-center bg-gray-300 lg:text-3xl lg:text-6xl text-center"
    >
      <div className="py-10">
        <a
          href="https://create-react-app.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Create React App configured with:
        </a>
      </div>
      <a
        href="https://tailwindcss.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <TailWindLogo
          css={css`
            @media (min-width: 768px) {
              width: 800px;
            }
            width: 250px;
          `}
        />
      </a>
      and
      <div
        className="bold text-pink-400 pt-10"
        css={css`
          font-size: 108px;
        `}
      >
        <div className="mr-40">
          <a
            href="https://emotion.sh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="inline-block h-32 mx-10"
              src={EmotionLogo}
              alt="emotion-logo"
            />
            <span>Emotion</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DeleteMe;
