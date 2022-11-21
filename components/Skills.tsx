import React from "react";

import { Skill as SkillType } from "@/types";
import { MotionContainer, Skill } from "@/components";

interface Props {
  skills: SkillType[];
}

const Skills = ({ skills }: Props) => {
  return (
    <MotionContainer
      className="relative flex flex-col text-center md:text-left 
    xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center
    items-center xl:space-y-0 mx-auto"
    >
      <h3 className="title">Skills</h3>

      <h3
        className="absolute top-36 uppercase tracking-[3px]
      text-gray-500 text-sm"
      >
        Hover over a skill for currency profieciency
      </h3>

      <div className="grid grid-cols-4 gap-5">
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
      </div>
    </MotionContainer>
  );
};

export default Skills;
