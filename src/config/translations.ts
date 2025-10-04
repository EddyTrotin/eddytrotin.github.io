import { Github, Linkedin, Mail, Sparkles, Zap, Cloud, Terminal, Globe, Server, Database, Box } from 'lucide-react';

export const translations = {
  en: {
    // Personal Information
    personal: {
      name: 'Eddy Trotin',
      title: 'AI & Full Stack Engineer',
      subtitle: 'Building production-ready solutions from concept to production — specializing in TypeScript, microservices, and AI-powered automation',
      availability: 'Open to new opportunities',
      tagline: {
        prefix: 'Building',
        rotating: ['Scalable', 'Innovative', 'Production-Ready', 'Robust', 'Modern'],
        suffix: 'Solutions'
      },
      stats: {
        projectsCompleted: '40+',
        projectsLabel: 'Projects Completed',
        yearsExperience: '10+',
        yearsLabel: 'Years Experience',
        clientSatisfaction: '100%',
        satisfactionLabel: 'Passionate'
      },
      bio: {
        heading: 'AI & Full Stack Engineer',
        intro: 'I build full-stack apps that scale. Over the past 10 years, I\'ve shipped production applications for startups to world-class companies, working across the entire stack—from database architecture to user interfaces. I write **clean, maintainable code** and believe the best solutions come from understanding both the technical requirements and the **business context**.',
        passion: 'What drives me is seeing projects go from initial concept to production. I\'ve led development teams, managed technical budgets, and contributed to **open-source projects** like node-i18n. Whether it\'s setting up complex structured app with CI/CD pipelines, integrating AI workflows with N8N, or building custom HubSpot extensions, I focus on delivering systems that actually **work in the real world**.'
      }
    },

    // Navigation
    navigation: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      contact: 'Contact'
    },

    // Contact Information
    contact: {
      email: 'dev.eddy.trotin@outlook.com',
      github: 'https://github.com/eddytrotin',
      linkedin: 'https://linkedin.com/in/eddy-trotin',
      title: 'Let\'s Talk About Your Next Project',
      description: 'Looking for someone who can handle the full development lifecycle? I\'m available for contract work, technical leadership roles, or interesting challenges that require deep full-stack expertise.',
      sendMessage: 'Send Message',
      connectLinkedIn: 'Connect on LinkedIn'
    },

    // Social Links
    socials: [
      { icon: Github, href: 'https://github.com/eddytrotin', label: 'GitHub' },
      { icon: Linkedin, href: 'https://linkedin.com/in/eddy-trotin', label: 'LinkedIn' },
      { icon: Mail, href: 'mailto:dev.eddy.trotin@outlook.com', label: 'Email' }
    ],

    // Projects
    projects: {
      title: 'Featured Projects',
      viewProject: 'View Project',
      items: [
        {
          title: 'HubSpot CRM & Marketplace Extensions',
          description: 'Led development of custom React extensions and public marketplace apps for HubSpot CRM, including N8N automation workflows and AI integrations',
          tech: ['React', 'TypeScript', 'HubSpot API', 'N8N'],
          gradient: 'from-violet-600 via-purple-600 to-fuchsia-600',
          icon: Sparkles,
          kpis: ['Team Leadership', 'Budget Management', 'Public Marketplace Apps'],
          link: '#'
        },
        {
          title: 'Enterprise E-commerce Platform',
          description: 'Full-stack TypeScript development for Kering Group and Auchan Retail—building microservice architectures for high-traffic retail environments',
          tech: ['TypeScript', 'Node.js', 'PostgreSQL', 'Docker'],
          gradient: 'from-cyan-500 via-blue-600 to-indigo-600',
          icon: Zap,
          kpis: ['Microservices Architecture', 'High Availability', 'Enterprise Scale'],
          link: '#'
        },
        {
          title: 'Open-Paas Enterprise Social Network',
          description: 'Contributed to LINAGORA\'s enterprise collaboration platform—implemented i18n system across frontend and backend, including contributions to node-i18n library',
          tech: ['Node.js', 'Angular', 'MongoDB', 'i18n'],
          gradient: 'from-emerald-500 via-teal-600 to-cyan-600',
          icon: Cloud,
          kpis: ['Open Source Contribution', 'Full Internationalization', 'Scalable Architecture'],
          link: '#'
        },
        {
          title: 'Business Management Suite',
          description: 'Custom software solutions for diverse clients—web applications, digital marketing platforms, security audits, and architectural consulting',
          tech: ['Vue.js 3', 'Node.js', 'AWS', 'Tailwind CSS'],
          gradient: 'from-orange-500 via-red-600 to-pink-600',
          icon: Terminal,
          kpis: ['Startup to Enterprise', '9 Years Running', 'Full Project Lifecycle'],
          link: '#'
        }
      ]
    },

    // About Section
    about: {
      title: 'About Me',
      techStackTitle: 'Tech Stack & Expertise',
      highlights: [
        '✓ Built production systems handling millions of users for enterprise clients',
        '✓ Led cross-functional teams and managed technical budgets',
        '✓ Open-source contributor — shipped code that works in the real world',
        '✓ Full project lifecycle expertise: from architecture to deployment',
        '✓ Delivered solutions for startups to Fortune 500 companies'
      ],
      techStack: [
        { icon: Globe, label: 'Frontend', items: 'React, Vue.js 3, Tailwind, Vite' },
        { icon: Server, label: 'Backend', items: 'Node.js, TypeScript, RESTful APIs, WebSocket' },
        { icon: Database, label: 'Database', items: 'PostgreSQL, MongoDB, Redis, Prisma' },
        { icon: Box, label: 'DevOps', items: 'Docker, AWS, CI/CD, Nginx, ELK' }
      ]
    },

    // Buttons
    buttons: {
      viewMyWork: 'View My Work',
      getInTouch: 'Get In Touch'
    },

    // Footer
    footer: {
      copyright: 'Eddy Trotin'
    }
  },

  fr: {
    // Informations personnelles
    personal: {
      name: 'Eddy Trotin',
      title: 'Ingénieur IA & Full Stack',
      subtitle: 'De l\'idée au déploiement en production — Expert TypeScript, microservices et automatisation IA',
      availability: 'Disponible pour nouveaux projets',
      tagline: {
        prefix: 'Développer des Solutions',
        rotating: ['Scalables', 'Innovantes', 'Robustes', 'Performantes', 'Modernes'],
        suffix: ''
      },
      stats: {
        projectsCompleted: '40+',
        projectsLabel: 'Projets Livrés',
        yearsExperience: '10+',
        yearsLabel: 'Ans d\'Expérience',
        clientSatisfaction: '100%',
        satisfactionLabel: 'Passionné'
      },
      bio: {
        heading: 'Ingénieur IA & Full Stack',
        intro: 'Depuis 10 ans, j\'ai mis en production des systèmes pour des startups jusqu\'à des grands groupes internationaux, en maîtrisant toute la chaîne technique—de la conception BDD aux interfaces utilisateurs. Je vise du **code propre et maintenable** qui répond autant aux contraintes techniques qu\'aux **enjeux métier**.',
        passion: 'Ce qui me passionne ? Transformer une **idée en produit fonctionnel**. Qu\'il s\'agisse de mettre en place des applications structurées complexes avec des pipelines CI/CD, d\'intégrer des workflows d\'IA avec N8N ou de créer des extensions HubSpot personnalisées, je me concentre sur la conception de solutions qui fonctionnent réellement pour les utilisateurs.'
      }
    },

    // Navigation
    navigation: {
      home: 'Accueil',
      about: 'À Propos',
      projects: 'Projets',
      contact: 'Contact'
    },

    // Contact
    contact: {
      email: 'dev.eddy.trotin@outlook.com',
      github: 'https://github.com/eddytrotin',
      linkedin: 'https://linkedin.com/in/eddy-trotin',
      title: 'Discutons de Votre Projet',
      description: 'Besoin d\'un développeur qui maîtrise tout le cycle de vie d\'un projet ? Je suis ouvert aux missions freelance, postes de lead dev ou tout défi technique nécessitant une vraie expertise full-stack.',
      sendMessage: 'Envoyer un message',
      connectLinkedIn: 'LinkedIn'
    },

    // Réseaux sociaux
    socials: [
      { icon: Github, href: 'https://github.com/eddytrotin', label: 'GitHub' },
      { icon: Linkedin, href: 'https://linkedin.com/in/eddy-trotin', label: 'LinkedIn' },
      { icon: Mail, href: 'mailto:dev.eddy.trotin@outlook.com', label: 'Email' }
    ],

    // Projets
    projects: {
      title: 'Réalisations',
      viewProject: 'Voir le projet',
      items: [
        {
          title: 'Extensions HubSpot CRM & Marketplace',
          description: 'Lead dev sur des extensions React custom et apps publiques HubSpot CRM — workflows N8N et intégrations IA',
          tech: ['React', 'TypeScript', 'HubSpot API', 'N8N'],
          gradient: 'from-violet-600 via-purple-600 to-fuchsia-600',
          icon: Sparkles,
          kpis: ['Lead Technique', 'Gestion Budget', 'Apps Publiques'],
          link: '#'
        },
        {
          title: 'Plateformes E-commerce Groupe',
          description: 'Dev full-stack TypeScript pour Kering et Auchan Retail — architectures microservices haute performance pour environnements retail à forte charge',
          tech: ['TypeScript', 'Node.js', 'PostgreSQL', 'Docker'],
          gradient: 'from-cyan-500 via-blue-600 to-indigo-600',
          icon: Zap,
          kpis: ['Microservices', 'Haute Dispo', 'Scale Entreprise'],
          link: '#'
        },
        {
          title: 'Open-Paas ESN Collaborative',
          description: 'Contributions à la plateforme LINAGORA — système i18n complet front/back + contributions à la lib node-i18n',
          tech: ['Node.js', 'Angular', 'MongoDB', 'i18n'],
          gradient: 'from-emerald-500 via-teal-600 to-cyan-600',
          icon: Cloud,
          kpis: ['Open Source', 'i18n Complet', 'Archi Scalable'],
          link: '#'
        },
        {
          title: 'Solutions Métier Sur-Mesure',
          description: 'Applications métier custom — web apps, plateformes marketing, audits sécu et conseil archi technique',
          tech: ['Vue.js 3', 'Node.js', 'AWS', 'Tailwind CSS'],
          gradient: 'from-orange-500 via-red-600 to-pink-600',
          icon: Terminal,
          kpis: ['Startup → Grands Comptes', '9 Ans', 'End-to-End'],
          link: '#'
        }
      ]
    },

    // Section À Propos
    about: {
      title: 'À Propos',
      techStackTitle: 'Stack Technique & Expertises',
      highlights: [
        '✓ Applications en production a fort volume de trafic',
        '✓ Management d\'équipes tech et pilotage de budgets',
        '✓ Contributeur open source — du code qui tourne en prod',
        '✓ Maîtrise complète du cycle : archi → dev → déploiement',
        '✓ Projets livrés de la startup au Fortune 500'
      ],
      techStack: [
        { icon: Globe, label: 'Frontend', items: 'React, Vue.js 3, Tailwind, Vite' },
        { icon: Server, label: 'Backend', items: 'Node.js, TypeScript, RESTful APIs, WebSocket' },
        { icon: Database, label: 'Databases', items: 'PostgreSQL, MongoDB, Redis, Prisma' },
        { icon: Box, label: 'DevOps', items: 'Docker, AWS, CI/CD, Nginx, ELK' }
      ]
    },

    // Boutons
    buttons: {
      viewMyWork: 'Voir mes projets',
      getInTouch: 'Me contacter'
    },

    // Pied de page
    footer: {
      copyright: 'Eddy Trotin'
    }
  }
};

export type Language = 'en' | 'fr';
export type Translations = typeof translations.en;

