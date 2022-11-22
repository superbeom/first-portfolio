import React from "react";
import { motion } from "framer-motion";

interface Props {
  directionLeft?: boolean;
}

const Skill = ({ directionLeft }: Props) => {
  return (
    <div className="group relative flex pointer">
      <motion.img
        initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ x: 0, opacity: 1 }}
        className="ball border border-gray-500 boject-cover w-24 h-24 xl:w-32 xl:h-32
        filter group-hover:grayscale transition duration-300 ease-in-out"
        src="https://res.cloudinary.com/ds8wavxll/image/upload/v1668665907/cat2_nmkrwg.jpg"
      />

      <div
        className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out
      group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 ball z-0"
      >
        <div className="flex-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">100%</p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
