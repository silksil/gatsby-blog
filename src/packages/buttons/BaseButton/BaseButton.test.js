import React from "react";
import { render } from "test-utils";
import { fireEvent } from "@testing-library/react";
import BaseButton from ".";

describe("<BaseButton />", () => {
  it("should be defined", () => {
    const { container } = render(<BaseButton />);
    expect(container.querySelector("div")).toBeDefined();
  });

  it("should render a default button", () => {
    const { container } = render(<BaseButton />);
    expect(
      container.querySelector("button[type='button']")
    ).toBeInTheDocument();
  });

  it("should render an icon together with text inside the button", () => {
    const { container, getByText } = render(
      <BaseButton>
        Button
        <svg />
      </BaseButton>
    );
    expect(getByText("Button")).toBeInTheDocument();
    expect(container.querySelector("svg")).toBeInTheDocument();
  });

  it("should render correctly the correct HTML tag for a button with type: button", () => {
    const { container } = render(<BaseButton type="button">button</BaseButton>);
    expect(
      container.querySelector("button[type='button']")
    ).toBeInTheDocument();
  });

  it("should render correctly the correct HTML tag for a button with type: submit", () => {
    const { container } = render(<BaseButton type="submit">button</BaseButton>);
    expect(
      container.querySelector("button[type='submit']")
    ).toBeInTheDocument();
  });

  it("should render correctly the correct HTML tag for a button with type: link", () => {
    const { container } = render(<BaseButton type="link">button</BaseButton>);
    expect(container.querySelector("a")).toBeInTheDocument();
  });

  it("should call the onClick handler", () => {
    const handler = jest.fn();
    const { getByText } = render(
      <BaseButton onClick={handler}>Button</BaseButton>
    );
    fireEvent.click(getByText("Button"));
    expect(handler).toHaveBeenCalled();
  });
});
