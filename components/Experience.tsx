import React from "react";

import { Experience } from "@/types";
import { ExperienceCard, Timeline } from "@/components";

interface Props {
  experiences: Experience[];
}

const Experience = ({ experiences }: Props) => (
  <section
    id="experience"
    className="motion-container min-h-screen h-full max-w-full
      text-left overflow-hidden flex flex-col"
  >
    <h2 className="title">Experience</h2>

    <div className="relative flex-center flex-col w-[80%] mt-24 pb-10">
      <Timeline />

      {experiences.map((experience, index) => (
        <ExperienceCard
          key={experience.id}
          experience={experience}
          left={index % 2 === 0}
        />
      ))}
    </div>
  </section>
);

export default Experience;
