import tw, { styled } from "twin.macro";
import { PortableText } from "@portabletext/react";

import type { Project } from "@/utility/types";
import Links from "./links";

//! ----------> TYPES <----------
type Props = Omit<Project, `_type` | `name` | `slug` | `thumbnail` | `media` | `metaTitle` | `metaDesc`>;

//! ----------> STYLES <----------
const Container = styled.section`
  ${tw`bg-white text-grey-600 font-sans`};
  ${tw`rounded-2xl border-[3px] border-grey-600`};
  ${tw`px-6 pt-7 pb-9 md:(px-10 pt-9 pb-16) xl:(px-14 pt-14 pb-24)`};
  ${tw`grid grid-cols-1 gap-y-5`};
  ${tw`md:(grid-cols-[auto, 57%] gap-x-5 gap-y-0)`};
  ${tw`xl:(grid-cols-1 gap-y-7 gap-x-0)`};
`;

const H2 = tw.h2`font-bold text-xl md:(text-2xl) lg:(text-3xl) xl:(text-[2.5rem] leading-[3.25rem])`;

const H3 = tw.h3`font-bold text-sm md:(text-base) lg:(text-lg) xl:(text-2xl)`;

const Credit = styled.p`
  ${tw`text-xs md:(text-sm) lg:(text-base) xl:(text-lg)`};
  span {
    ${tw`text-red-500 font-bold`};
  }
`;

//! ----------> COMPONENTS <----------
const ProjectDetail = ({
  details,
  headline,
  stack,
  client,
  creative,
  devs,
  github,
  live
}: Props) => {
  return (
    <Container>
      <div>
        <H2>{headline}</H2>
        <H3>{stack.join(`, `)}</H3>

        <div tw="flex flex-col space-y-2">
          {client && (
            <Credit><span>Client:</span> {client}</Credit>
          )}
          {creative && (
            <Credit><span>Creative:</span> {creative.join(`, `)}</Credit>
          )}
          {devs && (
            <Credit><span>Client:</span> {devs.join(`, `)}</Credit>
          )}
        </div>

        <Links live={live} github={github} />
      </div>
      <div
        tw="flex flex-col space-y-2.5 text-xs md:(text-sm) lg:(text-base) xl:(text-lg)"
      >
        <PortableText value={details} />
      </div>
    </Container>
  );
};

export default ProjectDetail;
