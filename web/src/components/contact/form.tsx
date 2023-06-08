import Image from "next/image";
import tw, { styled } from "twin.macro";
import { useForm } from "react-hook-form";

import Button from "../shared/button";
import { Input, Text } from "./input";

//! ----------> TYPES <----------
type FormValues = {
  name: string;
  email: string;
  message: string;
};

//! ----------> STYLES <----------
const Form = styled.form`
  ${tw`w-full bg-yellow-600 text-grey-600`};
  ${tw`rounded-xl`};
  ${tw`drop-shadow-lg border-[3px] border-grey-600 xl:(border-4)`};
  ${tw`flex flex-col space-y-6 xl:(space-y-10)`};
  ${tw`px-5 pt-14 pb-32 md:(px-8 pb-36) xl:(px-12 pt-20 pb-52) 2xl:(pt-24 pb-60)`};

  h2 {
    ${tw`font-display font-bold text-2xl xl:(text-4xl) 2xl:(text-[40px])`};
    ${tw`text-center`};
  }
`;

const Fields = styled.div`
  ${tw`flex flex-col space-y-6 md:(space-y-4) xl:(space-y-7)`};
`;

//! ----------> COMPONENTS <----------
const ContactForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.table(data);
  };

  return (
    <div tw="w-full">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h2>Drop me a line!</h2>
        <Fields>
          <Input
            type="text"
            label="Name*"
            placeholder="Ronnie Bee"
            register={{
              ...register(`name`, {
                required: `Required`,
              })
            }}
          />
          <Input
            type="email"
            label="Email*"
            placeholder="me@ronniebee.dev"
            register={{
              ...register(`email`, {
                required: `Required`,
              })
            }}
          />
          <Text
            label="Message*"
            placeholder="Wanna see a picture of my dog?"
            register={{
              ...register(`message`, {
                required: `Required`,
              })
            }}
          />
        </Fields>
        <div tw="w-full flex justify-end">
          <Button label="Shoot!" type="submit" />
        </div>
      </Form>
      <div
        tw="w-[15.1875rem] h-[12.5rem] -mt-24 md:(w-[18.75rem] h-[15.5rem] -mt-36 -ml-20) xl:(w-[22.8125rem] h-[18.75rem] -mt-44) 2xl:(w-[28.125rem] h-[23.1875rem] -mt-56)"
      >
          <Image
            src="/images/bubbles/hello.png"
            width={550}
            height={453}
            alt="Comic style speech bubble with the words 'Say hello!"
            loading="lazy"
          />
      </div>
    </div>
  );
};

export default ContactForm;
