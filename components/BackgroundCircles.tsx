import React from "react";
import { motion } from "framer-motion";

const BackgroundCircles = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex-center"
    >
      <div className="circle w-[200px] h-[200px] animate-slow-ping" />
      <div className="circle w-[250px] h-[250px] lg:w-[300px] lg:h-[300px]" />
      <div className="circle lg:w-[500px] lg:h-[500px]" />
      <div className="circle w-[400px] h-[400px] border-primary lg:w-[650px] lg:h-[650px] opacity-80 animate-pulse" />
      <div className="circle lg:w-[800px] lg:h-[800px]" />
    </motion.div>
  );
};

export default BackgroundCircles;
