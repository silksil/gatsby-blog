import React from "react";
import PropTypes from "prop-types";
import createSvgIcon from "../createSvgIcon";
import { propTypes, defaultProps } from "../props";
import { useContrastColor } from "../../themes";

const Facebook = ({ color }) => {
  const themeColor = useContrastColor(color);
  const iconColor = color === "blue" ? "#3B5998" : themeColor;

  const Icon = createSvgIcon({
    title: "facebook",
    width: "32px",
    height: "32px",
    viewBox: "0 0 24 24",
    content: (
      <path
        d="M13.76,7.19V5.26a1,1,0,0,1,1-1.14h2.64V0H13.8c-4.05,0-5,3.05-5,5V7.19H6.5V12H8.87V24h4.71V12h3.49l.15-1.88.28-2.92Z"
        fill={iconColor}
        clipRule="evenodd"
      />
    )
  });

  return <Icon />;
};

Facebook.propTypes = {
  ...propTypes,
  color: PropTypes.oneOf(["black", "white", "blue"])
};
Facebook.defaultProps = { ...defaultProps };

export default Facebook;
