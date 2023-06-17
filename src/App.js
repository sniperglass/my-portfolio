import React from "react";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import SocialLinks from './components/SocialLinks';
import UIUX from './components/UIUX';
import Casestudy from "./components/Casestudy";
import Layout from './components/Layout';

import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
  
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/navbar' element={<NavBar/>}/>
            <Route path='/' element={<Home/>}/>         
            <Route path='/about' element={<About />}/>
            <Route path='/portfolio' element={<Portfolio />}/>
            <Route path='/experience' element={<Experience />}/>
            <Route path='/sociallinks' element={<SocialLinks/>}/>   
            <Route path='/uiux' element={<UIUX />}/>  
            <Route path='/casestudy' element= {<Casestudy/>}/>   
            <Route path='/contact' element={<Contact/>}/>               
          </Route>
        </Routes>
      </BrowserRouter>
  )
}
    
export default App;
   
  
  

 