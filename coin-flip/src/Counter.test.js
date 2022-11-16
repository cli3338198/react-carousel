import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Counter from "./Counter";
import App from "./App";

const defaultGameInfo = {
    count : 0,
    start : false,
    heads : 0,
    tails : 0
  }

test("renders without crashing", function () {

  render(<Counter game={defaultGameInfo}/>);
});

test("components exists in app", function () {

  const { container } = render(<Counter game={defaultGameInfo}/>);

  // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
  expect(container.querySelector(".Counter")).toBeInTheDocument();
});



test("button works", function () {
    const { container } = render(
        <App />
    );

   // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
  const flipBtn = container.querySelector(".FlipBtn-btn");
  fireEvent.click(flipBtn);
 
  // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
  expect(container.querySelector(".Counter")).toContainHTML("1 flip");
});