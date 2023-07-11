import tw, { styled } from "twin.macro";

import { Technical } from "@/utility/resume-data";
import { Heading } from "./contact";

//! ----------> STYLES <----------
const SoftUL = styled.ul`
  ${tw`w-full px-4 py-4`};
  ${tw`font-mono font-medium uppercase`};
  ${tw`text-xs leading-[1.15rem] tracking-[0.5px]`};
  ${tw`flex flex-col space-y-[0.3125rem]`};
`;

const TechUL = styled.ul`
  ${tw`w-full px-4 py-4`};
  ${tw`font-mono font-medium uppercase`};
  ${tw`text-xs leading-[1.15rem] tracking-[0.5px]`};
  ${tw`grid grid-cols-2`};

  div {
    ${tw`flex flex-col space-y-[0.3125rem]`};
  }
`;

//! ----------> COMPONENTS <----------
export const TechnicalSkills = ({ front, back }: Technical) => {
  return (
    <section>
      <Heading>
        <h3>Technical Skills</h3>
      </Heading>
      <TechUL>
        <div>
          {back.map((x, i) => (
            <li key={`back-${i}`}>{x}</li>
          ))}
        </div>
        <div>
          {front.map((x, i) => (
            <li key={`front-${i}`}>{x}</li>
          ))}
        </div>
      </TechUL>
    </section>
  );
};

export const SoftSkills = ({ skills }: { skills: string[] }) => {
  return (
    <section>
      <Heading>
        <h3>Soft Skills</h3>
      </Heading>
      <SoftUL>
        {skills.map((skill, i) => (
          <li key={`soft-${i}`}>{skill}</li>
        ))}
      </SoftUL>
    </section>
  );
};
