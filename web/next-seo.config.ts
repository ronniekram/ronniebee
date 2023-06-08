import { DefaultSeoProps } from "next-seo";

const config: DefaultSeoProps = {
  titleTemplate: `@ ronniebee.dev`,
  title: `FULLSTACK DEV // PGH, PA`,
  description: `Portfolio website for Ronnie Boniface, a fullstack developer in Pittsburgh, PA`,
  canonical: `https://ronniebee.dev`,
  openGraph: {
    type: `website`,
    locale: `en_US`,
    url: `https://ronniebee.dev`,
    title: `FULLSTACK DEV // PGH, PA`,
    siteName: `@ ronniebee.dev`,
    description: `Portfolio website for Ronnie Boniface, a fullstack developer in Pittsburgh, PA`,
    images: [
      {
        url: `https://raw.githubusercontent.com/ronniekram/ronniebee/dev/web/public/opengraph.png`,
        width: 1200,
        height: 630,
        alt: `ronniebee.dev`,
        type: `image/png`,
      },
    ],
  },
  twitter: {
    cardType: `summary_large_image`,
  },
  additionalMetaTags: [
    {
      name: `viewport`,
      content: `width=device-width, initial-scale=1.0`,
    },
  ],
};

export default config;
