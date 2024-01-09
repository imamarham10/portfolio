import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./services.scss";

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
const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, {margin: "-200px"})
  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      //whileInView="animate"
      ref={ref}
      animate= {isInView && "animate"}
    >
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "#1f1f4b", color: "white" }}
        >
          <a href="https://kick-pik.vercel.app/">
            <img src="/kickpik.png" alt="Kickpik" />
          </a>
          <h2>Kickpik</h2>
          <p>
            Developed an e-commerce platform facilitating direct trading between
            sneaker enthusiasts without intermediaries. Implemented a
            user-friendly interface using React.js, Redux and Typescript for
            frontend and Node.js and Express.js for backend allowing buyers to
            browse sneakers, view product details and multiple images, write
            reviews, add items to the cart, and place orders with PayPal
            integration. Incorporated a separate admin route enabling
            comprehensive product and order management. Employed JWT token
            authentication and leveraged MongoDB for data storage while
            utilizing cloud-based image storage of products with Cloudinary for
            optimized rendering.
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "#1f1f4b", color: "white" }}
        >
          <a href="https://github.com/imamarham10/nazariya">
            <img src="/Nazariya.jpg" alt="Nazariya" />
          </a>
          <h2>Nazariya</h2>
          <p>
            This is a full-stack blog application, designed to provide users
            with a secure platform for creating, viewing, editing, and deleting
            blogs. It utilizes React.js, Redux, and Typescript for the frontend,
            and Node.js and Express.js for the backend and MongoDB for data
            storage. With core user authentication via JWT (JSON Web Tokens),
            Nazariya ensures data privacy. Users can also like and comment on
            blogs, and there’s built-in pagination for smooth navigation.
          </p>
        </motion.div>

        <motion.div
          className="box"
          whileHover={{ backgroundColor: "#1f1f4b", color: "white" }}
        >
          <a href="https://web-utility-tools.netlify.app/index.html">
            <img src="/webUtility.jpeg" alt="web-utility application" />
          </a>
          <h2>Web-Utility Application</h2>
          <p>
            An online utility app that encrypts and decrypts URLs and computes a
            hash value for different strings. It has a number of converters as
            well, such as a unit converter, a color converter, a number base
            converter, and a timestamp converter. In addition, it includes a
            countdown timer, a stopwatch, an IP address detector, and a language
            translator.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
