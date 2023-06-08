import tw, { styled } from "twin.macro";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

//! ----------> STYLES <----------
const Container = styled.section`
  ${tw`w-full bg-white rounded-xl`};
  ${tw`md:(place-self-end)`};
  ${tw`border-[3px] border-grey-600 xl:(border-4)`};
  ${tw`font-display tracking-[0.75px] text-grey-600`};
  ${tw`px-5 pt-7 pb-10 md:(px-8 pt-8 pb-12) xl:(px-10 pt-14 pb-16) 2xl:(px-14)`};

  h2 {
    ${tw`font-bold text-lg lg:(text-2xl) xl:(text-[28px]) 2xl:(text-3xl)`};
    ${tw`mb-4 xl:(mb-8)`};
  }
`;

const Wrapper = styled.div`
  ${tw`grid grid-cols-1 gap-y-8`};
  ${tw`md:(grid-cols-2 gap-y-0 gap-x-8)`};
  ${tw`lg:(grid-cols-1 gap-x-0 gap-y-12)`};

  ul {
    ${tw`flex flex-col space-y-2 xl:(space-y-5) 2xl:(space-y-4)`};
    ${tw`text-xs tracking-[0.5px] lg:(text-base) xl:(text-lg) 2xl:(text-xl)`};
    ${tw`list-disc list-outside`};
    ${tw`pl-3`};
  }
`;

const Socials = styled.div`
  ${tw`flex flex-col space-y-2`};
  ${tw`text-base lg:(text-lg) xl:(text-2xl space-y-6) 2xl:(text-[30px] leading-[36px] space-y-8)`};

  a {
    ${tw`transition duration-300 ease-in-out`};
    ${tw`hover:(text-red-500)`};
  }
`;

//! ----------> COMPONENTS <----------
const ContactInfo = () => {
  return (
    <Container>
      <h2>If you are:</h2>
      <Wrapper>
        <ul>
          <li>Interested in collaborating,</li>
          <li>looking for someone to build a cool new website for you,</li>
          <li>just looking to say "Hello!"</li>
        </ul>

        <Socials>
          <a
            href="mailto:me@ronniebee.dev"
            tw="flex items-center"
          >
            <span tw="text-[28px] mr-2.5 lg:(text-3xl mr-3) xl:(text-[42px] mr-4) 2xl:(text-[46px])">
              <FiMail strokeWidth={1.75} />
            </span>
            me@ronniebee.dev
          </a>
          <a
            href="https://linkedin.com/in/arynn-boniface"
            target="_blank"
            rel="noreferrer"
            tw="flex items-center"
          >
            <span tw="text-[28px] mr-2.5 lg:(text-3xl mr-3) xl:(text-[42px] mr-4) 2xl:(text-[46px])">
              <FiLinkedin strokeWidth={1.75} />
            </span>
            /in/arynn-boniface
          </a>
          <a
            href="https://github.com/ronniekram"
            target="_blank"
            rel="noreferrer"
            tw="flex items-center"
          >
            <span tw="text-[28px] mr-2.5 lg:(text-3xl mr-3) xl:(text-[42px] mr-4) 2xl:(text-[46px])">
              <FiGithub strokeWidth={1.75} />
            </span>
            @ronniekram
          </a>
        </Socials>
      </Wrapper>
    </Container>
  );
};

export default ContactInfo;
