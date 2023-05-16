import Contact from "./components/Contact";
import Projects from "./components/Projects";
import About from "./components/About";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Navbar from "./components/Navbar";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
      disable: "mobile",
    });
  }, []);

  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <footer className="text-center py-5 bg-neutral-900 subtitle text-gray-400">
        <h4>Created By ozgevuralkoca | © 2023 All rights reserved</h4>
      </footer>
    </div>
  );
}

export default App;
