import "./App.css"
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Education from "./Components/Education/Education";
import Experience from "./Components/Experience/Experience";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import About from "./Components/About/About";
import Route from "./Components/Route";
function App() {
  return (
    <div className="container">
      <Header />
      <Route path="/">
        <Home />
      </Route>
      <Route path="/education">
        <Education />
      </Route>
      <Route path="/experience">
        <Experience />
      </Route>
      <Route path="/skills">
        <Skills />
      </Route>
      <Route path="/projects">
        <Projects />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Footer />
    </div>
  );
}

export default App;
