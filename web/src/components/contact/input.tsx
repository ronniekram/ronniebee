import tw, { styled } from "twin.macro";

//! ----------> TYPES <----------
type Props = {
  label: string;
  register: any;
};

type FieldProps = JSX.IntrinsicElements[`input`] & Props;

type AreaProps = JSX.IntrinsicElements[`textarea`] & Props;

//! ----------> STYLES <----------
const Field = styled.input`
  ${tw`w-full rounded border-[1.5px] border-grey-600 bg-white`};
  ${tw`px-3 py-2 md:(px-4 py-3)`};
  ${tw`font-sans font-medium text-grey-600 text-sm md:(text-base) xl:(text-lg)`};
  ${tw`placeholder:(text-grey-600/50)`};
  ${tw`focus:(outline-2 outline-red-500)`};
`;

const TextArea = styled.textarea`
  ${tw`w-full rounded border-[1.5px] border-grey-600 bg-white`};
  ${tw`px-3 py-2 md:(px-4 py-3)`};
  ${tw`h-[9.375rem] xl:(h-[13rem])`};
  ${tw`font-sans font-medium text-grey-600 text-sm md:(text-base) xl:(text-lg)`};
  ${tw`placeholder:(text-grey-600/50)`};
  ${tw`focus:(outline-2 outline-red-500)`};
`;

const Label = styled.label`
  ${tw`w-full`};
  ${tw`font-display font-bold tracking-[0.75px]`};
  ${tw`text-grey-600 text-sm xl:(text-lg) 2xl:(text-xl)`};
`;

//! ----------> COMPONENTS <----------
export const Input = ({ label, register, ...rest }: FieldProps) => (
  <Label>
    <p tw="px-3 mb-1 md:(px-4) 2xl:(mb-1.5)">{label}</p>
    <Field {...rest} {...register} />
  </Label>
);

export const Text = ({ label, register, ...rest }: AreaProps) => (
  <Label>
    <p tw="px-3 mb-1 md:(px-4) 2xl:(mb-1.5)">{label}</p>
    <TextArea {...rest} {...register} />
  </Label>
);
