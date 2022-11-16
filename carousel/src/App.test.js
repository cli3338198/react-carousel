import { render, fireEvent } from "@testing-library/react";
import App from "./App";

it("works", function () {
  render(<App />);
});

it("should match snapshot", function () {
  const { container } = render(<App />);
  expect(container).toMatchSnapshot();
});
