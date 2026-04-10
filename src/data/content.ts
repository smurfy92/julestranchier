import type {
  NavItem,
  HeroData,
  AboutData,
  SkillCategory,
  Experience,
  Project,
  Testimonial,
  ContactLink,
} from "@/types";

export const navigation: NavItem[] = [
  { label: "\u00C0 propos", href: "#about" },
  { label: "Comp\u00E9tences", href: "#skills" },
  { label: "Exp\u00E9riences", href: "#experience" },
  { label: "Projets", href: "#projects" },
  { label: "T\u00E9moignages", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const hero: HeroData = {
  name: "Jules Tranchier",
  title: "AI-augmented Full-Stack Engineer",
  tagline:
    "Je con\u00E7ois des solutions web et mobiles modernes, de l'id\u00E9e au d\u00E9ploiement. +7 ans d'exp\u00E9rience, 5 pays, une passion pour l'innovation.",
  ctaPrimary: { label: "Me contacter", href: "#contact" },
  ctaSecondary: { label: "D\u00E9couvrir mon parcours", href: "#about" },
};

export const about: AboutData = {
  bio: [
    "D\u00E9veloppeur Full-Stack passionn\u00E9 et entrepreneur, je cr\u00E9e des applications web et mobiles performantes depuis plus de 7 ans. Dipl\u00F4m\u00E9 de l'\u00C9cole 42 (Level 21, dipl\u00F4me senior), j'allie rigueur technique et vision produit.",
    "Mon parcours international m'a amen\u00E9 \u00E0 travailler aux \u00C9tats-Unis, au Vietnam, au Canada, en Inde et en France. Cette exp\u00E9rience multiculturelle enrichit ma fa\u00E7on de concevoir des solutions adapt\u00E9es \u00E0 des contextes vari\u00E9s.",
    "Bilingue fran\u00E7ais-anglais, je m'int\u00E8gre facilement dans des \u00E9quipes internationales et je suis \u00E0 l'aise aussi bien en tant que d\u00E9veloppeur qu'en tant que conseil strat\u00E9gique, comme en t\u00E9moigne mon r\u00F4le de Board Member chez Adelit.",
  ],
  stats: [
    { value: "7+", label: "Ann\u00E9es d'exp\u00E9rience" },
    { value: "5", label: "Pays" },
    { value: "42", label: "\u00C9cole 42 - Level 21" },
    { value: "FR/EN", label: "Bilingue" },
  ],
};

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    icon: "window",
    skills: [
      { name: "React" },
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "JavaScript" },
      { name: "Tailwind CSS" },
      { name: "HTML/CSS" },
    ],
  },
  {
    name: "Backend",
    icon: "server",
    skills: [
      { name: "Node.js" },
      { name: "GraphQL" },
      { name: "PHP" },
      { name: "REST APIs" },
      { name: "PostgreSQL" },
      { name: "MongoDB" },
    ],
  },
  {
    name: "Mobile",
    icon: "phone",
    skills: [
      { name: "React Native" },
      { name: "Swift" },
      { name: "iOS" },
    ],
  },
  {
    name: "Outils & DevOps",
    icon: "tools",
    skills: [
      { name: "Git" },
      { name: "Docker" },
      { name: "Vercel" },
      { name: "CI/CD" },
      { name: "Linux" },
      { name: "AWS" },
    ],
  },
];

