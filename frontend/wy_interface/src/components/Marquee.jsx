import React from "react";
import { delay, motion } from "framer-motion";
import "../styles/marquee.css";

// still kind of choppy :(
const marqueeVariants = {
  animate: {
    x: [0, -6400],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 55,
        ease: "linear",
        // delay: 2,
      },
    },
  },
};

const Marquee = () => {
  return (
    <div>
      <div className="marquee orbitron cursor-default">
        {/* 3. Using framer motion */}
        <motion.div
          className="track"
          variants={marqueeVariants}
          animate="animate"
        >
          <h1>
            We are watching. The Hyraxes are watching. We are waiting. I am
            watching. Frank is watching. Do you see me? We are watching.
          </h1>
        </motion.div>
      </div>
    </div>
  );
};

export default Marquee;
