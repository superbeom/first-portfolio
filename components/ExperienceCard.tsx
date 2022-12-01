import React from "react";
import { motion, Variants } from "framer-motion";
import moment from "moment";

import { Experience } from "@/types";

interface Props {
  experience: Experience;
  left: boolean;
}

const cardVariants: Variants = {
  offscreen: {
    y: 500,
  },
  onscreen: {
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 0.8,
    },
  },
};

const ExperienceCard = ({ experience, left }: Props) => (
  <motion.div
    initial="offscreen"
    whileInView="onscreen"
    viewport={{ amount: 0.8 }}
    className={`card-container ${
      left ? "justify-start" : "justify-start lg:justify-end"
    }`}
  >
    <div className="timedot" />

    <motion.div
      variants={cardVariants}
      className={`card ${left ? "card-left" : "card-right"}`}
    >
      <motion.img
        className="w-16 h-16 md:w-20 md:h-20 p-2 rounded-3xl"
        src={experience.companyImage}
        alt={experience.company}
      />

      <div className="ml-2 md:ml-3">
        <h3 className="text-background md:text-lg font-bold">
          {experience.company}
        </h3>
        <h4 className="text-background text-sm md:text-base font-medium">
          {experience.jobTitle}
        </h4>
        <p className="text-background text-xs md:text-sm">
          {experience.startedDate} - {experience.endedDate}
        </p>
      </div>
    </motion.div>
  </motion.div>
);

export default ExperienceCard;
