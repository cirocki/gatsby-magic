import React from "react";
import { useState } from "react";
import GlobalCSS from "../../assets/styles/global-styles/global.css.js";
import Footer from "./footer/Footer";
import Header from "./header/header";
import Theme from "./Theme";
export default function Layout({ children }) {
  const [darkMode, setDarkMode] = useState(false);

 
  return (
    <>
      <Theme>
        <GlobalCSS darkMode={darkMode} />
        <Header />
        {children}
        <Footer />
      </Theme>
    </>
  );
}
