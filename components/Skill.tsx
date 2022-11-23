import React from "react";
import { motion } from "framer-motion";

interface Skill {
  name: string;
  url: string;
}

interface Props {
  skill: Skill;
}

const Skill = ({ skill }: Props) => {
  return (
    <div
      className="flex-center flex-col text-center text-xs sm:text-base
      p-3 sm:p-5 space-y-1 opacity-80 hover:opacity-100 bg-content-10"
    >
      <motion.img
        initial={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        whileInView={{ opacity: 1 }}
        className="object-contain w-8 h-8 sm:w-12 sm:h-12 transition duration-300 ease-in-out"
        src={skill.url}
      />

      <span>{skill.name}</span>
    </div>
  );
};

export default Skill;
