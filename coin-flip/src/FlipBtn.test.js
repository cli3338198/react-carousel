import React from "react";
import { render, fireEvent } from "@testing-library/react";
import FlipBtn from "./FlipBtn";
import App from "./App";

test("renders without crashing", function () {
  render(<FlipBtn />);
});

test("components exists in app", function () {
  const { container } = render(<FlipBtn />);

  // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
  expect(container.querySelector(".FlipBtn")).toBeInTheDocument();
});

test("button works", function () {
    const { container } = render(
        <App />
    );

   // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
  const flipBtn = container.querySelector(".FlipBtn-btn");
  fireEvent.click(flipBtn);
 
  // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
  expect(container.querySelector(".Coin")).toBeInTheDocument();
});