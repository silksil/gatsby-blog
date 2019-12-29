import React from "react";
import { render } from "test-utils";
import Text from ".";

it("should be defined", () => {
  const { container } = render(<Text />);
  expect(container.querySelector("p")).toBeDefined();
});

it("should render escaped HTML", () => {
  const content = "<p>Some content</p>";
  const { container } = render(<Text>{content}</Text>);
  expect(container.querySelector("div.TextStyle-gTvXuF").innerHTML).toEqual(
    "&lt;p&gt;Some content&lt;/p&gt;"
  );
});

it("should render with props", () => {
  const content = "<p>Some content</p>";
  const { container } = render(<Text bold>{content}</Text>);
  expect(container.querySelector("div.TextStyle-gTvXuF")).toHaveStyleRule(
    "font-weight",
    "bold"
  );
});
