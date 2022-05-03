import React from "react";
import { render, screen } from "@testing-library/react";
import ProductCardEven from "../components/products/ProductCardEven";

// describe("images should have alt", () => {
//   test("has heading", () => {
//     render(<ProductCardEven />);
//     const heading = screen.getByRole("heading", {
//       role: /p/i,
//     });
//     expect(getTestId(document.documentElement, )).toBeInTheDocument();
//   });
// });

it("renders without crashing", () => {
  const div = document.createElement("div");
  render(<ProductCardEven />, div);
});

// it("renders button correctly", ()=>{
//     const {getByTestId} = render(<ProductCardEven />)
//     expect(getByTestId('evenCard')).toHaveTextContent('')
// })

// it("matches snapshot", () => {
//   const tree = renderer.create(<ProductCardEven />).toJSON();
//   expect(tree).toMatchSnapshot();
// });
