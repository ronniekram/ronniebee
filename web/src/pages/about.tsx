import type { NextPage } from "next";
import Image from "next/image";
import tw, { styled } from "twin.macro";
import { useWindowSize } from "react-use";

import Banner from "@/components/shared/page-banner";
import copy from "@/components/about/copy";
import { Name, PersonalTop, PersonalBottom, Professional, Skills, SkillList, Lightning, More, End } from "@/components/about/sections";

//! ----------> STYLES <----------
const Wrapper = styled.section`
  ${tw`mx-auto w-full max-w-[86rem]`};
  ${tw`flex flex-col space-y-8`};
  ${tw`py-12 md:(pt-20 pb-40 space-y-10) xl:(pt-28 pb-64 space-y-10) 2xl:(pt-32 pb-72)`};
  ${tw`2xl:(pb-64)`};
`;

//! ----------> COMPONENTS <----------
const Large = () => {
  return (
    <>
      <div tw="grid gap-x-[8.5px] grid-cols-[30%, auto, 33%] min-h-[18.75rem]">
        <Name />
        <PersonalTop title={copy.personal.title} body={copy.personal.body} />
        <PersonalBottom body={copy.personal2.body} />
      </div>
      <div tw="grid gap-x-2 gap-y-2 grid-cols-[42.8%, auto]">
        <div tw="grid gap-x-2.5 gap-y-2 grid-cols-[30.9%, auto]">
          <Professional title={copy.professional.title} body={copy.professional.body} />
          <Lightning />
          <More title={copy.more.title} list={copy.more.list} />
        </div>
        <div tw="grid gap-x-2.5 gap-y-2 grid-cols-[57.6%, auto]">
          <Skills />
          <SkillList title={copy.hardSkills.title} list={copy.hardSkills.list} />
          <SkillList title={copy.softSkills.title} list={copy.softSkills.list} soft />
          <End />
        </div>
      </div>
    </>
  );
};

const Small = () => {
  return (
    <>
    <div tw="grid grid-cols-1 gap-y-1.5 md:(gap-y-0 gap-x-2 grid-cols-[43%, 55.5%] min-h-[18rem])">
      <Name />
      <PersonalTop title={copy.personal.title} body={copy.personal.body} />
    </div>

    <PersonalBottom body={copy.personal2.body} />
    <Professional title={copy.professional.title} body={copy.professional.body} />
    <Skills />
    <div tw="grid grid-cols-1 gap-y-1.5 md:(grid-cols-[46.5%, 52.5%] gap-y-0 gap-x-2) lg:(grid-cols-[56%, 43.5%])">
      <SkillList title={copy.hardSkills.title} list={copy.hardSkills.list} />
      <SkillList title={copy.softSkills.title} list={copy.softSkills.list} soft />
    </div>

    <div
      tw="grid gap-x-2 grid-cols-[27.5%, 70.25%] md:(grid-cols-[35%, 63.8%]) lg:(grid-cols-[30%, 68.6%])"
    >
      <Lightning />
      <More title={copy.more.title} list={copy.more.list} />
    </div>
    <End />
    </>
  );
};

const AboutPage: NextPage = () => {
  const { width } = useWindowSize();

  const bannerIcon = (
    <div tw="flex w-[3.75rem] h-[3.75rem] mb-4 md:(w-[4.5rem] h-[4.5rem]) xl:(w-[5.5rem] h-[5.5rem] mb-9)">
      <Image
        src="/images/bubbles/about.png"
        width={348}
        height={325}
        loading="eager"
        alt=""
      />
    </div>
  );

  return (
    <>
      <Wrapper>
        <Banner label="About" icon={bannerIcon} />
        <div tw="flex flex-col space-y-1.5 md:(space-y-2.5)">
          {width >= 1280 ? <Large /> : <Small />}
        </div>
      </Wrapper>
    </>
  );
};

export default AboutPage;
