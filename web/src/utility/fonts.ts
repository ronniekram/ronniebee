/* eslint-disable quotes */
import localFont from "next/font/local";

export const anime = localFont({
  src: [
    {
      path: "./fonts/anime-ace/regular.otf",
      weight: "400",
    },
    {
      path: "./fonts/anime-ace/bold.otf",
      weight: "700"
    },
  ],
  variable: "--display",
});

export const karasuma = localFont({
  src: [
    {
      path: "./fonts/karasuma/regular.otf",
      weight: "400",
    },
    {
      path: "./fonts/karasuma/medium.otf",
      weight: "500",
    },
    {
      path: "./fonts/karasuma/bold.otf",
      weight: "700",
    },
    {
      path: "./fonts/karasuma/black.otf",
      weight: "900",
    },
  ],
  variable: "--sans",
});
