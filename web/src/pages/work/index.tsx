import type {
  NextPage,
  GetStaticProps,
} from "next";
import Image from "next/image";
import Link from "next/link";
import { NextSeo } from "next-seo";
import tw, { styled, css } from "twin.macro";
import { groq } from "next-sanity";

import config from "next-seo.config";
import { getClient } from "@/lib/sanity.client";
import SanityImage from "@/components/shared/sanity-image";
import Banner from "@/components/shared/page-banner";
import { ImageObj } from "@/utility/types";

//! ----------> TYPES <----------
type ProjectProps = {
  name: string;
  slug: {
    current: string;
  };
  thumbnail: ImageObj;
};

type Props = {
  projects: ProjectProps[];
};

//! ----------> STYLES <----------
const halftoneTop = css`
  &::after {
    content: '';
    ${tw`w-full h-full absolute`};
    background-image: url("/images/halftone/half-down.webp");
    background-repeat: no-repeat;
    background-position: top;
    background-size: cover;
    mix-blend-mode: color-dodge;
  }
`;

const halftoneBottom = css`
  &::after {
    content: '';
    ${tw`w-full h-full absolute`};
    background-image: url("/images/halftone/yellow.webp");
    background-repeat: no-repeat;
    background-position: top;
    background-size: cover;
    mix-blend-mode: hardlight;
  }
`;

const halftoneCircle = css`
  &::after {
    content: '';
    ${tw`w-full h-full absolute`};
    background-image: url("/images/halftone/outer-circle.webp");
    background-repeat: no-repeat;
    background-position: top;
    background-size: cover;
    mix-blend-mode: color-dodge;
  }
`;

export const Wrapper = styled.div`
  ${tw`mx-auto w-full max-w-[86rem]`};
  ${tw`flex flex-col space-y-8`};
  ${tw`md:(items-end)`};
  ${tw`pt-12 pb-16 md:(pt-16 pb-20 space-y-10) xl:(pb-36 space-y-14)`};
`;

const Gallery = styled.div`
  ${tw`grid grid-cols-1 gap-y-2.5`};
`;

const Featured = styled.div`
  ${tw`grid grid-cols-1 gap-y-2.5`};
  ${tw`md:(h-[16.6875rem])`};
  ${tw`md:(grid-cols-[46%, auto] gap-x-2.5)`};
  ${tw`xl:(h-[34.375rem])`};
`;

const Second = styled.div`
  ${tw`grid grid-cols-1 gap-y-2.5`};
  ${tw`md:(h-[9.0625rem])`};
  ${tw`md:(grid-cols-[31%, auto] gap-x-2.5)`};
  ${tw`xl:(h-[20.3125rem])`};
`;

const Remaining = styled.div`
  ${tw`grid grid-cols-1 gap-y-2.5`};
  ${tw`md:(grid-cols-[31%, 32%, auto] gap-x-2.5)`};
`;

const Panel = styled(Link)`
  ${tw`w-full h-full flex shadow-xl`};
  ${tw`relative`};
  ${tw`transition duration-300 ease-in-out`};
  ${tw`border-[3px] border-grey-600 overflow-hidden`};
  ${tw`md:(border-4)`};
  ${tw`hover:(border-white)`};
`;

//! ----------> COMPONENTS <----------
const WorkPage: NextPage<Props> = ({ projects }: Props) => {
  const featured = projects.slice(0, 2);
  const second = projects.slice(2, 4);
  const remaining = projects.slice(4);

  const bannerIcon = (
    <div tw="flex w-[3.75rem] h-[3.75rem] mb-2 md:(w-[4.5rem] h-[4.5rem]) xl:(w-[7rem] h-[7rem] mb-2)">
      <Image
        src="/images/bubbles/work.webp"
        width={322}
        height={325}
        loading="eager"
        alt=""
      />
    </div>
  );

  return (
    <>
      <NextSeo
        {...config}
        title="Projects"
        description=""
        canonical="https://ronniebee.dev/work"
      />
      <Wrapper>
        <Banner label="Work" icon={bannerIcon} />
        <Gallery>
          <Featured>
            {featured.map((project) => (
              <Panel
                key={project.slug.current}
                href={`/work/${project.slug.current}`}
                style={{ objectFit: `cover`, objectPosition: `center` }}
              >
                <SanityImage image={project.thumbnail} alt={project.name} />
              </Panel>
            ))}
          </Featured>

          <Second>
            {second.map((project, i) => (
              <Panel
                key={project.slug.current}
                href={`/work/${project.slug.current}`}
                style={{ objectFit: `cover`, objectPosition: `center` }}
                css={[i === 1 && halftoneTop]}
              >
                <SanityImage image={project.thumbnail} alt={project.name} lazy />
              </Panel>
            ))}
          </Second>

          <Remaining>
            {remaining.map((project, i) => (
              <Panel
                key={project.slug.current}
                href={`/work/${project.slug.current}`}
                style={{ objectFit: `cover`, objectPosition: `center` }}
                css={[i === 0 && halftoneBottom, i === 2 && halftoneCircle]}
              >
                <SanityImage image={project.thumbnail} alt={project.name} lazy />
              </Panel>
            ))}
          </Remaining>
        </Gallery>
      </Wrapper>
    </>
  );
};

export default WorkPage;

//! ----------> PROPS <----------
const query = groq`*[_type == "project"] | order(orderRank) {
  name,
  slug,
  thumbnail{
    asset->
  },
}`;

export const getStaticProps: GetStaticProps = async () => {
  const client = getClient();
  const projects: ProjectProps[] = await client.fetch(query);

  const props = {
    projects,
    revalidate: 60,
  };

  return { props };
};
