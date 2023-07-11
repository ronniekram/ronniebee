import tw, { styled } from "twin.macro";

import { Contact } from "@/utility/resume-data";

//! ----------> STYLES <----------
export const Heading = styled.div`
  ${tw`w-full`};
  ${tw`bg-grey-500 text-white`};
  ${tw`font-mono font-semi uppercase`};
  ${tw`tracking-[0.75px]`};
  ${tw`px-4 py-1.5`};
`;

const A = tw.a`underline`;

const ListItem = styled.li`
  ${tw`flex items-center space-x-1`};
  ${tw`font-mono font-semi uppercase`};
  ${tw`text-2xs tracking-[0.65px]`};
`;

const UL = styled.ul`
  ${tw`w-full px-4 pt-5 pb-6`};
  ${tw`flex flex-col space-y-2.5`};
`;

//! ----------> COMPONENTS <----------
const ResumeContact = ({ items }: { items: Contact[] }) => {
  return (
    <section>
      <Heading>
        <h3>Contact</h3>
      </Heading>
      <UL>
        {items.map((x) => (
          <ListItem key={x.label}>
            {x.icon}
            <p>
              {x.href ? (
                <A
                  href={x.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {x.label}
                </A>
              ): (
                <>
                  {x.label}
                </>
              )}
            </p>
          </ListItem>
        ))}
      </UL>
    </section>
  );
};

export default ResumeContact;
