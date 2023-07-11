import tw, { styled } from "twin.macro";

import { Certification } from "@/utility/resume-data";
import { Heading } from "./contact";

//! ----------> STYLES <----------
const Wrapper = styled.div`
  ${tw`w-full px-4 pt-5 pb-6`};
  ${tw`flex flex-col space-y-2`};
  ${tw`tracking-[0.5px]`};

  .title {
    ${tw`font-mono font-semi uppercase`};
    ${tw`text-xs text-grey-500 leading-[normal]`};
    ${tw`mb-0.5`};
  }
  .source {
    ${tw`font-mono font-normal text-grey-400`};
    ${tw`text-[0.625rem]`};
  }
`;

//! ----------> COMPONENTS <----------
const Certifications = ({ certs }: { certs: Certification[] }) => {
  return (
    <section>
      <Heading>
        <h3>Certifications</h3>
      </Heading>
      <Wrapper>
        {certs.map((cert) => (
          <div key={cert.type}>
            <p className="title">
              {cert.type}
            </p>
            <p className="source">
              {cert.source}
            </p>
          </div>
        ))}
      </Wrapper>
    </section>
  );
};

export default Certifications;
