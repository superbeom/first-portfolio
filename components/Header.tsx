import React, { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { MdSettings, MdLightMode, MdDarkMode } from "react-icons/md";

import { Social } from "@/types";
import useStore from "@/store";

import useDebounce from "@/hooks/useDebounce";
import routes from "@/constants/routes";
import { DARK, LIGHT, THEME } from "@/constants/strings";

import { getSocialsApi } from "@/lib/fetch";
import { smoothScroll } from "@/utils";

interface Motion {
  position: number;
  className?: string;
  onClick?: () => void;
  children: ReactNode;
}

const posistion = 500;
const initial = {
  opacity: 0,
  scale: 0.5,
};
const animate = {
  x: 0,
  opacity: 1,
  scale: 1,
};
const transition = { duration: 1.5 };

const socialIconStyle = {
  className: "cursor-pointer",
  fgColor: "gray",
  bgColor: "transparent",
};

const MotionDiv = ({ position, className, onClick, children }: Motion) => (
  <motion.div
    initial={{
      ...initial,
      x: position,
    }}
    animate={animate}
    transition={transition}
    className={className}
    onClick={onClick}
  >
    {children}
  </motion.div>
);

const Header = () => {
  const router = useRouter();

  const [isReady, setIsReady] = useState<boolean>(false);
  const [socials, setSocials] = useState<Social[]>([]);

  const { theme, updateTheme } = useStore();

  const preLoad = useDebounce(async () => {
    try {
      const parsedSocials = await getSocialsApi();
      setSocials(parsedSocials);
    } catch (error) {
    } finally {
      setIsReady(true);
    }
  });

  useEffect(() => {
    preLoad();
  }, []);

  return (
    <div
      className="fixed top-0 flex justify-between items-start xl:items-center
                 w-full p-5 sm:px-10 cursor-pointer z-10"
    >
      <MotionDiv position={-posistion} className="flex items-center">
        {isReady &&
          socials.map((social) => (
            <SocialIcon
              key={social.id}
              network={social.name}
              url={social.url}
              {...socialIconStyle}
            />
          ))}

        <SocialIcon
          network="email"
          {...socialIconStyle}
          onClick={() => smoothScroll("contact")}
        />
      </MotionDiv>

      <MotionDiv position={posistion} className="flex items-center space-x-5">
        <MdSettings
          className="text-gray-500"
          size={23}
          onClick={() => router.push(routes.setting)}
        />

        <div
          className="text-gray-500"
          onClick={() => {
            updateTheme(theme === LIGHT ? DARK : LIGHT);
            localStorage.setItem(THEME, theme === LIGHT ? DARK : LIGHT);
          }}
        >
          {theme === LIGHT ? (
            <MdDarkMode size={23} />
          ) : (
            <MdLightMode size={23} />
          )}
        </div>
      </MotionDiv>
    </div>
  );
};

export default Header;
