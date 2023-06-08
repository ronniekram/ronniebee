import type { NextPage } from "next";
import Image from "next/image";
import tw, { styled } from "twin.macro";

import Banner from "@/components/shared/page-banner";

//! ----------> STYLES <----------
const Wrapper = styled.section`
  ${tw`mx-auto w-full max-w-[86rem]`};
  ${tw`flex flex-col space-y-8`};
  ${tw`py-12`};
`;

//! ----------> COMPONENTS <----------
const AboutPage = () => {
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
      </Wrapper>
    </>
  );
};

export default AboutPage;
