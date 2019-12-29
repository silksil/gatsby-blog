import React from "react";
import createSvgIcon from "../createSvgIcon";
import { propTypes, defaultProps } from "../props";
import { useContrastColor } from "../../themes";

const Youtube = ({ color }) => {
  const iconColor = useContrastColor(color);
  const Icon = createSvgIcon({
    title: "Youtube",
    width: "32px",
    height: "32px",
    viewBox: "0 0 24 24",
    content: (
      <path
        d="M9.61,15.63V8.37L15.85,12Zm13.9-9.45a3,3,0,0,0-2.12-2.13C19.51,3.53,12,3.53,12,3.53s-7.51,0-9.39.5A3.08,3.08,0,0,0,.49,6.18,32.45,32.45,0,0,0,0,12a32.33,32.33,0,0,0,.49,5.82A3,3,0,0,0,2.61,20c1.9.52,9.39.52,9.39.52s7.51,0,9.39-.5a3,3,0,0,0,2.12-2.13A32.45,32.45,0,0,0,24,12,30.78,30.78,0,0,0,23.51,6.18Z"
        fillRule="evenodd"
        fill={iconColor}
      />
    )
  });

  return <Icon />;
};

Youtube.propTypes = { ...propTypes };
Youtube.defaultProps = { ...defaultProps };

export default Youtube;
