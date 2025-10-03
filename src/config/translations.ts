import { Github, Linkedin, Mail, Sparkles, Zap, Cloud, Terminal, Globe, Server, Database, Box } from 'lucide-react';

export const translations = {
  en: {
    // Personal Information
    personal: {
      name: 'Eddy Trotin',
      title: 'AI & Full Stack Engineer',
      subtitle: 'Building production-ready systems from concept to production — specializing in TypeScript, microservices, and AI-powered automation',
      availability: 'Open to new opportunities',
      tagline: {
        prefix: 'Building',
        rotating: ['Scalable', 'Innovative', 'Production-Ready', 'Enterprise-Grade', 'Robust', 'Modern'],
        suffix: 'Solutions'
      },
      stats: {
        projectsCompleted: '100+',
        projectsLabel: 'Projects Completed',
        yearsExperience: '10+',
        yearsLabel: 'Years Experience',
        clientSatisfaction: '98%',
        satisfactionLabel: 'Client Satisfaction'
      },
      bio: {
        heading: 'AI & Full Stack Engineer',
        intro: 'I build full-stack systems that scale. Over the past 10 years, I\'ve shipped production applications for startups to world-class companies, working across the entire stack—from database architecture to user interfaces. I write **clean, maintainable code** and believe the best solutions come from understanding both the technical requirements and the **business context**.',
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
      copyright: '© 2025 Eddy Trotin. Built with TypeScript & caffeine.'
    }
  },

  fr: {
    // Informations personnelles
    personal: {
      name: 'Eddy Trotin',
      title: 'Ingénieur IA & Full Stack',
      subtitle: 'Construction de systèmes prêts pour la production du concept à la mise en ligne — spécialisé en TypeScript, microservices et automatisation avec IA',
      availability: 'Ouvert aux opportunités',
      tagline: {
        prefix: 'Construire des Systèmes',
        rotating: ['Évolutifs', 'Innovants', 'Prêts pour la Prod', 'Enterprise', 'Robustes', 'Modernes'],
        suffix: ''
      },
      stats: {
        projectsCompleted: '100+',
        projectsLabel: 'Projets Réalisés',
        yearsExperience: '10+',
        yearsLabel: 'Années d\'Expérience',
        clientSatisfaction: '98%',
        satisfactionLabel: 'Satisfaction Client'
      },
      bio: {
        heading: 'Ingénieur IA & Full Stack',
        intro: 'Je construis des systèmes full-stack qui passent à l\'échelle. Ces 10 dernières années, j\'ai livré des **applications en production** pour des startups et **entreprises de classe mondiale**, en intervenant sur l\'ensemble de la stack—de l\'architecture des bases de données aux interfaces utilisateur. J\'écris du **code propre et maintenable**, convaincu que les meilleures solutions naissent d\'une compréhension à la fois technique et business.',
        passion: 'Ce qui me motive, c\'est de voir les projets passer du **concept initial à la production**. J\'ai **dirigé des équipes de développement**, géré des budgets techniques et contribué à des **projets open source** comme node-i18n. Que ce soit pour mettre en place des applications structurées complexes avec pipelines CI/CD, intégrer des workflows IA avec N8N ou développer des extensions HubSpot personnalisées, je me concentre sur la livraison de systèmes qui fonctionnent vraiment **en production**.'
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
      title: 'Parlons de Votre Prochain Projet',
      description: 'Vous cherchez quelqu\'un qui maîtrise l\'ensemble du cycle de développement ? Je suis disponible pour du travail en freelance, des postes de lead technique ou des défis intéressants nécessitant une expertise full-stack approfondie.',
      sendMessage: 'Envoyer un Message',
      connectLinkedIn: 'Se Connecter sur LinkedIn'
    },

    // Réseaux sociaux
    socials: [
      { icon: Github, href: 'https://github.com/eddytrotin', label: 'GitHub' },
      { icon: Linkedin, href: 'https://linkedin.com/in/eddy-trotin', label: 'LinkedIn' },
      { icon: Mail, href: 'mailto:dev.eddy.trotin@outlook.com', label: 'Email' }
    ],

    // Projets
    projects: {
      title: 'Projets Phares',
      viewProject: 'Voir le Projet',
      items: [
        {
          title: 'Extensions HubSpot CRM & Marketplace',
          description: 'Direction du développement d\'extensions React personnalisées et d\'apps publiques pour HubSpot CRM, incluant workflows N8N et intégrations IA',
          tech: ['React', 'TypeScript', 'HubSpot API', 'N8N'],
          gradient: 'from-violet-600 via-purple-600 to-fuchsia-600',
          icon: Sparkles,
          kpis: ['Lead Technique', 'Gestion Budgétaire', 'Apps Marketplace Publiques'],
          link: '#'
        },
        {
          title: 'Plateforme E-commerce Entreprise',
          description: 'Développement full-stack TypeScript pour le groupe Kering et Auchan Retail—conception d\'architectures microservices pour environnements retail à fort trafic',
          tech: ['TypeScript', 'Node.js', 'PostgreSQL', 'Docker'],
          gradient: 'from-cyan-500 via-blue-600 to-indigo-600',
          icon: Zap,
          kpis: ['Architecture Microservices', 'Haute Disponibilité', 'Échelle Entreprise'],
          link: '#'
        },
        {
          title: 'Open-Paas Réseau Social Entreprise',
          description: 'Contribution à la plateforme de collaboration de LINAGORA—implémentation du système i18n front et back, incluant des contributions à la librairie node-i18n',
          tech: ['Node.js', 'Angular', 'MongoDB', 'i18n'],
          gradient: 'from-emerald-500 via-teal-600 to-cyan-600',
          icon: Cloud,
          kpis: ['Contribution Open Source', 'Internationalisation Complète', 'Architecture Évolutive'],
          link: '#'
        },
        {
          title: 'Suite de Gestion d\'Entreprise',
          description: 'Solutions logicielles sur mesure pour clients variés—applications web, plateformes marketing digital, audits de sécurité et conseil en architecture',
          tech: ['Vue.js 3', 'Node.js', 'AWS', 'Tailwind CSS'],
          gradient: 'from-orange-500 via-red-600 to-pink-600',
          icon: Terminal,
          kpis: ['Startup à Entreprise', '9 Ans d\'Activité', 'Cycle Complet de Projet'],
          link: '#'
        }
      ]
    },

    // Section À Propos
    about: {
      title: 'À Propos de Moi',
      techStackTitle: 'Stack Technique & Expertise',
      highlights: [
        '✓ Systèmes en production gérant des millions d\'utilisateurs pour clients entreprise',
        '✓ Direction d\'équipes cross-fonctionnelles et gestion de budgets techniques',
        '✓ Contributeur open source — code livré qui fonctionne en production',
        '✓ Maîtrise du cycle complet : de l\'architecture au déploiement',
        '✓ Solutions livrées pour startups et entreprises du Fortune 500'
      ],
      techStack: [
        { icon: Globe, label: 'Frontend', items: 'React, Vue.js 3, Tailwind, Vite' },
        { icon: Server, label: 'Backend', items: 'Node.js, TypeScript, RESTful APIs, WebSocket' },
        { icon: Database, label: 'Base de Données', items: 'PostgreSQL, MongoDB, Redis, Prisma' },
        { icon: Box, label: 'DevOps', items: 'Docker, AWS, CI/CD, Nginx, ELK' }
      ]
    },

    // Boutons
    buttons: {
      viewMyWork: 'Voir Mon Travail',
      getInTouch: 'Me Contacter'
    },

    // Pied de page
    footer: {
      copyright: '© 2025 Eddy Trotin. Conçu avec TypeScript & caféine.'
    }
  }
};

export type Language = 'en' | 'fr';
export type Translations = typeof translations.en;

