import tw, { styled } from "twin.macro";
import format from "date-fns/format";
import { FiDownload } from "react-icons/fi";

//! ----------> STYLES <----------
const Button = styled.a`
  ${tw`transition duration-300 ease-in-out`};
  ${tw`w-[fit-content] flex items-center`};
  ${tw`rounded border-2 border-grey-600 xl:(border-4)`};
  ${tw`px-6 py-2 md:(px-8 py-2.5) xl:(px-14)`};
  ${tw`bg-red-500 text-white`};
  ${tw`font-display font-bold`};
  ${tw`tracking-[0.75px] text-sm md:(text-base) xl:(text-xl)`};
  ${tw`hover:(bg-red-600) focus:(bg-red-400)`};
`;

//! ----------> COMPONENTS <----------
const ResumeDownload = () => {
  return (
    <Button
      href="/api/resume"
      download={`ronnie-boniface-resume-${format(new Date(), `M-dd-yy`)}.pdf`}
    >
      <FiDownload
        strokeWidth={1.75}
        tw="text-xl mr-2 md:(text-2xl mr-2.5) xl:(text-3xl mr-3)"
      />
      Resume
    </Button>
  );
};

export default ResumeDownload;
