import {motion} from 'framer-motion';
const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
};
const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 1,
  },
};
const Links = () => {
  const items = ["Homepage", "Projects", "Skills", "Contact"];

  return (
    <motion.div className="links" variants={variants}>
      {items.map((item) => (
        <motion.a href={`#${item}`} key={item} variants={itemVariants} whileHover={{scale: 1.1}} whileTap={{scale:0.9}}>
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
