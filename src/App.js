import React from "react";
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { ReactComponent as TailWindLogo } from "./assets/tailwind.svg";

import EmotionLogo from "./assets/emotion.png";
function App() {
  // Nav Bar component
  return (
    <div
      css={css`
        height: 100vh;
      `}
      className="flex justify-center items-center bg-gray-300 text-6xl text-center"
    >
      <div>
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
          <TailWindLogo className="text-center" />
        </a>
        and
        <div
          className="bold text-pink-400 pt-16"
          css={css`
            font-size: 108px;
          `}
        >
          <a
            href="https://emotion.sh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="inline-block h-32 pr-32"
              src={EmotionLogo}
              alt="emotion-logo"
            />
            <span className="mr-64">Emotion</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
