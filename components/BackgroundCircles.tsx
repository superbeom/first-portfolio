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
      <div className="absolute border border-lightGray w-[200px] h-[200px] rounded-full mt-52 animate-ping" />
      <div className="absolute border border-lightGray w-[300px] h-[300px] rounded-full mt-52" />
      <div className="absolute border border-lightGray w-[500px] h-[500px] rounded-full mt-52" />
      <div className="absolute border border-primary w-[650px] h-[650px] rounded-full opacity-20 mt-52 animate-pulse" />
      <div className="absolute border border-lightGray w-[800px] h-[800px] rounded-full mt-52" />
    </motion.div>
  );
};

export default BackgroundCircles;
