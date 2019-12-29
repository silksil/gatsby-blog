import React, { Fragment } from "react";
import createSvgIcon from "../createSvgIcon";

const Newsletter = () => {
  const Icon = createSvgIcon({
    title: "Newsletter",
    width: "120",
    height: "120",
    viewBox: "0 0 192 140",
    content: (
      <Fragment>
        <rect
          x="91.83"
          y="30.98"
          width="67.23"
          height="80.03"
          transform="translate(26.61 175.92) rotate(-76.22)"
          fill="#fff"
        />
        <path d="M150.21,116.63,82.37,100A9.88,9.88,0,0,1,75.1,88.07l0-.07L88.94,31.67A8.9,8.9,0,0,1,99.7,25.14h0l69.75,17.11A8.9,8.9,0,0,1,176,53l-13.82,56.36a9.89,9.89,0,0,1-11.94,7.28ZM95.16,33.19,81.33,89.56a3.49,3.49,0,0,0,2.56,4.22h0l67.84,16.64a3.51,3.51,0,0,0,4.22-2.56L169.77,51.5a2.5,2.5,0,0,0-1.83-3L98.19,31.36a2.5,2.5,0,0,0-3,1.82Z" />
        <polygon points="157.65 60.62 125 69.96 98.83 45.11 97.08 52.24 123.25 77.09 155.9 67.75 157.65 60.62" />
        <polygon
          points="114.42 22.16 111.42 3.17 101.93 4.66 104.3 19.67 114.42 22.16"
          fill="#fff"
        />
        <rect
          x="124.8"
          y="9.86"
          width="25.61"
          height="9.6"
          transform="translate(90.59 144.81) rotate(-76.22)"
          fill="#fff"
        />
        <polygon
          points="165.32 34.64 175.67 23.01 168.5 16.63 154.77 32.05 165.32 34.64"
          fill="#fff"
        />
        <rect
          x="9.01"
          y="27.89"
          width="57.12"
          height="47.98"
          transform="translate(-12 11.31) rotate(-14.79)"
          fill="#fff"
        />
        <path d="M68.67,72,20.47,84.74a7.06,7.06,0,0,1-8.63-5l-10.57-40A6.35,6.35,0,0,1,5.78,32h0L55.35,18.82a6.35,6.35,0,0,1,7.76,4.52h0l10.58,40a7.07,7.07,0,0,1-5,8.65Zm-63-33.51,10.58,40a2.49,2.49,0,0,0,3,1.78L67.5,67.6a2.5,2.5,0,0,0,1.77-3L58.7,24.6a1.8,1.8,0,0,0-2.19-1.27L7,36.33a1.79,1.79,0,0,0-1.33,2.16v0Z" />
        <polygon points="54.21 34.37 36.94 51.37 12.05 44.73 13.39 49.79 38.27 56.44 55.55 39.44 54.21 34.37" />
        <polygon
          points="13.98 25.02 5.63 14.14 0.19 18.32 6.8 26.92 13.98 25.02"
          fill="#fff"
        />
        <rect
          x="22.54"
          y="3.27"
          width="6.85"
          height="18.28"
          transform="translate(-2.31 7.04) rotate(-14.79)"
          fill="#fff"
        />
        <polygon
          points="50.15 15.47 52.67 4.65 45.99 3.09 42.65 17.45 50.15 15.47"
          fill="#fff"
        />
      </Fragment>
    )
  });

  return <Icon />;
};

export default Newsletter;