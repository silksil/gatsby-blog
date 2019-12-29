import React from "react";
import PropTypes from "prop-types";
import striptags from "striptags";

// This component is responsible for reducing the chance of cross-site scripting
const withHtmlSafe = WrappedComponent => {
  const HtmlSafeComponent = ({
    children,
    html,
    allowedTags,
    ...remainingProps
  }) => {
    if (html) {
      return (
        <WrappedComponent
          dangerouslySetInnerHTML={{
            __html: striptags(children, allowedTags)
          }}
          {...remainingProps}
        />
      );
    }

    return <WrappedComponent {...remainingProps}>{children}</WrappedComponent>;
  };

  HtmlSafeComponent.propTypes = {
    children: PropTypes.node.isRequired,
    html: PropTypes.bool,
    allowedTags: PropTypes.arrayOf(PropTypes.string)
  };

  HtmlSafeComponent.defaultProps = {
    html: false,
    allowedTags: [
      "br",
      "p",
      "strong",
      "a",
      "b",
      "em",
      "i",
      "s",
      "blockquote",
      "ul",
      "ol",
      "li",
      "q",
      "cite",
      "del",
      "ins",
      "code",
      "abbr",
      "sub",
      "sup"
    ]
  };

  HtmlSafeComponent.displayName = `HtmlSafe(${WrappedComponent.displayName ||
    WrappedComponent.name ||
    "Component"})`;

  return HtmlSafeComponent;
};

export default withHtmlSafe;
