import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Intro from "./components/introduction/Intro";
import Parallax from "./components/parallax/Parallax";
import Services from "./components/services/Services";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";

const App = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <section id="Homepage">
        <Intro />
      </section>
      <section>
        <Parallax type="services" />
      </section>
      <section id="Projects">
        <Services />
      </section>
      <section>
        <Parallax type="portfolio" />
      </section>
      <section id="Skills">
        <Skills />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
