import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";

import { anime, karasuma } from "@/utility/fonts";
import GlobalStyles from "@/styles/global";
import config from "next-seo.config";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...config} />
      <GlobalStyles />
      <main className={`${anime.variable} ${karasuma.variable}`}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
