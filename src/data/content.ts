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
    company: "Digital Pharma Lab",
    role: "Software Engineer",
    period: "Sept 2025 - Present",
    description:
      "Construction d'agents IA pour automatiser la prospection et les comptes rendus via OpenClaw, une passerelle IA sur WhatsApp. Orchestration de chaque etape, de la prise de contact a la synthese post-reunion, connectee aux outils metier (CRM, emailing, messagerie).",
    tech: ["IA", "WhatsApp API", "Node.js", "CRM"],
    current: true,
  },
  {
    company: "Naboo",
    role: "Full-stack Developer",
    period: "Fev 2025 - Sept 2025",
    description:
      "Refactoring complet du moteur de calcul d'empreinte carbone. Developpement de dashboards analytiques, d'un systeme de login white-label personnalisable et d'une interface admin multi-tenant 'Control Tower'.",
    tech: ["NestJS", "Next.js", "MongoDB", "GraphQL", "AWS"],
  },
  {
    company: "Coinhouse",
    role: "Software Engineer",
    period: "Mars 2022 - Nov 2023",
    description:
      "Refactoring a grande echelle de l'architecture front-end : migration vers des composants fonctionnels, suppression des patterns legacy, introduction de styled-components. Refonte du onboarding B2B et des exports financiers.",
    tech: ["React", "React Native", "TypeScript", "GraphQL", "GitHub Actions"],
  },
  {
    company: "Ecoly(.earth)",
    role: "Founder",
    period: "Nov 2020 - Fev 2022",
    description:
      "Creation d'une startup climat engageant les salaries via des defis ecologiques. Conception de l'architecture backend, developpement de l'app mobile, deploiement et maintenance de l'infrastructure AWS.",
    tech: ["Node.js", "React Native", "Redux", "AWS"],
  },
  {
    company: "Fleetizen",
    role: "Full Stack Developer",
    period: "Aout 2019 - Oct 2020",
    description:
      "Amelioration des performances et de la fiabilite du systeme de dispatch taxi. Implementation d'un service de distribution de notifications configurable. Maintenance des applications web et mobile.",
    tech: ["Node.js", "React", "React Native"],
  },
  {
    company: "Dirox",
    role: "Full Stack Developer",
    period: "Avr 2017 - Dec 2017",
    description:
      "Developpement d'une plateforme en ligne avec systeme de monnaie et de vouchers pour une entreprise nationale au Vietnam. Construction de parsers API pour l'integration de donnees publicitaires.",
    tech: ["React", "Node.js", "Git"],
  },
  {
    company: "3WAgency",
    role: "Full Stack Developer Freelance",
    period: "Jan 2013 - Dec 2015",
    description:
      "Developpement front-end et back-end pour plusieurs clients (Adelit, DAAC Partners, Boostons Votre Startup). Migration CMS WordPress, interfaces responsives et structures de contenu scalables.",
    tech: ["Symfony", "jQuery", "WordPress", "Git"],
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
    url: "mailto:tranchierjules@gmail.com",
    icon: "email",
  },
];
