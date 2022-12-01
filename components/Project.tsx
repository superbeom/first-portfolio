import React from "react";
import { motion } from "framer-motion";

import { Project } from "@/types";
import useStore from "@/store";

interface Props {
  project: Project;
}

interface DetailsProps {
  position: number;
  divStyle: string;
  h3Style: string;
  pStyle: string;
  projectName: string;
  projectSummary: string;
}

const transition = { duration: 1 };
const whileInView = { y: 0, opacity: 1 };

const width = "w-[100%] 2xl:w-[80%]";

const Details = ({
  position,
  divStyle,
  h3Style,
  pStyle,
  projectName,
  projectSummary,
}: DetailsProps) => (
  <motion.div
    initial={{ y: position, opacity: 0 }}
    transition={transition}
    whileInView={whileInView}
    className={divStyle}
  >
    <h3 className={`${h3Style} font-semibold`}>
      <span className="underline underline-offset-4">{projectName}</span>
    </h3>

    <p className={pStyle}>{projectSummary}</p>
  </motion.div>
);

const Project = ({ project }: Props) => {
  const { isMobile, isDesktop } = useStore();

  return (
    <div className="relative w-full flex-center flex-col mb-5 md:mb-10">
      <motion.img
        src={project.image}
        alt={project.name}
        className={`${width}`}
      />

      {isDesktop ? (
        <Details
          position={500}
          divStyle={`absolute top-0 flex-center flex-col ${width} h-full
          space-y-5 bg-dark-background-50 text-white-light`}
          h3Style="text-4xl"
          pStyle="text-2xl"
          projectName={project.name}
          projectSummary={project.summary}
        />
      ) : (
        <Details
          position={-50}
          divStyle={`flex-center flex-col ${width} h-full space-y-3 mt-3 text-center`}
          h3Style={`${isMobile ? "text-2xl" : "text-3xl"}`}
          pStyle={`${isMobile ? "text-lg" : "text-xl"}`}
          projectName={project.name}
          projectSummary={project.summary}
        />
      )}
    </div>
  );
};

export default Project;
