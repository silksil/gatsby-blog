import React from "react";
import PropTypes from "prop-types";
import createSvgIcon from "../createSvgIcon";
import { propTypes, defaultProps } from "../props";
import { useContrastColor } from "../../themes";

const Whatsapp = ({ color }) => {
  const themeColor = useContrastColor(color);
  const iconColor = color === "green" ? "#25D465" : themeColor;

  const Icon = createSvgIcon({
    title: "Whatsapp",
    width: "32px",
    height: "32px",
    viewBox: "0 0 24 24",
    content: (
      <path
        d="M24,11.39A11.77,11.77,0,0,0,.47,11.17a2.85,2.85,0,0,0,0,.51,11.75,11.75,0,0,0,1.69,6L0,24l6.53-2.07a11.86,11.86,0,0,0,5.68,1.44A11.72,11.72,0,0,0,24,11.68c0-.1,0-.18,0-.29m-6.38,2.66c-.3-.14-1.7-.85-2-1s-.47-.14-.66.16-.75.92-.91,1.1-.34.22-.62.09A7.21,7.21,0,0,1,11.14,13a8.6,8.6,0,0,1-1.62-2,.46.46,0,0,1,.12-.61,3.73,3.73,0,0,0,.44-.5.69.69,0,0,0,.11-.13c.07-.12.11-.21.18-.34a.45.45,0,0,0,0-.49c-.05-.15-.64-1.58-.88-2.14S9,6.37,8.82,6.37l-.56,0a1,1,0,0,0-.77.36,3.23,3.23,0,0,0-.86,3.36,6.48,6.48,0,0,0,1,2,11.75,11.75,0,0,0,4.93,4.32c2.95,1.14,2.95.75,3.47.71A2.84,2.84,0,0,0,18,15.73a2.3,2.3,0,0,0,.16-1.37,1.72,1.72,0,0,0-.55-.31m-5.4,7.47a9.83,9.83,0,0,1-5.43-1.63L3,21.1,4.2,17.44a9.73,9.73,0,0,1-1.88-5.76,7.66,7.66,0,0,1,.05-.95,9.91,9.91,0,0,1,19.72.18c0,.26,0,.52,0,.77a9.88,9.88,0,0,1-9.9,9.84"
        fill={iconColor}
        clipRule="evenodd"
      />
    )
  });

  return <Icon />;
};

Whatsapp.propTypes = {
  ...propTypes,
  color: PropTypes.oneOf(["black", "white", "green"])
};
Whatsapp.defaultProps = { ...defaultProps };

export default Whatsapp;
