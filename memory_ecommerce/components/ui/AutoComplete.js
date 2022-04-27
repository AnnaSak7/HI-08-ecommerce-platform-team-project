import React from "react";

const products = ["aba", "aca", "ada", "aga", "ala"];

function AutoComplete() {
  return (
    <ul>
      {products.map((product) => (
        <li key={product}>{product}</li>
      ))}
    </ul>
    // <div>{products}</div>
  );
}

export default AutoComplete;
