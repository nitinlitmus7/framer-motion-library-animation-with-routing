import React from 'react';
import {motion} from "framer-motion";
const pageVariants = {
  initial: {
    opacity: 0,
    y: "10vw",
    scale: 0.8
  },
  in: {
    opacity: 1,
    y: 0,
    scale: 1
  },
  out: {
    opacity: 0,
    y: "-10vw",
    scale: 1.2
  }
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5
};

const pageStyle = {
  position: "relative"
};
const Message = () => (
  <motion.div
      style={pageStyle}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
  <div className="pageMr">
    <h2>Message</h2>
    My Message page!
  </div>
  </motion.div>
);

export default Message;