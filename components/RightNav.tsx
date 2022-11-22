import React from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";

import useStore from "@/store";

import { position } from "@/constants/styles";
import { DARK, LIGHT, THEME } from "@/constants/strings";

import { MotionNav } from "@/components";

const RightNav = () => {
  const { theme, updateTheme } = useStore();

  return (
    <MotionNav
      position={position}
      className="fixed right-0 flex items-center space-x-5 m-3 mx-4 px-3 py-2 z-10"
    >
      <div
        className="text-yellow-500 bg-content p-2 ball opacity-80 hover:opacity-100 pointer"
        onClick={() => {
          updateTheme(theme === LIGHT ? DARK : LIGHT);
          localStorage.setItem(THEME, theme === LIGHT ? DARK : LIGHT);
        }}
      >
        {theme === LIGHT ? <MdDarkMode size={23} /> : <MdLightMode size={23} />}
      </div>
    </MotionNav>
  );
};

export default RightNav;
