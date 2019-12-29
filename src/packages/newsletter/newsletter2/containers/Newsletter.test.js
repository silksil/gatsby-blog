import React from "react";
import { render } from "test-utils";
import Newsletter from ".";

describe("<Newsletter/>", () => {
  it("should be defined", () => {
    const { container } = render(<Newsletter />);
    expect(container.querySelector("div")).toBeDefined();
  });
});
