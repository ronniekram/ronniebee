import tw, { styled } from "twin.macro";
import { FiX } from "react-icons/fi";

import { Heading } from "@/utility/resume-data";

//! ----------> STYLES <----------
const Container = tw.header`w-full tracking-[0.5px]`;

const Bar = styled.div`
  ${tw`flex justify-between items-center`};
  ${tw`space-x-2.5 px-2 py-2`};
  ${tw`bg-grey-500`};
  ${tw`font-mono font-bold uppercase`};
  ${tw`text-white text-[10px]`};
`;

const Text = styled.div`
  ${tw`w-full mx-auto px-5 py-3 mt-2`};
  ${tw`grid grid-cols-[auto, 46%]`};
  ${tw`font-sans text-grey-500`};

  h1 {
    ${tw`text-3xl font-bold`};
  }

  h2 {
    ${tw`text-[0.8125rem] font-medium`};
  }

  p {
    ${tw`text-xs leading-[1.125rem]`};
    ${tw`tracking-[unset]`};
  }
`;

//! ----------> COMPONENTS <----------
const ResumeHeader = ({ name, title, summary }: Heading) => {
  return (
    <Container>
      <Bar>
        <div tw="w-full text-center">
          <p>Ronnie-boniface-resume.pdf</p>
        </div>
        <div tw="w-[1.125rem] h-[1.125rem] flex items-center justify-center border-white border rounded-[1px]">
          <FiX size={16} strokeWidth={1} />
        </div>
      </Bar>

      <Text>
        <div tw="flex flex-col">
          <h1>{name}</h1>
          <h2>{title}</h2>
        </div>
        <p>{summary}</p>
      </Text>
    </Container>
  );
};

export default ResumeHeader;
