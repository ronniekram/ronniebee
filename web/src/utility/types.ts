import type { FileAsset, ImageAsset, PortableTextBlock } from "sanity";

export type ImageObj = {
  asset: ImageAsset;
}

export type Project = {
  _type: `project`;
  name: string;
  slug: {
    current: string;
  };
  thumbnail: {
    asset: ImageObj;
  };
  headline: string;
  stack: string[];
  client?: string;
  creative?: string[];
  devs?: string[];
  github?: string;
  live: string;
  details: PortableTextBlock;
  media: (ImageObj | FileAsset)[];
  metaTitle: string;
  metaDesc: string;
};
