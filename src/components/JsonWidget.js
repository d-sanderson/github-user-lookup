import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import jsonIcon from "../assets/json2.png";
import {
  faPlusSquare,
  faMinusSquare,
} from "@fortawesome/free-regular-svg-icons";
const JsonWidget = ({ result }) => {
  const [showJson, setShowJson] = useState(false);
  return (
    <div>
      <div className="flex flew-row">
        <img src={jsonIcon} className="w-6" alt="json icon" />
        <span onClick={() => setShowJson(!showJson)}>
          {showJson ? (
            <FontAwesomeIcon className="ml-3" icon={faMinusSquare} />
          ) : (
            <FontAwesomeIcon className="ml-3" icon={faPlusSquare} />
          )}
        </span>
      </div>
      {showJson && <pre>{JSON.stringify(result, undefined, 2)}</pre>}
    </div>
  );
};

export default JsonWidget;
