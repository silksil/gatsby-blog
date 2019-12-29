import React from "react";
import PropTypes from "prop-types";
import { render, mount } from "enzyme/build";
import withHtmlSafe from "./withHtmlSafe";

const MockComponent = ({ children, ...props }) => (
  <div {...props}>{children}</div>
);

MockComponent.propTypes = {
  children: PropTypes.node
};

MockComponent.defaultProps = {
  children: null
};

const HtmlSafeComponent = withHtmlSafe(MockComponent);

describe("withHtmlSafe", () => {
  it("should be defined", () => {
    expect(withHtmlSafe).toBeDefined();
  });

  it("should have an enhanced component defined", () => {
    expect(HtmlSafeComponent).toBeDefined();
  });

  it("should render escaped HTML", () => {
    const content = "<p>Some content</p>";

    expect(
      render(<HtmlSafeComponent>{content}</HtmlSafeComponent>).html()
    ).toMatch("&lt;p&gt;Some content&lt;/p&gt;");
  });

  it("should render HTML", () => {
    const content = "<p>Some content</p>";

    expect(
      render(<HtmlSafeComponent html>{content}</HtmlSafeComponent>).html()
    ).toMatch("<p>Some content</p>");
  });

  it("should render only allowed tags", () => {
    const content = `<p>Some <strong>content</strong> and <i>other</i> <em>content</em></p>`;

    expect(
      render(
        <HtmlSafeComponent html allowedTags={["strong", "em"]}>
          {content}
        </HtmlSafeComponent>
      ).html()
    ).toMatch("Some <strong>content</strong> and other <em>content</em>");
  });

  it("should render strip out <script> tags", () => {
    const content = `<p>Some content</p><script>alert('hello')</script>`;

    expect(
      mount(<HtmlSafeComponent html>{content}</HtmlSafeComponent>).html()
    ).toMatch("<p>Some content</p>");
  });
});
