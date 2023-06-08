import tw, { styled } from "twin.macro";

//! ----------> TYPES <----------
type Props = {
  label: string;
  icon?: JSX.Element;
};

//! ----------> STYLES <----------
const Wrapper = styled.div`
  ${tw`w-full bg-yellow-600 h-[2.5rem] md:(h-[3.25rem]) xl:(h-[4.5rem]) `};
  ${tw`flex items-center justify-between`};
  ${tw`px-5 py-2.5 xl:(px-10 py-2.5)`};
  ${tw`font-display font-bold`};
  ${tw`text-grey-600 text-xl md:(text-2xl) lg:(text-[28px] leading-[36px]) xl:(text-3xl)`};
`;

//! ----------> COMPONENTS <----------
const Banner = ({ label, icon }: Props) => {
  return (
    <Wrapper>
      <h1>{label}</h1>
      {icon}
    </Wrapper>
  );
};

export default Banner;
