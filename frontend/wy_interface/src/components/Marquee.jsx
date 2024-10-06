import React from "react";
import { motion } from "framer-motion";
import "../styles/marquee.css";

const marqueeVariants = {
  animate: {
    x: [0, -3000],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 15,
        ease: "linear",
      },
    },
  },
};

const Marquee = () => {
  return (
    <div>
      <div className="marquee orbitron">
        {/* 3. Using framer motion */}
        <motion.div
          className="track"
          variants={marqueeVariants}
          animate="animate"
        >
          <h1>
            We are watching. We are watching. We are watching. We are watching.
            We are watching. We are watching. We are watching. We are watching.
            We are watching. We are watching. We are watching. We are watching.
          </h1>
        </motion.div>
      </div>
    </div>
  );
};

export default Marquee;
