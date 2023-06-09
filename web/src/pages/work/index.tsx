import type {
  NextPage,
  GetStaticProps,
} from "next";
import type { ImageAsset } from "sanity";
import { useEffect } from "react";
import "twin.macro";
import { groq } from "next-sanity";

import { getClient } from "@/lib/sanity.client";

//! ----------> TYPES <----------
type ProjectProps = {
  name: string;
  slug: {
    current: string;
  };
  thumbnail: ImageAsset;
};

type Props = {
  projects: ProjectProps[];
};

//! ----------> STYLES <----------
//! ----------> COMPONENTS <----------
const WorkPage: NextPage<Props> = ({ projects }: Props) => {

  useEffect(() => {
    console.log(projects);
  }, []);

  return <div />
};

export default WorkPage;

//! ----------> PROPS <----------
const query = groq`*[_type == "project"] | order(orderRank) {
  name,
  slug,
  thumbnail,
}`;

export const getStaticProps: GetStaticProps = async () => {
  const client = getClient();
  const projects: ProjectProps[] = await client.fetch(query);

  const props = {
    projects,
  };

  return { props };
};