export const experiences: Experience[] = [
  {
    company: "Digital Pharma Lab",
    role: "Software Engineer",
    period: "Sept 2025 - Present",
    description:
      "Construction d'agents IA pour automatiser la prospection et les comptes rendus via OpenClaw, une passerelle IA sur WhatsApp. Orchestration de chaque \u00E9tape, de la prise de contact \u00E0 la synth\u00E8se post-r\u00E9union, connect\u00E9e aux outils m\u00E9tier (CRM, emailing, messagerie).",
    tech: ["IA", "WhatsApp API", "Node.js", "CRM"],
    current: true,
  },
  {
    company: "Naboo",
    role: "Full-stack Developer",
    period: "Fev 2025 - Sept 2025",
    description:
      "Refactoring complet du moteur de calcul d'empreinte carbone. D\u00E9veloppement de dashboards analytiques, d'un syst\u00E8me de login white-label personnalisable et d'une interface admin multi-tenant \u00AB Control Tower \u00BB.",
    tech: ["NestJS", "Next.js", "MongoDB", "GraphQL", "AWS"],
  },
  {
    company: "Coinhouse",
    role: "Software Engineer",
    period: "Mars 2022 - Nov 2023",
    description:
      "Refactoring \u00E0 grande \u00E9chelle de l'architecture front-end : migration vers des composants fonctionnels, suppression des patterns legacy, introduction de styled-components. Refonte du onboarding B2B et des exports financiers.",
    tech: ["React", "React Native", "TypeScript", "GraphQL", "GitHub Actions"],
  },
  {
    company: "Ecoly(.earth)",
    role: "Founder",
    period: "Nov 2020 - Fev 2022",
    description:
      "Cr\u00E9ation d'une startup climat engageant les salari\u00E9s via des d\u00E9fis \u00E9cologiques. Conception de l'architecture backend, d\u00E9veloppement de l'app mobile, d\u00E9ploiement et maintenance de l'infrastructure AWS.",
    tech: ["Node.js", "React Native", "Redux", "AWS"],
  },
  {
    company: "Fleetizen",
    role: "Full Stack Developer",
    period: "Aout 2019 - Oct 2020",
    description:
      "Am\u00E9lioration des performances et de la fiabilit\u00E9 du syst\u00E8me de dispatch taxi. Impl\u00E9mentation d'un service de distribution de notifications configurable. Maintenance des applications web et mobile.",
    tech: ["Node.js", "React", "React Native"],
  },
  {
    company: "Dirox",
    role: "Full Stack Developer",
    period: "Avr 2017 - Dec 2017",
    description:
      "D\u00E9veloppement d'une plateforme en ligne avec syst\u00E8me de monnaie et de vouchers pour une entreprise nationale au Vietnam. Construction de parsers API pour l'int\u00E9gration de donn\u00E9es publicitaires.",
    tech: ["React", "Node.js", "Git"],
  },
  {
    company: "3WAgency",
    role: "Full Stack Developer Freelance",
    period: "Jan 2013 - Dec 2015",
    description:
      "D\u00E9veloppement front-end et back-end pour plusieurs clients (Adelit, DAAC Partners, Boostons Votre Startup). Migration CMS WordPress, interfaces responsives et structures de contenu scalables.",
    tech: ["Symfony", "jQuery", "WordPress", "Git"],
  },
];

export const projects: Project[] = [
  {
    title: "Plateforme SaaS",
    description:
      "Conception et d\u00E9veloppement d'une plateforme SaaS compl\u00E8te avec authentification, tableau de bord et API REST.",
    tech: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"],
    image: "/images/projects/saas.jpg",
  },
  {
    title: "Application Mobile",
    description:
      "Application mobile cross-platform pour la gestion d'\u00E9v\u00E9nements avec g\u00E9olocalisation et notifications push.",
    tech: ["React Native", "GraphQL", "Node.js"],
    image: "/images/projects/mobile.jpg",
  },
  {
    title: "E-commerce",
    description:
      "Boutique en ligne performante avec gestion de catalogue, panier et paiement int\u00E9gr\u00E9.",
    tech: ["React", "Node.js", "Stripe", "MongoDB"],
    image: "/images/projects/ecommerce.jpg",
  },
  {
    title: "Dashboard Analytics",
    description:
      "Tableau de bord interactif pour la visualisation de donn\u00E9es en temps r\u00E9el avec graphiques dynamiques.",
    tech: ["React", "D3.js", "TypeScript", "REST API"],
    image: "/images/projects/dashboard.jpg",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Jules a fait preuve d'un grand professionnalisme et d'une polyvalence remarquable en tant que d\u00E9veloppeur full-stack sur nos projets web et mobile.",
    author: "Thomas Czerwonka",
    role: "Collaborateur",
    company: "Projet collaboratif",
  },
  {
    quote:
      "Un d\u00E9veloppeur talentueux avec une vraie vision produit. Jules comprend les enjeux business autant que les d\u00E9fis techniques.",
    author: "Benjamin Chery",
    role: "Collaborateur",
    company: "Projet collaboratif",
  },
];

export const contactLinks: ContactLink[] = [
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/julestranchier/",
    icon: "linkedin",
  },
  {
    label: "GitHub",
    url: "https://github.com/smurfy92",
    icon: "github",
  },
  {
    label: "Email",
    url: "mailto:tranchierjules@gmail.com",
    icon: "email",
  },
];
