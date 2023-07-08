/* eslint-disable unicorn/numeric-separators-style */
import type {
  NextPage,
  GetStaticProps,
  GetStaticPaths,
} from "next";
import Link from "next/link";
import { NextSeo } from "next-seo";
import { groq } from "next-sanity";
import tw, { styled } from "twin.macro";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";

import config from "next-seo.config";
import { getClient } from "@/lib/sanity.client";

import type { ImageObj, Project } from "@/utility/types";
import { Wrapper } from "./index";
import SanityImage from "@/components/shared/sanity-image";
import Banner from "@/components/shared/page-banner";
import ProjectDetail from "@/components/work/detail";
import Media from "@/components/work/media";

//! ----------> TYPES <----------
type Slug = {
  slug: {
    current: string;
  };
  name: string;
  orderRank: string;
};

type Props = {
  project: Omit<Project, `media`> & { media: ImageObj[] };
  slugs: Slug[];
};

//! ----------> STYLES <----------
const Nav = styled(Link)`
  ${tw`w-11 h-11 xl:(w-16 h-16)`};
  ${tw`bg-yellow-600 text-grey-600`};
  ${tw`rounded-full shadow-xl`};
  ${tw`flex items-center justify-center`};
  ${tw`text-[37px] md:(text-[54px])`};
  ${tw`transition duration-300 ease-in-out`};
  ${tw`hover:(bg-yellow-500)`};
`;

const Project = styled.div`
  ${tw`w-full`};
  ${tw`grid grid-cols-1 gap-y-5`};
  ${tw`md:(gap-y-6)`};
  ${tw`lg:(grid-cols-[auto, 55%] gap-x-[5%] gap-y-0)`};
`;

const NavWrapper = styled.div`
  ${tw`w-full max-w-[86rem] mx-auto`};
  ${tw`flex items-center justify-between`};
  ${tw`pb-12 md:(pb-24) xl:(pb-40)`};
`;

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

  const text = {
    details: project.details,
    headline: project.headline,
    stack: project.stack,
    client: project.client,
    creative: project.creative,
    devs: project.devs,
    github: project.github,
    live: project.live,
  };

  return (
    <>
      <NextSeo
        {...config}
        title={project.metaTitle}
        description={project.metaDesc}
        canonical={`https://ronniebee.dev/work/${project.slug.current}`}
      />

      <Wrapper>
        <Banner label={project?.name} />

        <Project>
          <div tw="w-full flex flex-col space-y-5 md:(space-y-6) lg:(order-2)">
            <div tw="rounded-2xl border-[3px] border-grey-600 shadow-2xl overflow-hidden">
              <SanityImage image={project.thumbnail} alt={project.name} />
            </div>
            <ProjectDetail {...text} />
          </div>
          <Media name={project.name} media={project.media} />
        </Project>

      </Wrapper>
      {/* NAVIGATION */}
      <NavWrapper>
        <Nav
          href={`${slugs[prevProject()].slug.current}`}
          aria-label="Previous project"
        >
          <FiArrowLeftCircle strokeWidth={1.5} />
        </Nav>
        <Nav
          href={`${slugs[nextProject()].slug.current}`}
          aria-label="Next project"
        >
          <FiArrowRightCircle strokeWidth={1.5} />
        </Nav>
      </NavWrapper>
    </>
  );
};

export default ProjectPage;

//! ----------> PROPS <----------
const query = groq`*[_type == "project" && slug.current == $slug]{
  ...,
  thumbnail{
    asset->
  },
  media[]{
    asset->
  }
}`;

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
    project: {
      ...project[0]
    },
    slugs,
  };

  return { props, revalidate: 86400 };
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
    fallback: `blocking`,
  };
};
