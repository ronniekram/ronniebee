import Image from "next/image";
import tw, { styled } from "twin.macro";

import { Cream, Red, Teal } from "./containers";

//! ----------> TYPES <----------
type WithBody = {
  title: string;
  body: string[];
};

type WithList = {
  title: string;
  list: string[];
  soft?: boolean;
};

//! ----------> STYLES <----------
const UL = styled.ul(({ soft }: { soft?: boolean }) => [
  tw`grid gap-x-1.5 gap-y-1`,
  tw`md:(gap-x-1.5 gap-y-2.5) lg:(gap-x-4) xl:(gap-x-2.5 gap-y-2.5)`,
  soft ? tw`grid-cols-2 xl:(grid-cols-1)` : tw`grid-cols-2 lg:(grid-cols-3) xl:(grid-cols-2)`,
]);

//! ----------> COMPONENTS <----------
export const Name = () => (
  <Teal
    tw="flex flex-col items-center justify-center space-y-1 py-14 text-center md:(px-4 py-12)"
  >
    <h2>Ronnie Boniface</h2>
    <h3>She/Her</h3>
  </Teal>
);

export const PersonalTop = ({ title, body }: WithBody) => (
  <Cream tw="relative overflow-hidden md:(pt-10 px-7) lg:(px-10) xl:(px-9 pt-14 pb-20)">
    <div
      tw="absolute z-0 flex -top-4 left-[-30%] mix-blend-color-burn md:(top-4 left-[-40%]) lg:(left-[-30%]) xl:(top-0 left-[-15%])"
    >
      <Image
        src="/images/halftone/circle.webp"
        width={490}
        height={448}
        alt=""
        loading="lazy"
      />
    </div>
    <div
      tw="w-full h-full relative z-10 flex flex-col space-y-4 md:(space-y-5) xl:(space-y-6)"
    >
      <h2>{title}</h2>
      {body.map((p, i) => (
        <p
          key={`personal-1-${i}`}
        >
          {p}
        </p>
      ))}
    </div>
  </Cream>
);

export const PersonalBottom = ({ body }: { body: string[] }) => (
  <Red
    tw="min-h-[18.1875rem] h-full flex flex-col justify-between lg:(px-14) xl:(px-10)"
    css={[`background-size: cover;`]}
  >
    <div>
      {body.map((p, i) => (
        <p
          key={`personal-2-${i}`}
        >
          {p}
        </p>
      ))}
    </div>

    <div tw="w-full flex justify-end">
      <Image
        src="/images/bubbles/star.webp"
        width={75}
        height={72}
        alt=""
        loading="lazy"
      />
    </div>
  </Red>
);

export const Professional = ({ title, body }: WithBody) => (
  <Cream tw="flex flex-col space-y-4 md:(pt-10 px-10 space-y-5) lg:(px-14) xl:(col-span-2 px-11 py-14 space-y-6)">
    <h2>{title}</h2>
    {body.map((p, i) => (
      <p
        key={`pro-${i}`}
      >
        {p}
      </p>
    ))}
  </Cream>
);

export const Skills = () => (
  <Teal tw="py-0 flex justify-center h-[9.9375rem] md:(h-[13.75rem]) lg:(h-[15.75rem]) xl:(col-span-2 h-[14.5rem])" css={[`background-size: 100%, auto !important;`]}>
    <div
      tw="w-[15.625rem] h-[13.125rem] md:(w-[20.5625rem] h-[17.1875rem] -mt-4) lg:(w-[24.3125rem] h-[20.3125rem])"
    >
      <Image
        src="/images/bubbles/skills.webp"
        width={389}
        height={325}
        alt="Comic style speech bubble with the word 'Skills'"
        loading="lazy"
      />
    </div>
  </Teal>
);

export const SkillList = ({ title, list, soft }: WithList) => (
  <Cream tw="relative overflow-hidden md:(pt-10 pb-14) lg:(px-[34px]) xl:(px-8)">
    {soft && (
      <div
        tw="absolute z-0 flex top-4 right-[-60%] mix-blend-color-burn md:(-top-4) lg:(right-[-35%]) xl:(w-[200%] right-[-55%])"
      >
        <Image
          src="/images/halftone/circle.webp"
          width={490}
          height={448}
          alt=""
          loading="lazy"
        />
      </div>
    )}
    <div
      tw="w-full h-full relative z-10 flex flex-col space-y-2.5 md:(space-y-4) xl:(space-y-6)"
    >
      <h2>{title}</h2>
      <UL soft={soft}>
        {list.map((item) => (
          <li
            key={item}
            tw="font-sans text-base xl:(text-xl)"
          >
            {item}
          </li>
        ))}
      </UL>
    </div>
  </Cream>
);

export const Lightning = () => (
  <Red
    tw="flex items-center justify-center px-3 md:(px-4 py-12) xl:(py-0)"
    css={[`background-size: cover;`]}
  >
    <div
      tw="w-[97%] md:(w-[78.2%]) lg:(w-[65%]) xl:(w-[97%])"
    >
      <Image
        src="/images/bubbles/lightning.webp"
        width={236}
        height={170}
        alt="Yellow comic style lightning bolt"
        loading="lazy"
      />
    </div>
  </Red>
);

export const More = ({ title, list }: WithList) => (
  <Cream tw="flex flex-col h-full space-y-1 py-4 px-4 md:(space-y-3 px-8) lg:(px-10 pt-9! pb-14) xl:(px-8)">
    <h2 tw="xl:(text-2xl!)">{title}</h2>
    <ul tw="flex flex-col font-sans">
      {list.map((item) => (
        <li
          tw="text-xs md:(text-base!)"
          key={item}
        >
          {item}
        </li>
      ))}
    </ul>
  </Cream>
);

export const End = () => (
  <Red
    tw="flex h-[6.25rem] md:(h-[8.8125rem]) xl:(h-[13.0625rem] col-span-2)"
    css={[`background-size: 100%;`]}
  />
);
