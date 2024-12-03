import React from "react";
import { delay, motion } from "framer-motion";
import "../styles/marquee.css";

// still kind of choppy :(
// Perhaps have the x values be
// set with window parameters from the DOM?
const marqueeVariants = {
  animate: {
    x: [1500, -8500],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 85,
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
            watching. Hi Mom. Frank is watching. Do you see me? We are watching.
          </h1>
        </motion.div>
      </div>
    </div>
  );
};

export default Marquee;
