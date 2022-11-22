import React, { useState } from "react";

import { smoothScroll } from "@/utils";
import sections from "@/constants/sections";
import { position } from "@/constants/styles";

import { MotionNav } from "@/components";

const Panel = () => {
  const [target, setTarget] = useState<string>("hero");

  const hadleClick = (tartgetId: string) => {
    setTarget(tartgetId);
    smoothScroll(tartgetId);
  };

  return (
    <MotionNav
      position={position}
      className="fixed top-24 right-7 flex flex-col items-center
                 space-y-5 py-5 rounded-sm z-10"
    >
      {sections.map((section) => (
        <button
          key={section.id}
          className={`${target === section.id && "text-primary"} hero-button`}
          onClick={() => hadleClick(section.id)}
        >
          {section.name}
        </button>
      ))}
    </MotionNav>
  );
};

export default Panel;
