import Image from "next/image";
import Link from "next/link";
import tw, { styled } from "twin.macro";

import { karasuma } from "@/utility/fonts";

//! ----------> STYLES <----------
const Logo = styled(Link)`
  ${tw`flex`};
  ${tw`w-[6.6875rem] h-[4.6875rem]`};
  ${tw`md:(w-[8.9375rem] h-[6.25rem])`};
  ${tw`xl:(w-[15.625rem] h-[10.9375rem])`};
`;

const Feet = styled.footer`
  ${tw`w-screen bg-white`};
  ${tw`border-t-[2px] border-grey-600 md:(border-t-[3px])`};
  background: url("/images/halftone/grey.png"), #FFFDF5;
  background-position: center;
  background-repeat: no-repeat;
  background-blend-mode: difference;
`;

const Wrapper = styled.div`
  ${tw`w-full max-w-[86rem] mx-auto`};
  ${tw`px-[5.3%] md:(px-[5.2%]) 2xl:(px-0)`};
  ${tw`py-4 md:(py-5) xl:(py-8)`};
  ${tw`flex flex-col space-y-10`};
  ${tw`md:(flex-row justify-between items-end)`};
  ${tw`font-sans font-medium text-grey-600 text-xs md:(text-sm) xl:(text-lg)`};
`;

//! ----------> COMPONENTS <----------
const Footer = () => {
  return (
    <Feet className={karasuma.variable}>
      <Wrapper>
        <Logo href="/" aria-label="Home page">
          <Image
            src="/images/logo.png"
            width={535}
            height={375}
            quality={100}
            alt=""
          />
        </Logo>

        <div tw="flex items-center space-x-4">
          <div tw="flex items-center space-x-5 pt-4 md:(pt-0)">
            <p>ⓒ Ronnie Boniface {new Date().getFullYear()}</p>
            <p>
              <a href="mailto:me@ronniebee.dev">me@ronniebee.dev</a>
            </p>
          </div>
        </div>
      </Wrapper>
    </Feet>
  );
};

export default Footer;
