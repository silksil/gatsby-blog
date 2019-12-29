import React from "react";

const createSvgIcon = ({
  width = 24,
  height = 24,
  title,
  content,
  viewBox = "0 0 25 25"
}) => props => (
  <svg
    height={height}
    width={width}
    xmlns="http://www.w3.org/2000/svg"
    viewBox={viewBox}
    aria-label={title}
    {...props}
  >
    {content}
  </svg>
);

export default createSvgIcon;
