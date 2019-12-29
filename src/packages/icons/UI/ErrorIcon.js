import React, { Fragment, useContext } from "react";
import { ThemeContext } from "styled-components";
import createSvgIcon from "../createSvgIcon";

const Error = () => {
  const theme = useContext(ThemeContext);

  const Icon = createSvgIcon({
    title: "Error",
    width: "20px",
    height: "20px",
    viewBox: "0 0 32 32",
    content: (
      <Fragment>
        <title>icon_warning_red</title>
        <polygon points="16 0 32 28 0 28 16 0" fill={theme.error.main} />
        <path
          d="M17.35,15.33l-.29,3.33H14.92l-.29-3.33V11.58h2.72Zm-.11,5.07v.65c0,.73-.22.95-.93.95h-.63c-.7,0-.93-.22-.93-.95V20.4c0-.73.23-.95.93-.95h.63C17,19.45,17.24,19.67,17.24,20.4Z"
          fill={theme.error.contrast}
        />
      </Fragment>
    )
  });
  return <Icon />;
};

export default Error;
