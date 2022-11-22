import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { Experience } from "@/types";

interface Props {
  experience: Experience;
}

const ExperienceCard = ({ experience }: Props) => {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
    w-[500px] md:w-[600px] xl:w-[900px]
    snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40
    pointer transition-opacity duration-200 overflow-hidden"
    >
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="w-32 h-32 ball xl:w-[200px] xl:h-[200px] object-cover object-center"
        src={experience.companyImage}
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">{experience.jobTitle}</h4>
        <p className="font-bold text-2xl mt-1">{experience.company}</p>

        <div className="flex space-x-2 my-2">
          <Image
            className="w-10 h-10 ball"
            src="https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png"
            alt=""
            width={40}
            height={40}
          />
          <Image
            className="w-10 h-10 ball"
            src="https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png"
            alt=""
            width={40}
            height={40}
          />
          <Image
            className="w-10 h-10 ball"
            src="https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png"
            alt=""
            width={40}
            height={40}
          />
        </div>

        <p className="uppercase py-5 text-gray-300">
          Started work... - Ended...
        </p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
