import { useRef } from "react";
import "./skills.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};
const Skills = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-200px" });
  return (
    <motion.div
      className="skills"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={isInView && "animate"}
    >
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "#1f1f4b", color: "black" }}
        >
          <motion.h2>Frontend</motion.h2>
          <div className="skills-box">
            <div>HTML</div>
            <div>CSS</div>
            <div style={{ border: "0.5px solid blue" }}>Tailwind</div>
            <div style={{ border: "0.5px solid orange" }}>Javascript</div>
            <div>Typescript</div>
            <div style={{ border: "0.5px solid red" }}>Redux</div>
            <div style={{ border: "0.5px solid blue" }}>React Js</div>
            <div>Material UI</div>
          </div>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "#1f1f4b", color: "black" }}
        >
          <h2>Backend</h2>
          <div className="skills-box">
            <div style={{ border: "0.5px solid lightGreen" }}>Node Js</div>
            <div>Express Js</div>
            <div>Java</div>
            <div>Springboot</div>
          </div>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "#1f1f4b", color: "black" }}
        >
          <h2>Database</h2>
          <div className="skills-box">
            <div style={{ border: "0.5px solid blue" }}>MySql</div>
            <div style={{ border: "0.5px solid lightGreen" }}>MongoDB</div>
          </div>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "#1f1f4b", color: "black" }}
        >
          <h2>Devops</h2>
          <div className="skills-box">
            <div style={{ border: "0.5px solid orange" }}>GIT</div>
          </div>
        </motion.div>
      </motion.div>
      <motion.h2>More Projects</motion.h2>

      <motion.div className="listContainer" variants={variants}>
        <a href="https://github.com/imamarham10/codepen-clone">
          <motion.div
            className="pro-box"
            whileHover={{ backgroundColor: "#1f1f4b", color: "black" }}
          >
            <h2>Codepen Clone</h2>
            <div className="skills-box">
              <div style={{ border: "0.5px solid blue" }}>React</div>
              <div style={{ border: "0.5px solid orange" }}>Javascript</div>
              <div style={{ border: "0.5px solid rebeccaPurple" }}>CSS</div>
            </div>
          </motion.div>
        </a>
        <a href="https://github.com/imamarham10/Kharcha-Book">
          <motion.div
            className="pro-box"
            whileHover={{ backgroundColor: "#1f1f4b", color: "black" }}
          >
            <h2>Kharcha Book</h2>
            <div className="skills-box">
              <div style={{ border: "0.5px solid blue" }}>React Js</div>
              <div style={{ border: "0.5px solid blue" }}>Redux</div>
              <div style={{ border: "0.5px solid orange" }}>GIT</div>
            </div>
          </motion.div>
        </a>
        <a href="https://github.com/imamarham10/developersgram">
          <motion.div
            className="pro-box"
            whileHover={{ backgroundColor: "#1f1f4b", color: "black" }}
          >
            <h2>Developersgram</h2>
            <div className="skills-box">
              <div style={{ border: "0.5px solid blue" }}>React Js</div>
              <div style={{ border: "0.5px solid lightGreen" }}>Node Js</div>
              <div>Express Js</div>
            </div>
          </motion.div>
        </a>
        <a href="https://github.com/imamarham10/movie-api">
          <motion.div
            className="pro-box"
            whileHover={{ backgroundColor: "#1f1f4b", color: "black" }}
          >
            <h2>Movie Api</h2>
            <div className="skills-box">
              <div>Java</div>
              <div>Springboot</div>
              <div style={{ border: "0.5px solid orange" }}>GIT</div>
            </div>
          </motion.div>
        </a>
      </motion.div>
    </motion.div>
  );
};

export default Skills;
