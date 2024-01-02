import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Intro from "./components/introduction/Intro";
import Parallax from "./components/Parallax/parallax";
import Services from "./components/services/Services";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
const App = () => {
  return (
    <div>
      {/* <Cursor /> */}
      <section id="Homepage">
        <Navbar />
        <Intro />
      </section>
      <section id="Project">
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="What I know">
        <Parallax type="portfolio" />
      </section>
      {/* <section id="Skills">
        <Skills />
      </section> */}
      {/* <section><Parallax/></section> */}
      {/* <section id="Contact">
        <Contact />
      </section> */}
    </div>
  );
};

export default App;
