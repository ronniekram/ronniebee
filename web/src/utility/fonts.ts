/* eslint-disable quotes */
import { Source_Code_Pro as Source } from "next/font/google";
import localFont from "next/font/local";

export const anime = localFont({
  src: [
    {
      path: "./fonts/anime-ace/regular.woff",
      weight: "400",
    },
    {
      path: "./fonts/anime-ace/bold.woff",
      weight: "700"
    },
  ],
  variable: "--display",
});

export const karasuma = localFont({
  src: [
    {
      path: "./fonts/karasuma/regular.woff",
      weight: "400",
    },
    {
      path: "./fonts/karasuma/medium.woff",
      weight: "500",
    },
    {
      path: "./fonts/karasuma/bold.woff",
      weight: "700",
    },
    {
      path: "./fonts/karasuma/black.woff",
      weight: "900",
    },
  ],
  variable: "--sans",
});

export const mono = Source({
  display: "swap",
  subsets: ["latin"],
  variable: "--mono",
});
