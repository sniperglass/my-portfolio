import Home from "./components/Home";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import SocialLinks from './components/SocialLinks';

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <SocialLinks/>
      <About />
      <Portfolio />
      <Experience />
      <Contact />
    </>
  );
}

export default App;
