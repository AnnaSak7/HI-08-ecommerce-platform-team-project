import React, { useState } from "react";
import classes from "./AutoComplete.module.css";
import { useRouter } from "next/router";

const products = {
  "Lavish Trip": "/626670ddf92bdf3fb20675aa",
  "Long Night Out": "/6266758df92bdf3fb20675ac",
  "Top Of The World": "/62666fd2f92bdf3fb20675a9",
  "Butterflies In The Stomach": "626674def92bdf3fb20675ab",
  "Pearl White Beaches": "/62667676f92bdf3fb20675ad",
};

function AutoComplete(props) {
  const router = useRouter();

  const handleSuggestionClick = (suggestion) => {
    const id = products[suggestion];
    router.push(`/${id}`);
  };

  return (
    <div className={classes.suggestionsWrapper}>
      <ul className={classes.ul}>
        {props.input.map((suggestion) => (
          <li
            className={classes.listItem}
            key={suggestion}
            onClick={(evt) => handleSuggestionClick(suggestion)}
          >
            {suggestion}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AutoComplete;
