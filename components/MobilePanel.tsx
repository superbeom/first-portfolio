import React, { useState } from "react";

import { smoothScroll } from "@/utils";
import sections from "@/constants/sections";
import { position } from "@/constants/styles";

import { MotionNav } from "@/components";

const MobilePanel = () => {
  const [target, setTarget] = useState<string>("hero");

  const hadleClick = (tartgetId: string) => {
    setTarget(tartgetId);
    smoothScroll(tartgetId);
  };

  return (
    <MotionNav
      position={position}
      className="fixed bottom-7 flex-center w-full rounded-sm z-10"
    >
      <div className="flex justify-around items-center w-[80%] p-4 bg-content-10 ball">
        {sections.map((section) => (
          <div
            key={section.id}
            className={`${
              target === section.id && "text-primary"
            } text-content opacity-80`}
            onClick={() => hadleClick(section.id)}
          >
            {section.icon}
          </div>
        ))}
      </div>
    </MotionNav>
  );
};

export default MobilePanel;
