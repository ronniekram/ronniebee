/* eslint-disable quotes */
import localFont from "next/font/local";

export const anime = localFont({
  src: [
    {
      path: "../../../public/fonts/anime-ace/animeace2_reg.otf",
      weight: "400",
    },
    {
      path: "../../../public/fonts/anime-ace/animeace2_bld.otf",
      weight: "700"
    },
  ],
  variable: "--display",
});

export const karasuma = localFont({
  src: [
    {
      path: "../../../public/fonts/karasuma/regular.otf",
      weight: "400",
    },
    {
      path: "../../../public/fonts/karasuma/medium.otf",
      weight: "500",
    },
    {
      path: "../../../public/fonts/karasuma/bold.otf",
      weight: "700",
    },
    {
      path: "../../../public/fonts/karasuma/black.otf",
      weight: "900",
    },
  ],
  variable: "--sans",
});
