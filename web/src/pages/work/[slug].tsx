import type {
  NextPage,
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType,
  GetStaticPaths,
} from "next";
import { NextSeo } from "next-seo";
import { groq } from "next-sanity";
import "twin.macro";

import { Project } from "../../../../studio/utility/types";

import config from "next-seo.config";
import { getClient } from "@/lib/sanity.client";

//! ----------> TYPES <----------
type Slug = {
  slug: {
    current: string;
  };
  name: string;
  orderRank: string;
};

type Props = {
  project: Project;
  slugs: Slug[];
};


//! ----------> COMPONENTS <----------
const ProjectPage: NextPage<Props> = ({ project, slugs }: Props) => {
  console.log(project);

  return (
    <>
      <NextSeo
        {...config}
        title={project.metaTitle}
        description={project.metaDesc}
      />

      <h1 tw="font-display font-bold text-white text-6xl">
        {project.name}
      </h1>
    </>
  )
};

export default ProjectPage;

//! ----------> PROPS <----------
const query = groq`*[_type == "project" && slug.current == $slug]`;

const slugQuery = groq`*[_type == "project"] | order(orderRank) {
  slug {
    current,
  },
  name,
  orderRank,
}`;

const pathsQuery = groq`*[_type == "project"]{ slug }`;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const client = getClient();
  const options = { slug: params?.slug };

  const project: Project[] = await client.fetch(query, options);
  const slugs: Slug[] = await client.fetch(slugQuery);

  const props = {
    project: project[0],
    slugs,
  };

  return { props };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const client = getClient();
  const slugs = await client.fetch(pathsQuery);

  const paths = slugs?.map((project: { slug: { current: string;  }}) => ({
    params: {
      slug: project.slug.current,
    },
  })) || [];

  return {
    paths,
    fallback: false,
  };
};
