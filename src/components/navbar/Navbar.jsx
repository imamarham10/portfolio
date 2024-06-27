import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";
const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar/>
      <div className="wrapper">
        <motion.span
        initial={{opacity:0,scale:0.5}}
        animate={{opacity:1,scale:1}}
        transition={{duration:0.5}}
        whileInView={{scale:1.25}}
        >FULL STACK DEV</motion.span>
        <div className="social">
          <a href="https://github.com/imamarham10">
            <img src="/github.webp" />
          </a>
          <a href="https://www.instagram.com/imamarham10/">
            <img src="/instagram.png" />
          </a>
          <a href="https://www.linkedin.com/in/arham-imam-100800/">
            <img src="/LinkedIn.webp" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
