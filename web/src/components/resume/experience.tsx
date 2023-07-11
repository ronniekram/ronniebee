import tw, { styled } from "twin.macro";

import { WorkExperience } from "@/utility/resume-data";

//! ----------> STYLES <----------
export const Heading = styled.div`
  ${tw`w-full`};
  ${tw`text-grey-500`};
  ${tw`font-mono font-bold uppercase`};
  ${tw`tracking-[0.75px]`};
  ${tw`px-4 py-1.5`};
  ${tw`h-[2.25rem]`};
  ${tw`border-y border-grey-500`};
`;

const Body = styled.div`
  ${tw`w-full px-5 py-4`};
  ${tw`font-mono text-grey-500`};
  ${tw`flex flex-col space-y-2`};
  ${tw`border-grey-500 border-b`};

  h3 {
    ${tw`text-xs leading-[normal]`};
    ${tw`font-bold uppercase`};
  }
`;

const UL = styled.ul`
  ${tw`w-full list-inside list-disc`};

  ${tw`font-sans`};
  ${tw`ml-2`};
  ${tw`text-[0.625rem] tracking-[0.25px]`};
  ${tw`flex flex-col space-y-1`};
`;

//! ----------> COMPONENTS <----------
export const Job = ({ position }: { position: WorkExperience }) => {
  const { title, company, location, dates, responsibilities } = position;
  return (
    <Body>
      <div>
        <div tw="w-full flex items-center justify-between mb-0.5">
          <h3>{title}</h3>
          <p tw="text-xs leading-[normal] font-bold uppercase">
            {dates.start} - {dates.end}
          </p>
        </div>
        <p tw="text-[0.625rem] text-grey-400 font-medium tracking-[0.5px]">
          {company} / {location}
        </p>
      </div>
      <UL>
        {responsibilities.map((r, i) => (
          <li key={`${title}-${i}`}>
            {r}
          </li>
        ))}
      </UL>
    </Body>
  );
};

const Experience = ({ jobs }: { jobs: WorkExperience[] }) => {
  return (
    <section>
      <Heading>
        <h2>
          Work Experience
        </h2>
      </Heading>
      {jobs.map((job, i) => (
        <Job position={job} key={`job-${i}`} />
      ))}
    </section>
  )
};

export default Experience;
