import React from 'react'
import { Outlet } from 'react-router-dom'

import Home from "./Home";
import NavBar from "./NavBar";
import About from "./About";
import Portfolio from "./Portfolio";
import Experience from "./Experience";
import Contact from "./Contact";
import SocialLinks from './SocialLinks';
import UIUX from './UIUX';
import Casestudy from './Casestudy';


const Layout = () => {
  return (
    <>
       <NavBar/>
        <Home/>
        <About/>
        <Portfolio />
        <Experience />
        <SocialLinks/>
        <UIUX />
        <Casestudy/>
        <Contact/>   
        <Outlet/>
    </>
  )
  
}

export default Layout