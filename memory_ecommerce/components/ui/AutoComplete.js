import React, { useState } from "react";
import classes from "./AutoComplete.module.css";
import { useRouter } from "next/router";

function AutoComplete({ input }) {
  const router = useRouter();

  const handleSuggestionClick = (suggestion) => {
    console.log(suggestion);
    router.push(`/${suggestion}`);
  };

  return (
    <div className={classes.suggestions}>
      <ul>
        {input.map((suggestion) => (
          <li
            key={Math.random()}
            onClick={() => handleSuggestionClick(suggestion)}
          >
            {suggestion}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AutoComplete;
