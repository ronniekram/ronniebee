import type { NextPage } from "next";
import Image from "next/image";
import tw, { styled } from "twin.macro";

import Banner from "@/components/shared/page-banner";
import ContactForm from "@/components/contact/form";
import ContactInfo from "@/components/contact/info";

//! ----------> STYLES <----------
const Wrapper = styled.div`
  ${tw`mx-auto w-full max-w-[86rem]`};
  ${tw`flex flex-col space-y-8`};
  ${tw`md:(items-end)`};
  ${tw`py-12 md:(pt-20 pb-40 space-y-10) xl:(pt-28 pb-64 space-y-14) 2xl:(pt-32 pb-80)`};
`;

const Content = styled.div`
  ${tw`grid grid-cols-1 gap-y-6`};
  ${tw`md:(w-[92%] gap-y-12) lg:(w-full)`};
  ${tw`lg:(gap-y-0 gap-x-8 grid-cols-[43%, auto])`};
  ${tw`xl:(gap-x-14)`};
`;

//! ----------> COMPONENTS <----------
const ContactPage: NextPage = () => {
  const bannerIcon = (
    <div
      tw="flex w-[5.625rem] h-[3.75rem] mb-4 md:(w-[6.75rem] h-[4.5rem]) xl:(w-[10.5rem] h-[7rem] mb-9)"
    >
      <Image
        src="/images/bubbles/contact.png"
        width={487}
        height={325}
        alt="Comic style speech bubble"
        loading="eager"
      />
    </div>
  );

  return (
    <Wrapper>
      <Banner label="Contact" icon={bannerIcon} />
      <Content>
        <div>
          <ContactInfo />
        </div>
        <ContactForm />
      </Content>
    </Wrapper>
  );
};

export default ContactPage;