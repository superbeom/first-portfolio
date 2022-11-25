import "../styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";

import { Social } from "@/types";

import useStore from "@/store";
import useDebounce from "@/hooks/useDebounce";

import { THEME, LIGHT, DARK } from "@/constants/strings";

import {
  LeftNav,
  RightNav,
  Panel,
  MobilePanel,
  Loader,
  Invalid,
  ChannelService,
} from "@/components";
import { getSocialsApi } from "@/lib/fetch";

const App = ({ Component, pageProps }: AppProps) => {
  const [isReady, setIsReady] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [activeId, setActiveId] = useState<string>("hero");
  const [socials, setSocials] = useState<Social[]>([]);

  let lastScrollTop = 0;

  const {
    title,
    theme,
    isMobile,
    updateTheme,
    updateIsMobile,
    updateIsDesktop,
  } = useStore();

  const detectResize = useDebounce(() => {
    const windowWidth = window.innerWidth;

    if (windowWidth <= 425) {
      updateIsMobile(true);
      updateIsDesktop(false);
    } else if (windowWidth < 1024) {
      updateIsMobile(false);
      updateIsDesktop(false);
    } else {
      updateIsMobile(false);
      updateIsDesktop(true);
    }
  });

  const detectScroll = (sections: NodeListOf<HTMLElement>) => {
    if (sections.length === 0) return;

    const scrollY = window.scrollY;

    let changePoint = 0;
    if (scrollY > lastScrollTop) {
      changePoint = isMobile ? 150 : 300; // Down Scroll
    } else {
      changePoint = isMobile ? 450 : 600; // Up Scroll
    }

    lastScrollTop = scrollY;

    sections.forEach((section) => {
      const sectionTop =
        section.getBoundingClientRect().top + window.scrollY - changePoint;

      const sectionId = section.id;
      const sectionHeight = section.offsetHeight;
      const sectionClassName = document.getElementById(sectionId)?.className;

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        if (!sectionClassName?.includes("active")) {
          document.getElementById(sectionId)?.classList.add("active");
          setActiveId(sectionId);
        }
      } else {
        if (sectionClassName?.includes("active")) {
          document.getElementById(sectionId)?.classList.remove("active");
        }
      }
    });
  };

  const preLoad = useDebounce(async () => {
    try {
      const localTheme = localStorage.getItem(THEME) ?? DARK;
      updateTheme(localTheme === LIGHT ? LIGHT : DARK);

      const parsedSocials = await getSocialsApi();

      if (!parsedSocials) {
        setError(true);
        return;
      }

      setSocials(parsedSocials);

      detectResize();
    } catch (error: any) {
      console.log("Error @preLoad - Leftnav: ", error.message);
    } finally {
      setTimeout(() => setIsReady(true), 100);
    }
  });

  useEffect(() => {
    const channelTalk = new ChannelService();

    preLoad();

    channelTalk.boot({
      pluginKey: process.env.NEXT_PUBLIC_CHANNEL_TALK_PLUGIN_KEY,
      zIndex: 10,
      language: "en",
    });

    window.addEventListener("resize", detectResize);

    return () => {
      window.removeEventListener("resize", detectResize);
      channelTalk.shutdown();
    };
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll(
      "section[id]"
    ) as NodeListOf<HTMLElement>;

    window.addEventListener(
      "scroll",
      useDebounce(() => detectScroll(sections))
    );

    return () => {
      () => window.addEventListener("scroll", () => detectScroll(sections));
    };
  }, [isReady, isMobile]); // First loaded > 'sections' is [] > isReady: true > useEffect re-excute

  if (!isReady) {
    return <Loader />;
  }

  if (error) {
    return <Invalid />;
  }

  return (
    <div
      className={`${
        theme === LIGHT ? "light" : "dark"
      } bg-background text-content`}
    >
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <section>
        <LeftNav socials={socials} />
      </section>

      <section>
        <RightNav />
      </section>

      <main>
        <Component {...pageProps} socials={socials} />
      </main>

      <section>
        {isMobile ? (
          <MobilePanel activeId={activeId} />
        ) : (
          <Panel activeId={activeId} />
        )}
      </section>
    </div>
  );
};

export default App;
