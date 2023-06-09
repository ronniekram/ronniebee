import type {
  NextPage,
  GetStaticProps,
  GetStaticPaths,
} from "next";
import { NextSeo } from "next-seo";
import { groq } from "next-sanity";
import "twin.macro";

import config from "next-seo.config";
import { getClient } from "@/lib/sanity.client";

import type { Project } from "@/utility/types";
import Banner from "@/components/shared/page-banner";
import { Wrapper } from "./index";

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
  const currentIdx: number = slugs.findIndex((slugObj) => slugObj.slug.current === project?.slug?.current);

  const prevProject = (): number => {
    if (slugs[currentIdx - 1]) return currentIdx - 1;
    return slugs.length - 1;
  };

  const nextProject = (): number => {
    if (slugs[currentIdx + 1]) return currentIdx + 1;
    return 0;
  };

  return (
    <>
      <NextSeo
        {...config}
        title={project?.metaTitle}
        description={project?.metaDesc}
      />

      <Wrapper>
        <Banner label={project?.name} />
      </Wrapper>
    </>
  );
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

  const paths = slugs?.map((project: { slug: { current: string; } }) => ({
    params: {
      slug: project.slug.current,
    },
  })) || [];

  return {
    paths,
    fallback: false,
  };
};
