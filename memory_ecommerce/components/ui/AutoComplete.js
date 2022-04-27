import React, { useState } from "react";
import classes from "./AutoComplete.module.css";
import { useRouter } from "next/router";

function AutoComplete(props) {
  const router = useRouter();

  const handleSuggestionClick = (suggestion) => {
    console.log(suggestion);
    router.push(`/${suggestion}`);
  };

  return (
    <div className={classes.suggestionsWrapper}>
      <ul className={classes.ul}>
        {props.input.map((suggestion) => (
          <li
            className={classes.listItem}
            key={suggestion}
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
