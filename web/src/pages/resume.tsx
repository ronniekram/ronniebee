import { NextPage } from "next";
import tw, { styled } from "twin.macro";

import { karasuma, mono } from "@/utility/fonts";
import resumeData from "@/utility/resume-data";
import ResumeHeader from "@/components/resume/heading";
import ResumeContact from "@/components/resume/contact";
import { TechnicalSkills, SoftSkills } from "@/components/resume/skills";
import Certifications from "@/components/resume/certifications";
import Experience from "@/components/resume/experience";
import ResumeEducation from "@/components/resume/education";

//! ----------> STYLES <----------
const Page = styled.main`
  ${tw`bg-white`};
  ${tw`w-[8.5in] h-[11in]`};
  ${tw`px-6 py-8`};
  ${tw`antialiased`};
`;

const Wrapper = styled.article`
  ${tw`w-full h-full flex flex-col space-y-2`};
  ${tw`border border-grey-500`};
`;

//! ----------> COMPONENTS <----------
const Resume: NextPage = () => {
  const { heading, contact, skills, certifications, experience, education } =
    resumeData;

  return (
    <>
      <Page className={`${karasuma.variable} ${mono.variable}`}>
        <Wrapper>
          <ResumeHeader {...heading} />
          <div tw="h-full grid grid-cols-[37.7%, auto]">
            <div tw="h-full">
              <ResumeContact items={contact} />
              <TechnicalSkills {...skills.technical} />
              <SoftSkills skills={skills.soft} />
              <Certifications certs={certifications} />
            </div>
            <div tw="border-l border-grey-500 h-full">
              <Experience jobs={experience} />
              <ResumeEducation education={education} />
            </div>
          </div>
        </Wrapper>
      </Page>
    </>
  );
};

export default Resume;
