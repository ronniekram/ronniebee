import type {
  NextPage,
  GetStaticProps,
} from "next";
import Image from "next/image";
import type { ImageAsset } from "sanity";
import { useEffect } from "react";
import tw, { styled } from "twin.macro";
import { groq } from "next-sanity";

import { getClient } from "@/lib/sanity.client";
import Banner from "@/components/shared/page-banner";

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
export const Wrapper = styled.div`
  ${tw`mx-auto w-full max-w-[86rem]`};
  ${tw`flex flex-col space-y-8`};
  ${tw`md:(items-end)`};
  ${tw`py-12 md:(pt-20 pb-40 space-y-10) xl:(pt-28 pb-64 space-y-14) 2xl:(pt-28 pb-80)`};
`;

//! ----------> COMPONENTS <----------
const WorkPage: NextPage<Props> = ({ projects }: Props) => {
  const bannerIcon = (
    <div tw="flex w-[3.75rem] h-[3.75rem] mb-4 md:(w-[4.5rem] h-[4.5rem]) xl:(w-[7rem] h-[7rem] mb-9)">
      <Image
        src="/images/bubbles/work.png"
        width={322}
        height={325}
        loading="eager"
        alt=""
      />
    </div>
  );

  return (
    <Wrapper>
      <Banner label="Work" icon={bannerIcon} />

    </Wrapper>
  );
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
