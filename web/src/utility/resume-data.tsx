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
    summary: `Fullstack developer with a keen eye for design, a passion for creating accessible and user-friendly web applications and the ability to successfully collaborate with cross-functional teams.`
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
      href: `https://ronniebee.dev`
    },
    {
      icon: <FiLinkedin size={14} strokeWidth={1.25} />,
      label: `/in/arynn-boniface`,
      href: `https://linkedin.com/in/arynn-boniface`
    },
    {
      icon: <FiGithub size={14} strokeWidth={1.25} />,
      label: `github.com/ronniekram`,
      href: `https://github.com/ronniekram`
    },
    {
      icon: <FiHome size={14} strokeWidth={1.25} />,
      label: `Pittsburgh, PA`
    }
  ],
  skills: {
    technical: {
      front: [
        `TypeScript`,
        `Next.js`,
        `HTML5`,
        `CSS3`,
        `Figma`,
        `Accessibility`,
        `Responsive Design`
      ],
      back: [
        `Node.js`,
        `SQL`,
        `GraphQL`,
        `Prisma`,
        `Ruby on Rails`,
        `Headless CMS`
      ]
    },
    soft: [
      `Technical writing`,
      `Non-technical writing`,
      `Communication`,
      `Time management`,
      `Flexibility`,
      `Attention to detail`,
      `Organization`,
      `Problem solving`
    ]
  },
  certifications: [
    {
      type: `Certified Scrum Product Owner`,
      source: `Project Brilliant`
    }
  ],
  experience: [
    {
      title: `Lead Developer`,
      company: `Actual Size`,
      location: `Pittsburgh, PA`,
      dates: {
        start: `Nov 2022`,
        end: `Now`
      },
      responsibilities: [
        `Creating project templates and standardized workflows to improve development speed and efficiency`,
        `Managing and supporting the development team through project lifecycles`,
        `Collaborating with design and project management teams to complete projects to stakeholder standards and design specifications`,
        `Performing upkeep on existing projects and platforms to reduce technical debt`,
        `Writing project briefs to aid project management in technical communication with stakeholders on new projects`
      ]
    },
    {
      title: `Developer`,
      company: `Actual Size`,
      location: `Pittsburgh, Pa`,
      dates: {
        start: `Nov 2021`,
        end: `Nov 2022`
      },
      responsibilities: [
        `Built projects of varying sizes, from single page marketing sites to full platforms, for a range of markets`,
        `Wrote technical documentation for current and future developer reference`,
        `Wrote client facing documentation related to content and user management`,
        `Maintained and implemented new features on large scale educational platforms with over 1 million users`
      ]
    },
    {
      title: `Instructor`,
      company: `Flatiron School`,
      location: `Remote`,
      dates: {
        start: `Jan 2021`,
        end: `Nov 2022`
      },
      responsibilities: [
        `Gave bi-weekly live lectures covering Ruby on Rails, vanilla JavaScript, React and Redux`,
        `Held weekly 1:1 and small group meetings to help students improve understanding`,
        `Provided portfolio project support via open office hours and 1:1 meetings`,
        `Assessed student understanding through portfolio project reviews, code challenges and discussions`
      ]
    },
    {
      title: `Technical Coach`,
      company: `Flatiron School`,
      location: `Remote`,
      dates: {
        start: `Aug 2020`,
        end: `Jan 2021`
      },
      responsibilities: [
        `Provided 1:1 lab support to students through chat and video calls`,
        `Resolved functional and test-related issues in curriculum labs`,
        `Solved environment issues on machines using iOS and Ubuntu`
      ]
    }
  ],
  education: [
    {
      institute: `Flatiron School`,
      location: `Online`,
      dates: {
        start: `Mar 2020`,
        end: `Aug 2020`
      },
      degree: {
        concentration: `Fullstack Development`,
        type: `Certificate`
      }
    },
    {
      institute: `The Art Institute`,
      location: `Pittsburgh, PA`,
      dates: {
        start: `Feb 2020`,
        end: `Feb 2012`
      },
      degree: {
        concentration: `Culinary Arts`,
        type: `Associates`
      }
    }
  ]
};

export default resumeData;
