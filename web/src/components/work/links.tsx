import tw, { styled } from "twin.macro";
import { FiGithub, FiExternalLink } from "react-icons/fi";

//! ----------> TYPES <----------
type Props = {
  live: string;
  github?: string;
};

//! ----------> STYLES <----------
const Link = styled.a`
  ${tw`font-medium font-sans`};
  ${tw`underline`};
`;

const Container = styled.div`
  ${tw`transition duration-300 ease-in-out`};
  ${tw`flex items-center space-x-1 md:(space-x-1.5)`};
  ${tw`text-grey-600`};
  ${tw`text-sm md:(text-base) xl:(text-xl)`};
  ${tw`hover:(text-red-500)`};
`;

const Wrapper = styled.div`
  ${tw`flex items-center`};
  ${tw`space-x-3 md:(space-x-4) xl:(space-x-5)`};
`;

//! ----------> COMPONENTS <----------
const Links = ({ live, github }: Props) => {
  return (
    <Wrapper>
      <Container>
        <FiExternalLink />
        <Link href={live} target="_blank" rel="noreferrer">
          Live Site
        </Link>
      </Container>
      {github && (
        <Container>
          <FiGithub />
          <Link href={github} target="_blank" rel="noreferrer">
            Github
          </Link>
        </Container>
      )}
    </Wrapper>
  );
};

export default Links;
