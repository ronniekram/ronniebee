import { useState } from "react";
import Image from "next/image";
import tw, { styled } from "twin.macro";
import { useForm } from "react-hook-form";
import axios from "axios";

import Button from "../shared/button";
import { Input, Text } from "./input";
import LoadingDots from "../shared/loading";

//! ----------> TYPES <----------
export type FormValues = {
  name: string;
  email: string;
  message: string;
};

//! ----------> STYLES <----------
const Form = styled.form`
  ${tw`w-full bg-yellow-600 text-grey-600`};
  ${tw`rounded-xl`};
  ${tw`shadow-lg border-[3px] border-grey-600 xl:(border-4)`};
  ${tw`flex flex-col space-y-6 xl:(space-y-8)`};
  ${tw`px-5 pt-14 pb-32 md:(px-8 pb-36) xl:(px-12 pt-20 pb-32) 2xl:(px-14 pb-36)`};

  h2 {
    ${tw`font-display font-bold text-2xl xl:(text-3xl)`};
    ${tw`text-center`};
  }
`;

const Fields = styled.div`
  ${tw`flex flex-col space-y-6 md:(space-y-4) xl:(space-y-7)`};
`;

//! ----------> COMPONENTS <----------
const ContactForm = () => {
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [isSent, setIsSent] = useState<boolean>(false);
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    setSubmitting(true);
    try {
      await axios.post(`/api/send-email`, { ...data });
      setSubmitting(false);
      setIsSent(true);
    } catch (error) {
      setSubmitting(false);
      console.error(error);
    }
  };

  return (
    <div tw="w-full">
      <Form onSubmit={handleSubmit(onSubmit)}>
        {!isSent ? (
          <>
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
                error={errors?.name?.message}
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
                error={errors?.email?.message}
              />
              <Text
                label="Message*"
                placeholder="Wanna see a picture of my dog?"
                register={{
                  ...register(`message`, {
                    required: `Required`,
                  })
                }}
                error={errors?.message?.message}
              />
            </Fields>
            <div tw="w-full flex justify-end">
              <Button label={submitting ? <LoadingDots /> : `Shoot!`} type="submit" />
            </div>
          </>
        ) : (
          <h2>Thanks! I'll talk to you soon!</h2>
        )}
      </Form>
      <div
        tw="w-[15.1875rem] h-[12.5rem] -mt-24 md:(w-[18.75rem] h-[15.5rem] -mt-36 -ml-20) xl:(w-[22.8125rem] h-[18.75rem] -mt-44) 2xl:(w-[28.125rem] h-[23.1875rem] -mt-56)"
      >
          <Image
            src="/images/bubbles/hello.webp"
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
