import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Project from "./Components/Project";
import Skill from "./Components/Skill";
import SocialLinks from "./Components/SocialLinks";
function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Project />
      <Skill />
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default App;