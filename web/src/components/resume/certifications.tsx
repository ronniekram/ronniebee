import tw, { styled } from "twin.macro";

import { Certification } from "@/utility/resume-data";
import { Heading } from "./contact";

//! ----------> STYLES <----------
const Wrapper = styled.div`
  ${tw`w-full pl-4 py-4`};
  ${tw`flex flex-col space-y-2`};
  ${tw`tracking-[0.5px]`};

  .title {
    ${tw`font-mono font-semi uppercase`};
    ${tw`text-sm text-grey-500 leading-[normal]`};
    ${tw`tracking-[unset]`};
  }
  .source {
    ${tw`font-mono font-normal text-grey-400`};
    ${tw`text-xs`};
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
            <p className="title">{cert.type}</p>
            <p className="source">{cert.source}</p>
          </div>
        ))}
      </Wrapper>
    </section>
  );
};

export default Certifications;
