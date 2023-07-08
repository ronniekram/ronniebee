import tw, { styled } from "twin.macro";

//! ----------> TYPES <----------
type Props = {
  label: string;
  register: any;
  error?: string;
};

type FieldProps = JSX.IntrinsicElements[`input`] & Props;

type AreaProps = JSX.IntrinsicElements[`textarea`] & Props;

//! ----------> STYLES <----------
const Field = styled.input`
  ${tw`w-full rounded border-[1.5px] border-grey-600 bg-white`};
  ${tw`px-3 py-2 md:(px-4)`};
  ${tw`font-sans font-medium text-grey-600 text-sm md:(text-base) xl:(text-lg)`};
  ${tw`placeholder:(text-grey-600/50)`};
  ${tw`focus:(outline-2 outline-red-500)`};
`;

const TextArea = styled.textarea`
  ${tw`w-full rounded border-[1.5px] border-grey-600 bg-white`};
  ${tw`px-3 py-2 md:(px-4)`};
  ${tw`h-[9.375rem] xl:(h-[13rem])`};
  ${tw`font-sans font-medium text-grey-600 text-sm md:(text-base) xl:(text-lg)`};
  ${tw`placeholder:(text-grey-600/50)`};
  ${tw`focus:(outline-2 outline-red-500)`};
`;

const Label = styled.label`
  ${tw`w-full`};
  ${tw`font-display tracking-[0.75px]`};
  ${tw`text-grey-600 text-sm xl:(text-lg) 2xl:(text-xl)`};
`;

//! ----------> COMPONENTS <----------
export const Input = ({ label, register, error, ...rest }: FieldProps) => (
  <Label>
    <div tw="flex items-center space-x-4 2xl:(mb-1)">
      <p tw="pl-3 mb-0.5 md:(pl-4)">{label}</p>
      <p tw="font-sans font-bold text-red-500 text-xs xl:(text-sm)">{error}</p>
    </div>
    <Field {...rest} {...register} />
  </Label>
);

export const Text = ({ label, register, error, ...rest }: AreaProps) => (
  <Label>
    <div tw="flex items-center space-x-4 2xl:(mb-1)">
      <p tw="pl-3 mb-0.5 md:(pl-4)">{label}</p>
      <p tw="font-sans font-bold text-red-500 text-xs xl:(text-sm)">{error}</p>
    </div>
    <TextArea {...rest} {...register} />
  </Label>
);
