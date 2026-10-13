// Contenu centralisé du portfolio d'Edi TUTONDA

export const profile = {
  name: "Edi TUTONDA",
  initials: "ET",
  role: "Informaticien — Développement · IA · Cybersécurité",
  tagline:
    "Je construis, j'expérimente et j'apprends à la croisée du développement logiciel, de l'intelligence artificielle et de la cybersécurité.",
  location: "République Démocratique du Congo 🇨🇩",
  email: "edi.tutonda@2030.ulc-icam.com",
  phone: "+243974534284",
  github: "https://github.com/Shad0wOO7",
  linkedin: "https://linkedin.com/",
};

export const navLinks = [
  { label: "À propos", href: "#about" },
  { label: "Compétences", href: "#skills" },
  { label: "Projets", href: "#projects" },
  { label: "Formation", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Technologies", href: "#technologies" },
  { label: "Contact", href: "#contact" },
];

export const aboutHighlights = [
  {
    title: "Étudiant en informatique",
    description:
      "Parcours orienté génie logiciel, avec une progression continue en programmation, architecture et conception.",
  },
  {
    title: "Développement + IA + Cybersécurité",
    description:
      "Un profil à l'intersection de trois domaines : je ne me contente pas d'utiliser les outils, je cherche à comprendre comment ils sont construits.",
  },
  {
    title: "Apprentissage par la pratique",
    description:
      "Progression simple → compréhension → pratique → complexification. Je préfère des solutions proportionnées, sans overengineering.",
  },
  {
    title: "Basé en RDC",
    description:
      "Je construis mes compétences et mes projets avec des moyens réalistes, en cherchant des solutions efficaces et accessibles.",
  },
];

export interface SkillItem {
  name: string;
  level: string;
}

export interface SkillCategory {
  number: string;
  title: string;
  description: string;
  skills: SkillItem[];
}

export const skillCategories: SkillCategory[] = [
  {
    number: "01",
    title: "Software Development",
    description:
      "Programmation orientée objet, algorithmique et conception logicielle.",
    skills: [
      { name: "Java", level: "Académique / POO & UML" },
      { name: "Python", level: "Scripts & Simulation numérique" },
      { name: "C++", level: "Algorithmique & CLI" },
      { name: "JavaScript / TypeScript", level: "Développement web React" },
      { name: "POO & Principes SOLID", level: "Conception logicielle" },
      { name: "Git & GitHub", level: "Versionnement & Collaboration" },
    ],
  },
  {
    number: "02",
    title: "Intelligence Artificielle",
    description:
      "Exploration des systèmes IA, agents, automatisation et outils génératifs.",
    skills: [
      { name: "IA générative & LLMs", level: "Prompting avancé & Intégration" },
      { name: "Agents IA", level: "Étude d'architectures & Flux" },
      { name: "Automatisation", level: "Expérimentation d'outils" },
      { name: "Modèles open source", level: "Découverte & Veille" },
    ],
  },
  {
    number: "03",
    title: "Cybersécurité",
    description:
      "Sensibilisation et apprentissage des fondamentaux de la sécurité informatique.",
    skills: [
      { name: "Fondamentaux de la sécurité", level: "En apprentissage continu" },
      { name: "Bases Pentesting & Red Team", level: "Initiation & Laboratoires" },
      { name: "Bonnes pratiques de sécurité", level: "Sensibilisation & Hygiène IT" },
      { name: "IA appliquée à la sécurité", level: "Recherche conceptuelle" },
    ],
  },
  {
    number: "04",
    title: "Engineering & Méthodes",
    description:
      "Génie logiciel, modélisation et bonnes pratiques de travail.",
    skills: [
      { name: "Méthodologie Agile/Scrum", level: "Travail d'équipe & Sprints" },
      { name: "UML / Modélisation", level: "Diagrammes de classes & Séquences" },
      { name: "UI/UX & Prototypage", level: "Interfaces épurées & Ergonomie" },
      { name: "IntelliJ IDEA & VS Code", level: "Environnements de développement" },
    ],
  },
];

export interface Project {
  title: string;
  category: string;
  description: string;
  tags: string[];
  year: string;
  githubUrl: string;
  demoUrl?: string;
  status: "Projet universitaire" | "Projet académique" | "Projet personnel" | "Étude conceptuelle";
}

export const projects: Project[] = [
  {
    title: "Potionarium",
    category: "Java · UML · POO",
    description:
      "Projet universitaire de conception orientée objet en Java, modélisé avec UML : gestion d'interfaces, d'entités et de relations entre classes selon les principes SOLID.",
    tags: ["Java", "UML", "POO", "SOLID"],
    year: "2024",
    githubUrl: "https://github.com/Shad0wOO7",
    status: "Projet universitaire",
  },
  {
    title: "Bibliothèque — Orexine",
    category: "Java · Architecture logicielle",
    description:
      "Exercice d'architecture logicielle autour d'une bibliothèque numérique : interfaces ILivre / IMembre, séparation des responsabilités et inversion de dépendances.",
    tags: ["Java", "Interfaces", "IntelliJ IDEA"],
    year: "2024",
    githubUrl: "https://github.com/Shad0wOO7",
    status: "Projet universitaire",
  },
  {
    title: "Shifumi",
    category: "C++ · Algorithmique",
    description:
      "Jeu Pierre-Feuille-Ciseaux en ligne de commande développé en C++, pour travailler la logique conditionnelle et la structuration du code.",
    tags: ["C++", "Algorithmique", "CLI"],
    year: "2023",
    githubUrl: "https://github.com/Shad0wOO7",
    status: "Projet académique",
  },
  {
    title: "Simulation thermique",
    category: "Python · Simulation numérique",
    description:
      "Expérimentation de simulation de diffusion thermique (lampes) en Python, pour explorer la modélisation numérique de phénomènes physiques.",
    tags: ["Python", "Simulation", "Data"],
    year: "2024",
    githubUrl: "https://github.com/Shad0wOO7",
    status: "Projet personnel",
  },
  {
    title: "Portfolio interactif",
    category: "React · TypeScript · Tailwind",
    description:
      "Ce portfolio moderne développé avec React, Vite et Tailwind CSS, conçu pour présenter mon parcours, mes compétences honnêtes et mes projets avec un design épuré.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    year: "2025",
    githubUrl: "https://github.com/Shad0wOO7",
    demoUrl: "#top",
    status: "Projet personnel",
  },
  {
    title: "Assistant IA Cybersécurité — concept",
    category: "IA · Cybersécurité",
    description:
      "Réflexion et conception préliminaire d'un assistant spécialisé en cybersécurité basé sur l'IA, avec garde-fous et limites définis avant toute implémentation.",
    tags: ["IA", "Cybersécurité", "Architecture"],
    year: "En cours",
    githubUrl: "https://github.com/Shad0wOO7",
    status: "Étude conceptuelle",
  },
];

export const education = [
  {
    period: "En cours",
    title: "Études en Informatique / Génie Logiciel",
    place: "Université Loyola du Congo (ULC-ICAM) · RDC",
    description:
      "Formation axée sur la programmation orientée objet, l'algorithmique, l'architecture logicielle et les méthodologies de gestion de projet (Agile, Scrum).",
  },
  {
    period: "Continu",
    title: "Auto-formation en Intelligence Artificielle",
    place: "En ligne / Projets personnels",
    description:
      "Apprentissage autodidacte sur les modèles IA, les agents, l'automatisation et l'intégration de l'IA dans des systèmes logiciels.",
  },
  {
    period: "Continu",
    title: "Auto-formation en Cybersécurité",
    place: "En ligne / Veille technique",
    description:
      "Exploration progressive des fondamentaux de la sécurité informatique, du pentesting et des approches Red Team.",
  },
];

export const certifications = [
  {
    status: "En apprentissage",
    title: "Fondamentaux de la Cybersécurité",
    description: "Sensibilisation aux bases de la sécurité informatique et du pentesting.",
  },
  {
    status: "En apprentissage",
    title: "Systèmes & Agents IA",
    description: "Étude des architectures d'agents IA, de l'automatisation et du prompting avancé.",
  },
  {
    status: "En apprentissage",
    title: "Génie Logiciel & Architecture",
    description: "Approfondissement des principes SOLID, de l'architecture logicielle et des méthodologies Agile.",
  },
  {
    status: "À venir",
    title: "Certifications professionnelles",
    description: "Objectif à moyen terme : obtenir des certifications reconnues en sécurité et en IA.",
  },
];

export const technologies = [
  "Java", "Python", "C++", "JavaScript", "HTML / CSS",
  "Git & GitHub", "IntelliJ IDEA", "UML / PlantUML",
  "MATLAB / Simulink", "Jira", "Flowgorithm", "Outils IA génératifs",
];
