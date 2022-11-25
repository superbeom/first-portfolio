import React from "react";
import { motion } from "framer-motion";

import { Project } from "@/types";
import useStore from "@/store";

interface Props {
  project: Project;
}

const position = 500;
const transition = { duration: 1 };
const whileInView = { y: 0, opacity: 1 };

const width = "w-[100%] 2xl:w-[80%]";

const Project = ({ project }: Props) => {
  const { isMobile, isDesktop } = useStore();

  return (
    <div className="relative w-full flex-center flex-col mb-5 md:mb-10">
      <motion.img
        src={project.image}
        alt="project image"
        className={`${width}`}
      />

      {isDesktop ? (
        <motion.div
          initial={{ y: position, opacity: 0 }}
          transition={transition}
          whileInView={whileInView}
          className={`absolute top-0 flex-center flex-col ${width} h-full
        space-y-5 bg-dark-background-50 text-white-light`}
        >
          <h3 className="text-4xl font-semibold">
            <span className="underline underline-offset-4">{project.name}</span>
          </h3>

          <p className="text-2xl">{project.summary}</p>
        </motion.div>
      ) : (
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          transition={{ duration: 1 }}
          whileInView={{ y: 0, opacity: 1 }}
          className={`flex-center flex-col ${width} h-full space-y-3 mt-3 text-center`}
        >
          <h3 className={`${isMobile ? "text-2xl" : "text-3xl"} font-semibold`}>
            <span className="underline underline-offset-4">{project.name}</span>
          </h3>

          <p className={`${isMobile ? "text-lg" : "text-xl"}`}>
            {project.summary}
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default Project;
