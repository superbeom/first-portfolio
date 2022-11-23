import React from "react";

import skills from "@/constants/skills";
import { MotionContainer, Skill } from "@/components";

const Skills = () => {
  return (
    <MotionContainer
      className="relative flex-center flex-col
      max-w-[2000px] min-h-screen space-y-20 mx-auto"
    >
      <h3 className="title">Skills</h3>

      <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 sm:gap-5 w-[80%]">
        {skills.map((skill) => (
          <Skill key={skill.name} skill={skill} />
        ))}
      </div>
    </MotionContainer>
  );
};

export default Skills;
