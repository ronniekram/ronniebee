import tw, { styled } from "twin.macro";

//! ----------> TYPES <----------
type Props = JSX.IntrinsicElements[`button`] & {
  label: string | JSX.Element;
};

//! ----------> STYLES <----------
const Btn = styled.button`
  ${tw`transition duration-300 ease-in-out`};
  ${tw`rounded border-2 border-grey-600 xl:(border-4)`};
  ${tw`px-6 py-2 md:(px-8 py-2.5) xl:(px-14 py-3.5)`};
  ${tw`bg-red-500 text-white`};
  ${tw`font-display font-bold`};
  ${tw`tracking-[0.75px] text-sm md:(text-base) xl:(text-xl)`};
  ${tw`hover:(bg-red-600) focus:(bg-red-400)`};
`;

//! ----------> COMPONENTS <----------
const Button = ({ label, ...rest }: Props) => (
  <Btn {...rest}>
    {label}
  </Btn>
);

export default Button;
