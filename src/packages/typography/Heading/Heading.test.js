import React from "react";
import { render } from "test-utils";
import Heading from ".";

it("should render with children", () => {
  const { getByText } = render(<Heading>test</Heading>);
  expect(getByText("test")).toBeInTheDocument();
});

it("should render as a specific element", () => {
  const { container } = render(<Heading element="h2" />);
  expect(container.querySelector("h2")).toBeInTheDocument();
});

it("should render with a specific style", () => {
  const { getByText } = render(<Heading variant="three">three</Heading>);
  expect(getByText("three")).toHaveStyleRule("font-weight", "700");
});

it("should render with a specific color", () => {
  const { container } = render(<Heading color="black" />);
  expect(container.querySelector("h1[color='black']")).toBeInTheDocument();
});
