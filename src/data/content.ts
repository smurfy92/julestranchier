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
  { label: "À propos", href: "#about" },
  { label: "Compétences", href: "#skills" },
  { label: "Expériences", href: "#experience" },
  { label: "Projets", href: "#projects" },
  { label: "Témoignages", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const hero: HeroData = {
  name: "Jules Tranchier",
  title: "AI-augmented Full-Stack Engineer",
  tagline:
    "Je conçois des solutions web et mobiles modernes, de l'idée au déploiement. +7 ans d'expérience, 5 pays, une passion pour l'innovation.",
  ctaPrimary: { label: "Me contacter", href: "#contact" },
  ctaSecondary: { label: "Découvrir mon parcours", href: "#about" },
};

export const about: AboutData = {
  bio: [
    "Développeur Full-Stack passionné et entrepreneur, je crée des applications web et mobiles performantes depuis plus de 7 ans. Diplômé de l'École 42 (Level 21, diplôme senior), j'allie rigueur technique et vision produit.",
    "Mon parcours international m'a amené à travailler aux États-Unis, au Vietnam, au Canada, en Inde et en France. Cette expérience multiculturelle enrichit ma façon de concevoir des solutions adaptées à des contextes variés.",
    "Bilingue français-anglais, je m'intègre facilement dans des équipes internationales et je suis à l'aise aussi bien en tant que développeur qu'en tant que conseil stratégique, comme en témoigne mon rôle de Board Member chez Adelit.",
  ],
  stats: [
    { value: "7+", label: "Années d'expérience" },
    { value: "5", label: "Pays" },
    { value: "42", label: "École 42 - Level 21" },
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
      "Construction d'agents IA pour automatiser la prospection et les comptes rendus via OpenClaw, une passerelle IA sur WhatsApp. Orchestration de chaque étape, de la prise de contact à la synthèse post-réunion, connectée aux outils métier (CRM, emailing, messagerie).",
    tech: ["IA", "WhatsApp API", "Node.js", "CRM"],
    current: true,
  },
  {
    company: "Naboo",
    role: "Full-stack Developer",
    period: "Fév 2025 - Sept 2025",
    description:
      "Refactoring complet du moteur de calcul d'empreinte carbone. Développement de dashboards analytiques, d'un système de login white-label personnalisable et d'une interface admin multi-tenant « Control Tower ».",
    tech: ["NestJS", "Next.js", "MongoDB", "GraphQL", "AWS"],
  },
  {
    company: "Coinhouse",
    role: "Software Engineer",
    period: "Mars 2022 - Nov 2023",
    description:
      "Refactoring à grande échelle de l'architecture front-end : migration vers des composants fonctionnels, suppression des patterns legacy, introduction de styled-components. Refonte du onboarding B2B et des exports financiers.",
    tech: ["React", "React Native", "TypeScript", "GraphQL", "GitHub Actions"],
  },
  {
    company: "Ecoly(.earth)",
    role: "Founder",
    period: "Nov 2020 - Fév 2022",
    description:
      "Création d'une startup climat engageant les salariés via des défis écologiques. Conception de l'architecture backend, développement de l'app mobile, déploiement et maintenance de l'infrastructure AWS.",
    tech: ["Node.js", "React Native", "Redux", "AWS"],
  },
  {
    company: "Fleetizen",
    role: "Full Stack Developer",
    period: "Août 2019 - Oct 2020",
    description:
      "Amélioration des performances et de la fiabilité du système de dispatch taxi. Implémentation d'un service de distribution de notifications configurable. Maintenance des applications web et mobile.",
    tech: ["Node.js", "React", "React Native"],
  },
  {
    company: "Dirox",
    role: "Full Stack Developer",
    period: "Avr 2017 - Déc 2017",
    description:
      "Développement d'une plateforme en ligne avec système de monnaie et de vouchers pour une entreprise nationale au Vietnam. Construction de parsers API pour l'intégration de données publicitaires.",
    tech: ["React", "Node.js", "Git"],
  },
  {
    company: "3WAgency",
    role: "Full Stack Developer Freelance",
    period: "Jan 2013 - Déc 2015",
    description:
      "Développement front-end et back-end pour plusieurs clients (Adelit, DAAC Partners, Boostons Votre Startup). Migration CMS WordPress, interfaces responsives et structures de contenu scalables.",
    tech: ["Symfony", "jQuery", "WordPress", "Git"],
  },
];

export const projects: Project[] = [
  {
    title: "Plateforme SaaS",
    description:
      "Conception et développement d'une plateforme SaaS complète avec authentification, tableau de bord et API REST.",
    tech: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"],
    image: "/images/projects/saas.jpg",
  },
  {
    title: "Application Mobile",
    description:
      "Application mobile cross-platform pour la gestion d'événements avec géolocalisation et notifications push.",
    tech: ["React Native", "GraphQL", "Node.js"],
    image: "/images/projects/mobile.jpg",
  },
  {
    title: "E-commerce",
    description:
      "Boutique en ligne performante avec gestion de catalogue, panier et paiement intégré.",
    tech: ["React", "Node.js", "Stripe", "MongoDB"],
    image: "/images/projects/ecommerce.jpg",
  },
  {
    title: "Dashboard Analytics",
    description:
      "Tableau de bord interactif pour la visualisation de données en temps réel avec graphiques dynamiques.",
    tech: ["React", "D3.js", "TypeScript", "REST API"],
    image: "/images/projects/dashboard.jpg",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Jules a fait preuve d'un grand professionnalisme et d'une polyvalence remarquable en tant que développeur full-stack sur nos projets web et mobile.",
    author: "Thomas Czerwonka",
    role: "Collaborateur",
    company: "Projet collaboratif",
  },
  {
    quote:
      "Un développeur talentueux avec une vraie vision produit. Jules comprend les enjeux business autant que les défis techniques.",
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
