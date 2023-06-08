import tw, { styled } from "twin.macro";

const Container = styled.div`
  ${tw`w-full`};
  ${tw`border-[3.5px] border-grey-600`};
  ${tw`px-6 py-8`};
  ${tw`drop-shadow-sm`};
`;

export const Cream = styled(Container)`
  ${tw`bg-white text-grey-600`};
  ${tw`pt-6 pb-12 md:(pt-8) lg:(pt-12 pb-16)`};

  h2 {
    ${tw`text-lg tracking-[0.75px] md:(text-[22px]) lg:(text-2xl) 2xl:(text-[28px] leading-[36px])`};
    ${tw`font-display font-bold`};
  }

  li {
    ${tw`text-xs font-sans md:(text-sm) xl:(text-base font-medium)`};
  }

  p {
    ${tw`font-sans text-sm md:(text-base)  lg:(text-lg) xl:(font-medium) 2xl:(text-xl)`};
  }
`;

export const Red = styled(Container)`
  ${tw`font-sans text-white text-sm md:(text-lg) lg:(text-xl) xl:(font-medium)`};
  ${tw`md:(px-10 pt-10) xl:(px-6)`};
  background: url("/images/halftone/teal.png"), #A63838;
  background-position: center;
  background-repeat: no-repeat;
  background-blend-mode: multiply;
`;

export const Teal = styled(Container)`
  ${tw`h-full overflow-hidden`};
  ${tw`text-white font-display font-bold tracking-[0.75px]`};
  background: url("/images/halftone/outer-circle.png"), #40718C;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-blend-mode: multiply;
  background-opacity: 70%;

  h2 {
    ${tw`text-xl lg:(text-2xl) xl:(text-[28px] leading-[36px])`};
  }

  h3 {
    ${tw`text-base md:(text-lg) lg:(text-xl) xl:(text-2xl)`};
  }
`;
