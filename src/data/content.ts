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
  { label: "A propos", href: "#about" },
  { label: "Competences", href: "#skills" },
  { label: "Experiences", href: "#experience" },
  { label: "Projets", href: "#projects" },
  { label: "Temoignages", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const hero: HeroData = {
  name: "Jules Tranchier",
  title: "AI-augmented Full-Stack Engineer",
  tagline:
    "Je concois des solutions web et mobiles modernes, de l'idee au deploiement. +7 ans d'experience, 5 pays, une passion pour l'innovation.",
  ctaPrimary: { label: "Me contacter", href: "#contact" },
  ctaSecondary: { label: "Decouvrir mon parcours", href: "#about" },
};

export const about: AboutData = {
  bio: [
    "Developpeur Full-Stack passionne et entrepreneur, je cree des applications web et mobiles performantes depuis plus de 7 ans. Diplome de l'Ecole 42 (Level 21, diplome senior), j'allie rigueur technique et vision produit.",
    "Mon parcours international m'a amene a travailler aux Etats-Unis, au Vietnam, au Canada, en Inde et en France. Cette experience multiculturelle enrichit ma facon de concevoir des solutions adaptees a des contextes varies.",
    "Bilingue francais-anglais, je m'integre facilement dans des equipes internationales et je suis a l'aise aussi bien en tant que developpeur qu'en tant que conseil strategique, comme en temoigne mon role de Board Member chez Adelit.",
  ],
  stats: [
    { value: "7+", label: "Annees d'experience" },
    { value: "5", label: "Pays" },
    { value: "42", label: "Ecole 42 - Level 21" },
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
    company: "Naboo",
    role: "Developpeur Full-Stack Senior",
    period: "2023 - Present",
    description:
      "Developpement de fonctionnalites full-stack sur la plateforme Naboo. Travail en equipe agile avec une vision produit de bout en bout.",
    tech: ["React", "Node.js", "TypeScript", "GraphQL"],
    current: true,
  },
  {
    company: "Freelance",
    role: "Developpeur Full-Stack & Consultant",
    period: "2020 - 2023",
    description:
      "Accompagnement de startups et entreprises dans la conception et le developpement d'applications web et mobiles. Conseil technique et strategique.",
    tech: ["React", "Next.js", "Node.js", "React Native", "GraphQL"],
  },
  {
    company: "Adelit",
    role: "Board Member & Developpeur",
    period: "2019 - 2022",
    description:
      "Membre du conseil d'administration. Contribution strategique et technique sur des projets e-commerce et d'innovation digitale.",
    tech: ["React", "Node.js", "E-commerce"],
  },
  {
    company: "Digital Pharma Lab",
    role: "Developpeur Full-Stack",
    period: "2018 - 2019",
    description:
      "Developpement d'outils digitaux pour l'industrie pharmaceutique au sein du premier accelerateur Pharmatech en Europe.",
    tech: ["JavaScript", "PHP", "APIs"],
  },
  {
    company: "Ecole 42",
    role: "Formation Developpeur",
    period: "2015 - 2018",
    description:
      "Formation intensive en informatique. Diplome senior (Level 21). Apprentissage par projets en C, algorithmique, reseaux et developpement web.",
    tech: ["C", "Algorithmique", "Unix", "Web"],
  },
];

export const projects: Project[] = [
  {
    title: "Plateforme SaaS",
    description:
      "Conception et developpement d'une plateforme SaaS complete avec authentification, tableau de bord et API REST.",
    tech: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"],
    image: "/images/projects/saas.jpg",
  },
  {
    title: "Application Mobile",
    description:
      "Application mobile cross-platform pour la gestion d'evenements avec geolocalisation et notifications push.",
    tech: ["React Native", "GraphQL", "Node.js"],
    image: "/images/projects/mobile.jpg",
  },
  {
    title: "E-commerce",
    description:
      "Boutique en ligne performante avec gestion de catalogue, panier et paiement integre.",
    tech: ["React", "Node.js", "Stripe", "MongoDB"],
    image: "/images/projects/ecommerce.jpg",
  },
  {
    title: "Dashboard Analytics",
    description:
      "Tableau de bord interactif pour la visualisation de donnees en temps reel avec graphiques dynamiques.",
    tech: ["React", "D3.js", "TypeScript", "REST API"],
    image: "/images/projects/dashboard.jpg",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Jules a fait preuve d'un grand professionnalisme et d'une polyvalence remarquable en tant que developpeur full-stack sur nos projets web et mobile.",
    author: "Thomas Czerwonka",
    role: "Collaborateur",
    company: "Projet collaboratif",
  },
  {
    quote:
      "Un developpeur talentueux avec une vraie vision produit. Jules comprend les enjeux business autant que les defis techniques.",
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
    url: "mailto:contact@julestranchier.com",
    icon: "email",
  },
];
