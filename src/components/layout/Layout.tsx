import React from "react"
import GlobalCSS from '../../assets/styles/global-styles/global.css.js'
import Footer from "./footer/Footer"
import Header from './header/header'
import Theme from "./Theme"
export default function Layout({ children }) {
  return (
    
        <>
     <Theme>

        <GlobalCSS />
        <Header/>
           {children}
        <Footer/>
    
     </Theme>
        </>
   
  )
}