import React from "react";
import { ThemeProvider } from "styled-components";
// import mq from "./MediaQueries";

const theme = {
  containerWidth: "1440px",
  colors: {
    standardTextColor: "#111111",
    standardBgColor: "#ffffff",
    powderWhite: "#FFFDF9",
    persianGreen: "#06B49A",
    lightBlue: "#AFDBD2",
    onyx: "orange",
  },
  fontFamilies: {
    primary: "Aboreto, cursive",
  },
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em",
  },
  device: {
    xxs: "(min-width: 340px)",
    xs: "(min-width: 400px)",
    sm: "(min-width: 480px)",
    md: "(min-width: 769px)",
    lg: "(min-width: 993px)",
    xl: "(min-width: 1201px)",
    xxl: "(min-width: 1401px)",
    xxxl: "(min-width: 1801px)",
    // MAX
    mxxs: "(max-width: 339px)",
    mxs: "(max-width: 399px)",
    msm: "(max-width: 479px)",
    mmd: "(max-width: 768px)",
    mlg: "(max-width: 992px)",
    mxl: "(max-width: 1200px)",
    mxxl: "(max-width: 1400px)",
    mxxxl: "(max-width: 1800px)",
  },
};

type mqType = { [key: string]: string };
let mq: mqType = {
  // MIN
  xxs: "(min-width: 340px)",
  xs: "(min-width: 400px)",
  sm: "(min-width: 480px)",
  md: "(min-width: 769px)",
  lg: "(min-width: 993px)",
  xl: "(min-width: 1201px)",
  xxl: "(min-width: 1401px)",
  xxxl: "(min-width: 1801px)",
  // MAX
  mxxs: "(max-width: 339px)",
  mxs: "(max-width: 399px)",
  msm: "(max-width: 479px)",
  mmd: "(max-width: 768px)",
  mlg: "(max-width: 992px)",
  mxl: "(max-width: 1200px)",
  mxxl: "(max-width: 1400px)",
  mxxxl: "(max-width: 1800px)",
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
