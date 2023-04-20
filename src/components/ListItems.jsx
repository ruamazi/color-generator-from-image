import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";

const ListItems = ({ rgb, hex }) => {
  const [copied, setCopied] = useState(false);
  const copy = (e) => {
    const color = e.target.innerText;
    navigator.clipboard.writeText(color);
  };

  return (
    <li className="color-box" style={{ backgroundColor: rgb }}>
      <span
        onClick={(e) => {
          copy(e);
          setCopied(true);
          setTimeout(() => {
            setCopied(false);
          }, 1000);
        }}
      >
        {copied ? "Copied" : hex} &nbsp; {<FontAwesomeIcon icon={faCopy} />}
      </span>
    </li>
  );
};

export default ListItems;
