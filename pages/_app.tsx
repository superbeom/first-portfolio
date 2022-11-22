import "../styles/globals.css";

import React, { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { isMobileOnly } from "react-device-detect";

import { Social } from "@/types";

import useStore from "@/store";
import useDebounce from "@/hooks/useDebounce";

import { THEME, LIGHT, DARK } from "@/constants/strings";

import { LeftNav, RightNav, Panel, MobilePanel, Loader } from "@/components";
import { getSocialsApi } from "@/lib/fetch";

const App = ({ Component, pageProps }: AppProps) => {
  const [isReady, setIsReady] = useState<boolean>(false);
  const [socials, setSocials] = useState<Social[]>([]);

  const { title, theme, updateTheme } = useStore();

  const preLoad = useDebounce(async () => {
    try {
      const localTheme = localStorage.getItem(THEME) ?? DARK;
      updateTheme(localTheme === LIGHT ? LIGHT : DARK);

      const parsedSocials = await getSocialsApi();
      setSocials(parsedSocials);
    } catch (error: any) {
      console.log("Error @preLoad - Leftnav: ", error.message);
    } finally {
      setIsReady(true);
    }
  });

  useEffect(() => {
    preLoad();
  }, []);

  if (!isReady) {
    return <Loader />;
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

      <section>{isMobileOnly ? <MobilePanel /> : <Panel />}</section>
    </div>
  );
};

export default App;
