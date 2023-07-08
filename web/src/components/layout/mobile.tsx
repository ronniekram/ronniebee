import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import tw, { styled } from "twin.macro";
import useMeasure from "react-use-measure";
import { FiLinkedin, FiGithub, FiMail } from "react-icons/fi";

import { anime } from "@/utility/fonts";

//! ----------> STYLES <----------
const Wrapper = styled.div`
  ${tw`w-screen h-[100dvh]`};
  ${tw`flex antialiased`};
  ${tw`md:(hidden)`};
`;

const Left = styled.div`
  ${tw`w-[29%] h-full`};
  ${tw`bg-grey-600/75`};
`;

const Right = styled.div`
  ${tw`w-[71%] h-full`};
  ${tw`bg-white font-display font-bold`};
  ${tw`text-grey-600 text-[28px]`};
  ${tw`flex flex-col justify-start space-y-24`};
  ${tw`px-8 pt-16 pb-24`};
  ${tw`border-l-[3px] border-grey-600`};
  ${tw`shadow-xl`};

  nav {
    ${tw`flex flex-col space-y-8`};
  }

  a {
    ${tw`transition duration-300 ease-in-out`};
    ${tw`text-right`};
    ${tw`hover:(text-teal-200)`};
  }
`;

//! ----------> COMPONENTS <----------
const Mobile = ({ setHeight }: { setHeight: (height: number) => void }) => {
  const [ref, bounds] = useMeasure();

  useEffect(() => {
    setHeight(bounds.height)
  }, [bounds, setHeight]);

  return (
    <Wrapper ref={ref} className={anime.variable}>
      <Left />
      <Right>
        <div>
          <nav>
            <Link href="/" prefetch={false}>Home</Link>
            <Link href="/about" prefetch={false}>About</Link>
            <Link href="/work" prefetch={false}>Work</Link>
            <Link href="/contact" prefetch={false}>Contact</Link>
          </nav>

          <div tw="flex items-end justify-end space-x-4 pt-10">
            <a href="https://github.com/ronniekram" target="_blank" rel="noreferrer" aria-label="Github">
              <FiGithub size={32} strokeWidth={1.5} />
            </a>
            <a href="https://linkedin.com/in/arynn-boniface" target="_blank" rel="noreferrer" aria-label="Linkedin">
              <FiLinkedin size={32} strokeWidth={1.5} />
            </a>
            <a href="mailto:me@ronniebee.dev" target="_blank" rel="noreferrer" aria-label="Email">
              <FiMail size={32} strokeWidth={1.5} />
            </a>
          </div>
        </div>

        <Link href="/" prefetch={false} aria-label="Home" tw="flex self-end w-[9.5rem]">
          <Image
            src="/images/rb.png"
            width={449}
            height={291}
            quality={100}
            alt=""
          />
        </Link>
      </Right>
    </Wrapper>
  );
};

export default Mobile;
