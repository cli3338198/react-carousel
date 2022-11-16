import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test("renders without crashing", function () {
  render(<App />);
});

test("components exists in app", function () {
  const { container } = render(<App />);

  // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
  expect(container.querySelector(".App")).toBeInTheDocument();
});

test("shows counter and buttons", function () {
  const { container } = render(<App />);

  // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
  expect(container.querySelector(".FlipBtn")).toBeInTheDocument();
  // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
  expect(container.querySelector(".Coin")).not.toBeInTheDocument();
});



