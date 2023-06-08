import Image from "next/image";
import tw, { styled } from "twin.macro";

import { karasuma } from "@/utility/fonts";

//! ----------> STYLES <----------
const Feet = styled.footer`
  ${tw`relative z-10 w-screen xl:(h-[16.9375rem])`};
  ${tw`px-[5.3%] md:(px-[5.2%]) 2xl:(px-0)`};
  ${tw`pt-6 pb-4 md:(pt-8 pb-3) xl:(pb-5)`};
  background: url("/images/halftone/teal.png"), #A63838;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-blend-mode: overlay;
  background-opacity: 50%;
  ${tw`antialiased text-xs text-white font-sans md:(text-sm) xl:(text-lg)`};
`;

//! ----------> COMPONENTS <----------
const Footer = () => {
  return (
    <Feet className={karasuma.variable}>
      <div tw="w-full max-w-[86rem] mx-auto">
        <div tw="w-full flex justify-end">
          <div tw="flex w-[8.9375rem] h-[6.25rem] md:(w-[13.375rem] h-[9.375rem]) xl:(w-[33.6875rem] h-[23.4375rem] mt-[-11.5rem])">
            <Image
              src="/images/logo.png"
              width={535}
              height={375}
              quality={100}
              alt=""
            />
          </div>
        </div>
        <div tw="flex items-center space-x-5 pt-4 md:(pt-0)">
          <p>ⓒ Ronnie Boniface {new Date().getFullYear()}</p>
          <p>
            <a href="mailto:me@ronniebee.dev">me@ronniebee.dev</a>
          </p>
        </div>
      </div>
    </Feet>
  );
};

export default Footer;
