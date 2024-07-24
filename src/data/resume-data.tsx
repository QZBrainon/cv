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

export const RESUME_DATA = {
  name: "Brainon Queiroz",
  initials: "BQ",
  location: "Rio de Janeiro, Brazil",
  locationLink: "https://www.google.com/maps/place/Riodejaneiro",
  about:
    "Desenvolvedor Full Stack focado em construir ferramentas que agregam valor a negócios ao redor do mundo.",
  summary:
    "Como Desenvolvedor Full Stack, construí diversos aplicativos ao longo da minha jornada de aprendizado na indústria de tecnologia, liderando times com ótimo trabalho em equipe e excelentes habilidades de comunicação. Atualmente, trabalho principalmente com TypeScript, React, Node.js e Python. Tenho mais de 2 anos de experiência com tecnologias padrão de mercado, tendo contribuído com times internacionais e multidisciplinares, tanto como voluntário quanto como freelancer",
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
      school: "Universidade Estácio de Sá",
      degree: "Bacharelado em Administração de Empresas",
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
        "Plataforma de vendas de cursos online e prestação de serviços. Atualmente em desenvolvimento",
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
        "Desenvolvi ferramentas de automação e bots para uso pessoal e de negócios paras plataformas whatsapp, telegram, discord e twitch",
    },
    {
      company: "Learn Build Teach",
      link: "https://www.learnbuildteach.com/",
      badges: [],
      title: "Desenvolvedor Voluntário",
      logo: ParabolLogo,
      start: "2023",
      end: "2024",
      description:
        "Como voluntário na comunidade Learn Build Teach, desenvolvi a Home Page da comunidade, me baseando no design final passado pelo designer chefe",
    },
    {
      company: "Free Code Camp",
      link: "https://www.freecodecamp.org/",
      badges: [],
      title: "Tradutor Voluntário",
      logo: ParabolLogo,
      start: "2023",
      end: "2024",
      description:
        "Na comunidade Free Code Camp, traduzi textos relacionados à programação, de inglês para português, gerando conteúdo em seus blogs internacionalizados",
    },
    {
      company: "Trybe",
      link: "https://www.betrybe.com/",
      badges: [],
      title: "Líder de Projetos",
      logo: ParabolLogo,
      start: "2022",
      end: "2023",
      description:
        "Liderei uma equipe de desenvolvedores durante meu tempo na Trybe em um projeto full-stack, desenvolvendo, revisando e garantindo entregas pontuais ao longo da execução das tarefas da minha equipe",
    },
    {
      company: "Estácio",
      link: "https://estacio.br/",
      badges: [],
      title: "Assistente Administrativo",
      logo: ParabolLogo,
      start: "2019",
      end: "2020",
      description:
        "Como assistente administrativo, trabalhei com gerenciamento e organização de documentos e análise de dados de KPI's",
    },
    {
      company: "Estácio",
      link: "https://estacio.br/",
      badges: [],
      title: "Suporte ao Estudante",
      logo: ClevertechLogo,
      start: "2018",
      end: "2019",
      description:
        "Suporte aos novos alunos com orientação acadêmica, incluindo a apresentação das instalações da instituição, departamentos, ferramentas disponíveis e resolução de dúvidas relacionadas aos processos estudantis.",
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
        "Uma comunidade online focada em compartilhar conhecimento e crescimento profissional para desenvolvedores.",
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
        "Um aplicativo de entrega de cerveja fullstack que simula todo o fluxo de um negócio online, desde o login até o checkout.",
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
        "Uma API completa para armazenar postagens em um banco de dados SQL com autenticação.",
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
        "Uma API de vendas totalmente implementada em Typescript, com autenticação e autorização de funções.",
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
        "Um bot de bate-papo do Twitch integrado com o ChatGPT, usado para traduzir qualquer mensagem de bate-papo por meio de comandos de texto.",
      logo: BarepapersLogo,
      link: {
        label: "github.com",
        href: "https://github.com/QZBrainon/twitch-translator-backend",
      },
    },
    {
      title: "Chatbot AI",
      techStack: ["Side Project", "Next.js", "OpenAI", "Tailwindcss"],
      description: "Um bot de conversação geral, simulando o chatGPT",
      logo: BarepapersLogo,
      link: {
        label: "github.com",
        href: "https://github.com/QZBrainon/chatbot-ai",
      },
    },
  ],
} as const;
