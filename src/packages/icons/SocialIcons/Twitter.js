import React from "react";
import PropTypes from "prop-types";
import createSvgIcon from "../createSvgIcon";
import { propTypes, defaultProps } from "../props";
import { useContrastColor } from "../../themes";

const Twitter = ({ color }) => {
  const themeColor = useContrastColor(color);
  const iconColor = color === "blue" ? "#1DA1F2" : themeColor;

  const Icon = createSvgIcon({
    title: "twitter",
    width: "32px",
    height: "32px",
    viewBox: "0 0 24 24",
    content: (
      <path
        d="M24,4.76a10.75,10.75,0,0,1-2.82.76,4.84,4.84,0,0,0,2.17-2.66A10.22,10.22,0,0,1,20.21,4,5,5,0,0,0,11.69,7.3a4.86,4.86,0,0,0,.14,1.09,14,14,0,0,1-10.15-5A4.78,4.78,0,0,0,1,5.79a4.79,4.79,0,0,0,2.19,4A4.81,4.81,0,0,1,1,9.19v.06A4.52,4.52,0,0,0,1.3,11a4.94,4.94,0,0,0,3.62,3,5.16,5.16,0,0,1-1.3.18A4.15,4.15,0,0,1,2.69,14a5,5,0,0,0,4.6,3.35,10,10,0,0,1-6.11,2.05A11.67,11.67,0,0,1,0,19.34a14.37,14.37,0,0,0,7.55,2.15A13.66,13.66,0,0,0,21.23,10.76a13.21,13.21,0,0,0,.32-2.9V7.24A10.12,10.12,0,0,0,24,4.76"
        fill={iconColor}
      />
    )
  });

  return <Icon />;
};

Twitter.propTypes = {
  ...propTypes,
  color: PropTypes.oneOf(["black", "white", "blue"])
};
Twitter.defaultProps = { ...defaultProps };

export default Twitter;
