import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import { useRouter } from "next/router";
import tw, { styled } from "twin.macro";

import { anime, karasuma, mono } from "@/utility/fonts";
import GlobalStyles from "@/styles/global";
import config from "next-seo.config";
import Nav from "@/components/layout/nav";
import Footer from "@/components/layout/footer";

import "@/styles/global.css";

const Main = styled.main`
  ${tw`antialiased w-screen min-h-[90vh]`};
  ${tw`relative z-0`};
  ${tw`top-[4.375rem] mb-[4.375rem] md:(top-[4.625rem] mb-[4.625rem]) xl:(top-[5.625rem] mb-[5.625rem])`};
  ${tw`px-[5.33%] md:(px-[5.21%]) 2xl:(px-0)`};
  background: url("/images/halftone/diagonal.webp"), #40718c;
  background-blend-mode: multiply;
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-opacity: 50%;
`;

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      <DefaultSeo {...config} />
      <GlobalStyles />
      {router.asPath === `/resume` ? (
        <Component {...pageProps} />
      ) : (
        <>
          <Nav />
          <Main
            className={`${anime.variable} ${karasuma.variable} ${mono.variable}`}
          >
            <Component {...pageProps} />
          </Main>
          <Footer />
        </>
      )}
    </>
  );
}
