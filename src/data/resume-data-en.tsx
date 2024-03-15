import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA_EN = {
  name: "Brainon Queiroz",
  initials: "BQ",
  location: "Rio de Janeiro, Brazil",
  locationLink: "https://www.google.com/maps/place/Riodejaneiro",
  about:
    "Full Stack Developer focused on building tools that add value to businesses around the world.",
  summary:
    "As a Full Stack Developer, I've built various applications throughout my learning journey in the tech industry, leading teams with great teamwork and excellent communication skills. Currently, I mainly work with TypeScript, React, Node.js, and Python. I have over 1 year of experience with standard market technologies, having contributed to international and multidisciplinary teams.",
  avatarUrl: "https://avatars.githubusercontent.com/u/93778230?v=4",
  personalWebsiteUrl: "https://qzbrainon.dev",
  contact: {
    email: "brainonqueiroz@gmail.com",
    tel: "+55 21 9 76980527",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/QZBrainon",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/brainon-queiroz/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Estácio University",
      degree: "Bachelor's in Business Administration",
      start: "2016",
      end: "2020",
    },
  ],
  work: [
    {
      company: "Akeefy",
      link: "https://www.akeefy.com/",
      badges: [],
      title: "Freelancer",
      logo: ParabolLogo,
      start: "2023",
      end: "2024",
      description:
        "Online course sales and service platform. Currently under development.",
    },
    {
      company: "Workana",
      link: "https://www.workana.com/",
      badges: [],
      title: "Freelancer",
      logo: ParabolLogo,
      start: "2023",
      end: "2024",
      description:
        "Developed automation tools and bots for personal and business use for platforms whatsapp, telegram, discord and twitch",
    },
    {
      company: "Learn Build Teach",
      link: "https://www.learnbuildteach.com/",
      badges: [],
      title: "Volunteer Developer",
      logo: ParabolLogo,
      start: "2023",
      end: "2024",
      description:
        "As a volunteer in the Learn Build Teach community, I developed the community's Home Page, based on the final design provided by the chief designer.",
    },
    {
      company: "Free Code Camp",
      link: "https://www.freecodecamp.org/",
      badges: [],
      title: "Volunteer Translator",
      logo: ParabolLogo,
      start: "2023",
      end: "2024",
      description:
        "In the Free Code Camp community, I translated programming-related texts from English to Portuguese, generating content for their internationalized blogs.",
    },
    {
      company: "Trybe",
      link: "https://www.betrybe.com/",
      badges: [],
      title: "Project Leader",
      logo: ParabolLogo,
      start: "2022",
      end: "2023",
      description:
        "I led a team of developers during my time at Trybe on a full-stack project, developing, reviewing, and ensuring timely deliveries throughout my team's task execution.",
    },
    {
      company: "Estácio",
      link: "https://estacio.br/",
      badges: [],
      title: "Administrative Assistant",
      logo: ParabolLogo,
      start: "2019",
      end: "2020",
      description:
        "As an administrative assistant, I worked with document management and organization and analyzed KPI data.",
    },
    {
      company: "Estácio",
      link: "https://estacio.br/",
      badges: [],
      title: "Student Support",
      logo: ClevertechLogo,
      start: "2018",
      end: "2019",
      description:
        "Support for new students with academic guidance, including presenting the institution's facilities, departments, available tools, and resolving doubts related to student processes.",
    },
  ],
  skills: [
    "TypeScript",
    "React/Next.js/Svelte",
    "Node.js",
    "Express",
    "Docker",
    "Nest.js",
    "Python",
  ],
  projects: [
    {
      title: "Learn Build Teach",
      techStack: [
        "Volunteer",
        "TypeScript",
        "Svelte",
        "Tailwindcss",
        "REST API",
      ],
      description:
        "An online community focused on sharing knowledge and professional growth for developers.",
      logo: ConsultlyLogo,
      link: {
        label: "learnbuildteach.com",
        href: "https://learnbuildteach.com/",
      },
    },
    {
      title: "Delivery App",
      techStack: ["Bootcamp Project", "Javascript", "React", "Express"],
      description:
        "A fullstack beer delivery app that simulates the entire flow of an online business, from login to checkout.",
      logo: MonitoLogo,
      link: {
        label: "github.com",
        href: "https://github.com/QZBrainon/deliveryApp",
      },
    },
    {
      title: "Blogs API",
      techStack: ["Bootcamp Project", "Express", "Sequelize"],
      description:
        "A complete API for storing blog posts in a SQL database with authentication.",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://github.com/QZBrainon/BlogsAPI",
      },
    },
    {
      title: "Sales Backend",
      techStack: [
        "Side Project",
        "Nest.js",
        "Typescript",
        "Docker",
        "Prisma",
        "SQL",
      ],
      description:
        "A fully implemented sales API in Typescript, with authentication and function authorization.",
      logo: Minimal,
      link: {
        label: "github.com",
        href: "https://github.com/QZBrainon/nestjs-api",
      },
    },
    {
      title: "Twitch Translator",
      techStack: ["Side Project", "Express", "OpenAI", "TMI"],
      description:
        "A Twitch chat bot integrated with ChatGPT, used to translate any chat message via text commands.",
      logo: BarepapersLogo,
      link: {
        label: "github.com",
        href: "https://github.com/QZBrainon/twitch-translator-backend",
      },
    },
    {
      title: "Chatbot AI",
      techStack: ["Side Project", "Next.js", "OpenAI", "Tailwindcss"],
      description: "A general conversation bot, simulating ChatGPT",
      logo: BarepapersLogo,
      link: {
        label: "github.com",
        href: "https://github.com/QZBrainon/chatbot-ai",
      },
    },
  ],
} as const;
