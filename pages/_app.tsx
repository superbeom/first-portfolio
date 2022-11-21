import "../styles/globals.css";

import React, { useEffect } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";

import useStore from "@/store";
import useDebounce from "@/hooks/useDebounce";

import { THEME, LIGHT, DARK } from "@/constants/strings";

import { Header } from "@/components";

const App = ({ Component, pageProps }: AppProps) => {
  const { title, theme, updateTheme } = useStore();

  const preLoad = useDebounce(() => {
    const localTheme = localStorage.getItem(THEME) ?? LIGHT;
    updateTheme(localTheme === LIGHT ? LIGHT : DARK);
  });

  useEffect(() => {
    preLoad();
  }, []);

  return (
    <div
      className={`${theme === DARK ? "dark" : ""} bg-background text-content`}
    >
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <header>
        <Header />
      </header>

      <main>
        <Component {...pageProps} />
      </main>

      <footer></footer>
    </div>
  );
};

export default App;
