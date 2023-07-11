import {
  FiSend,
  FiExternalLink,
  FiLinkedin,
  FiGithub,
  FiHome
} from "react-icons/fi";

//! ----------> TYPES <----------
export type WorkExperience = {
  title: string;
  company: string;
  location: string;
  dates: {
    start: string;
    end: string;
  };
  responsibilities: string[];
};

export type Education = {
  institute: string;
  location: string;
  dates: {
    start: string;
    end: string;
  };
  degree: {
    concentration: string;
    type: string;
  };
};

export type Contact = {
  icon: JSX.Element;
  label: string;
  href?: string;
};

export type Technical = {
  front: string[];
  back: string[];
};

export type Certification = {
  type: string;
  source: string;
};

export type Heading = {
  name: string;
  title: string;
  summary: string;
};

export type CV = {
  heading: Heading;
  contact: Contact[];
  skills: {
    technical: Technical;
    soft: string[];
  };
  certifications: Certification[];
  experience: WorkExperience[];
  education: Education[];
};

//! ----------> DATA <----------
const resumeData: CV = {
  heading: {
    name: `Ronnie Boniface`,
    title: `Fullstack Developer`,
    summary: `Are you busy this weekend? I have a new project with a tight deadline try a more powerful colour i think this should be fairly easy so if you just want to have a look, yet we are a non-profit organization.`,
  },
  contact: [
    {
      icon: <FiSend size={14} strokeWidth={1.25} />,
      label: `me@ronniebee.dev`,
      href: `mailto:me@ronniebee.dev`
    },
    {
      icon: <FiExternalLink size={14} strokeWidth={1.25} />,
      label: `ronniebee.dev`,
      href: `https://ronniebee.dev`,
    },
    {
      icon: <FiLinkedin size={14} strokeWidth={1.25} />,
      label: `/in/arynn-boniface`,
      href: `https://linkedin.com/in/arynn-boniface`,
    },
    {
      icon: <FiGithub size={14} strokeWidth={1.25} />,
      label: `github.com/ronniekram`,
      href: `https://github.com/ronniekram`,
    },
    {
      icon: <FiHome size={14} strokeWidth={1.25} />,
      label: `Pittsburgh, PA`,
    },
  ],
  skills: {
    technical: {
      front: [`TypeScript`, `Next.js`, `HTML5`, `CSS3`, `Figma`, `Accessibility`, `Responsive Design`],
      back: [`Node.js`, `SQL`, `GraphQL`, `Prisma`, `Ruby on Rails`, `Headless CMS`],
    },
    soft: [`Technical writing`, `Non-technical writing`, `Communication`, `Time management`, `Flexibility`, `Attention to detail`, `Organization`, `Problem solving`],
  },
  certifications: [
    {
      type: `Certified Scrum Product Owner`,
      source: `Project Brilliant`,
    },
  ],
  experience: [
    {
      title: `Lead Developer`,
      company: `Actual Size`,
      location: `Pittsburgh, PA`,
      dates: {
        start: `Nov 2022`,
        end: `Now`,
      },
      responsibilities: [
        `Templating projects to reduce development time, increase productivity and standardize development `,
        `Managing and supporting the development team`,
        `Working with design and project management teams to architect current and future projects`,
        `Writing technical and client facing documentation`,
        `Building projects and implementing new features on existing projects`,
      ],
    },
    {
      title: `Developer`,
      company: `Actual Size`,
      location: `Pittsburgh, Pa`,
      dates: {
        start: `Nov 2021`,
        end: `Nov 2022`,
      },
      responsibilities: [
        `Built projects of varying sizes, from marketing site to full platform`,
        `Maintained large scale educational platforms`,
        `Worked closely with design team to create beautiful websites with accessible UI/UX`,
      ],
    },
    {
      title: `Instructor`,
      company: `Flatiron School`,
      location: `Remote`,
      dates: {
        start: `Jan 2021`,
        end: `Nov 2022`,
      },
      responsibilities: [
        `Gave live lectures on: Ruby on Rails, vanilla JavaScript, React and Redux`,
        `Supported over 20 students at a time and monitored student progress`,
        `Held weekly 1:1 meetings with students to improve conceptual understanding`,
        `Provided portfolio project support via open office hours and 1:1 meetings`,
        `Assessed student understanding through portfolio project reviews`,
      ],
    },
    {
      title: `Technical Coach`,
      company: `Flatiron School`,
      location: `Remote`,
      dates: {
        start: `Aug 2020`,
        end: `Jan 2021`,
      },
      responsibilities: [
        `Provided 1:1 support with students to solve labs and improve conceptual understanding utilizing the Socratic method`,
        `Solved local environment issues for both iOS and Ubuntu`,
        `Collaborated with other coaches to ensure the best student experience`,
        `Managed student queue via chat`,
      ],
    },
  ],
  education: [
    {
      institute: `Flatiron School`,
      location: `Online`,
      dates: {
        start: `Mar 2020`,
        end: `Aug 2020`,
      },
      degree: {
        concentration: `Fullstack Development`,
        type: `Certificate`,
      },
    },
    {
      institute: `The Art Institute`,
      location: `Pittsburgh, PA`,
      dates: {
        start: `Feb 2020`,
        end: `Feb 2012`,
      },
      degree: {
        concentration: `Culinary Arts`,
        type: `Associates`,
      },
    },
  ],
};

export default resumeData;
