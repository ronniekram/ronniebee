import type { FileAsset, ImageAsset, PortableTextBlock } from "sanity";

export type Project = {
  _type: `project`;
  name: string;
  slug: {
    current: string;
  };
  thumbnail: ImageAsset;
  headline: string;
  stack: string[];
  client?: string;
  creative?: string[];
  devs?: string[];
  github?: string;
  live: string;
  details: PortableTextBlock;
  media: (ImageAsset | FileAsset)[];
  metaTitle: string;
  metaDesc: string;
};
