import tw, { styled } from "twin.macro";

import { Education } from "@/utility/resume-data";
import { Heading } from "./experience";

//! ----------> STYLES <----------
const Body = styled.div`
  ${tw`w-full h-full px-5 pt-4 pb-6`};
  ${tw`font-mono text-grey-500`};
  ${tw`flex flex-col space-y-3`};
  ${tw`border-grey-500`};

  h3 {
    ${tw`text-xs leading-[normal]`};
    ${tw`font-bold uppercase`};
  }
`;

const ResumeEducation = ({ education }: { education: Education[] }) => {
  return (
    <section>
      <Heading tw="border-t-0">
        <h2>Education</h2>
      </Heading>
      <Body>
        {education.map((ed) => (
          <div key={ed.institute}>
            <div tw="w-full flex items-center justify-between mb-0.5">
              <h3>{ed.institute}</h3>
              <p tw="text-xs leading-[normal] font-bold uppercase">
                {ed.dates.start} - {ed.dates.end}
              </p>
            </div>
            <div
              tw="w-full flex items-center justify-between text-[0.625rem] text-grey-400 font-medium tracking-[0.5px]"
            >
              <p>
                {ed.degree.concentration}, {ed.degree.type}
              </p>
              <p>
                {ed.location}
              </p>
            </div>
          </div>
        ))}
      </Body>
    </section>
  );
};

export default ResumeEducation;
