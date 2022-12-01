import React from "react";

import { Skill as SkillType } from "@/types";

import { MotionContainer, Skill } from "@/components";

interface Props {
  skills: SkillType[];
}

const Skills = ({ skills }: Props) => (
  <MotionContainer
    id="skills"
    className="relative flex-center flex-col
      max-w-[2000px] min-h-screen h-full space-y-20 mx-auto"
  >
    <h2 className="title">Skills</h2>

    <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 sm:gap-5 w-[80%]">
      {skills.map((skill) => (
        <Skill key={skill.name} skill={skill} />
      ))}
    </div>
  </MotionContainer>
);

export default Skills;
