import React, { useState } from "react";

// const products = ["aba", "aca", "ada", "aga", "ala"];

function AutoComplete({ input }) {
  //   const [suggestions, setSuggestions] = useState([]);

  //   onInputChange = () => {
  //     const inputRegexp = new RegExp(input, "g");
  //     console.log(inputRegexp);
  //   };

  return (
    <ul>
      <li key={Math.random()}>{input}</li>
    </ul>
    // <div>{products}</div>
  );
}

export default AutoComplete;
