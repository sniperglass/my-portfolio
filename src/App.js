import Home from "./components/Home";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import SocialLinks from './components/SocialLinks';
import UIUX from './components/UIUX';
import Casestudy from "./components/Casestudy";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
    
      <NavBar />
      <Home />
      <SocialLinks/>
      <About />
      <Portfolio />
      <Experience />
      <UIUX />
      <Contact />
      <Routes>
        <Route path='/casestudy' element= { <Casestudy />} />       
      </Routes>
    
    </Router>
  );
}

export default App;
