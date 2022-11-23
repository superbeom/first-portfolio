import React from "react";

import { smoothScroll } from "@/utils";
import sections from "@/constants/sections";
import { position } from "@/constants/styles";

import { MotionNav } from "@/components";

interface Props {
  activeId: string;
}

const Panel = ({ activeId }: Props) => {
  const hadleClick = (tartgetId: string) => {
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
          className={`${activeId === section.id && "text-primary"} hero-button`}
          onClick={() => hadleClick(section.id)}
        >
          {section.name}
        </button>
      ))}
    </MotionNav>
  );
};

export default Panel;
