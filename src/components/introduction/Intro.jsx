import "./intro.scss";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const textVariant = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const slidingVariant = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-400%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 10,
    },
  },
};
const Intro = () => {
  return (
    <div className="intro">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariant}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariant}>MOHAMMAD ARHAM IMAM</motion.h2>
          <motion.h1 variants={textVariant}>Full Stack Web Developer</motion.h1>
          <motion.div className="buttons" variants={textVariant}>
          <motion.button variants={textVariant}>
              <a href="#skills">See my work</a>
            </motion.button>
            <motion.button variants={textVariant}>
              <a href="#contact">Contact</a>
            </motion.button>
          </motion.div>
          <motion.img
            src="/scroll.png"
            alt="scroll down"
            variants={textVariant}
            animate="scrollButton"
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={slidingVariant}
        initial="initial"
        animate="animate"
      >
        Full Stack Web Developer (MERN)
      </motion.div>
      <div className="imageContainer">
        <img src="/Removal-378.png" alt="Arham Imam" />
      </div>
    </div>
  );
};

export default Intro;
