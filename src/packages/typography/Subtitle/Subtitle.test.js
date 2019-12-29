import React from "react";
import { render } from "test-utils";
import Subtitle from ".";

it("should render with children", () => {
  const { getByText } = render(<Subtitle>test</Subtitle>);
  expect(getByText("test")).toBeInTheDocument();
});

it("should render as a span-element", () => {
  const { container } = render(<Subtitle />);
  expect(container.querySelector("span")).toBeInTheDocument();
});

it("should render with a specific style", () => {
  const { getByText } = render(<Subtitle>test</Subtitle>);
  expect(getByText("test")).toHaveStyleRule("font-weight", "500");
});
