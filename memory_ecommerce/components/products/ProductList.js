import React from "react";
import ProductCardEven from "./ProductCardEven";
import ProductCardOdd from "./ProductCardOdd";

const colors = ["#5FA0A4", "#F6F3F0", "#46423F", "#B3A497", "#B5E0DF"];

const ProductList = (props) => {
  return (
    <>
      {props.memories.map((memory, index, color) =>
        index % 2 === 1 ? (
          <ProductCardEven
            key={memory.id}
            name={memory.name}
            image={memory.image}
            description={memory.description}
            color={colors[index]}
          />
        ) : (
          <ProductCardOdd
            key={memory.id}
            name={memory.name}
            image={memory.image}
            description={memory.description}
            color={colors[index]}
          />
        )
      )}
    </>
  );
};

export default ProductList;
