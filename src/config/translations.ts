import { Github, Linkedin, Mail, Sparkles, Zap, Cloud, Terminal, Globe, Server, Database, Box } from 'lucide-react';

export const translations = {
  en: {
    // Personal Information
    personal: {
      name: 'DevPortfolio',
      title: 'Full Stack Developer',
      subtitle: 'Full Stack Developer specializing in building exceptional digital experiences with modern technologies',
      availability: 'Available for new projects',
      tagline: {
        prefix: 'Crafting Digital',
        highlight: 'Experiences'
      },
      stats: {
        projectsCompleted: '50+',
        projectsLabel: 'Projects Completed',
        yearsExperience: '5+',
        yearsLabel: 'Years Experience',
        clientSatisfaction: '100%',
        satisfactionLabel: 'Client Satisfaction'
      },
      bio: {
        heading: 'Full Stack Developer & Creative Technologist',
        intro: 'I transform ideas into elegant, high-performance digital solutions. With 5+ years of experience, I specialize in building scalable applications that combine cutting-edge technology with exceptional user experience.',
        passion: 'My passion lies in solving complex problems and creating products that make a real impact. I thrive in collaborative environments and love mentoring junior developers.'
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
      email: 'contact@example.com',
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      title: 'Let\'s Build Something Amazing',
      description: 'Have a project in mind? Let\'s discuss how we can work together to bring your ideas to life.',
      sendMessage: 'Send Message',
      connectLinkedIn: 'Connect on LinkedIn'
    },

    // Social Links
    socials: [
      { icon: Github, href: 'https://github.com', label: 'GitHub' },
      { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
      { icon: Mail, href: 'mailto:contact@example.com', label: 'Email' }
    ],

    // Projects
    projects: {
      title: 'Featured Projects',
      viewProject: 'View Project',
      items: [
        {
          title: 'AI SaaS Platform',
          description: 'Enterprise-grade AI platform with real-time processing and advanced analytics',
          tech: ['Next.js', 'Python', 'TensorFlow', 'AWS'],
          gradient: 'from-violet-600 via-purple-600 to-fuchsia-600',
          icon: Sparkles,
          kpis: ['40% Cost Reduction', '99.9% Uptime', '3x Faster Processing'],
          link: '#'
        },
        {
          title: 'DeFi Exchange',
          description: 'Decentralized finance platform with smart contract integration',
          tech: ['React', 'Solidity', 'Web3.js', 'Node.js'],
          gradient: 'from-cyan-500 via-blue-600 to-indigo-600',
          icon: Zap,
          kpis: ['$5M+ Daily Volume', 'Zero Security Breaches', '50K Active Users'],
          link: '#'
        },
        {
          title: 'Cloud Infrastructure',
          description: 'Multi-cloud orchestration platform with automated deployment',
          tech: ['Kubernetes', 'Docker', 'Go', 'Terraform'],
          gradient: 'from-emerald-500 via-teal-600 to-cyan-600',
          icon: Cloud,
          kpis: ['Zero Downtime Deployments', '60% Faster Builds', '80% Less Manual Work'],
          link: '#'
        },
        {
          title: 'Real-time Collaboration',
          description: 'WebRTC-powered collaboration suite with AI-assisted features',
          tech: ['Vue.js', 'WebRTC', 'Redis', 'GraphQL'],
          gradient: 'from-orange-500 via-red-600 to-pink-600',
          icon: Terminal,
          kpis: ['30% More Productivity', '100K+ Concurrent Users', '45% Faster Meetings'],
          link: '#'
        }
      ]
    },

    // About Section
    about: {
      title: 'About Me',
      techStackTitle: 'Tech Stack & Expertise',
      techStack: [
        { icon: Globe, label: 'Frontend', items: 'React, Next.js, Vue' },
        { icon: Server, label: 'Backend', items: 'Node.js, Python, Go' },
        { icon: Database, label: 'Database', items: 'PostgreSQL, MongoDB' },
        { icon: Box, label: 'DevOps', items: 'Docker, K8s, AWS' }
      ]
    },

    // Buttons
    buttons: {
      viewMyWork: 'View My Work',
      getInTouch: 'Get In Touch'
    },

    // Footer
    footer: {
      copyright: '© 2025 Full Stack Developer. Crafted with passion & code.'
    }
  },

  fr: {
    // Informations personnelles
    personal: {
      name: 'DevPortfolio',
      title: 'Développeur Full Stack',
      subtitle: 'Développeur Full Stack spécialisé dans la création d\'expériences numériques exceptionnelles avec des technologies modernes',
      availability: 'Disponible pour de nouveaux projets',
      tagline: {
        prefix: 'Créer des',
        highlight: 'Expériences Numériques'
      },
      stats: {
        projectsCompleted: '50+',
        projectsLabel: 'Projets Réalisés',
        yearsExperience: '5+',
        yearsLabel: 'Années d\'Expérience',
        clientSatisfaction: '100%',
        satisfactionLabel: 'Satisfaction Client'
      },
      bio: {
        heading: 'Développeur Full Stack & Technologue Créatif',
        intro: 'Je transforme les idées en solutions numériques élégantes et performantes. Avec plus de 5 ans d\'expérience, je me spécialise dans la création d\'applications évolutives qui allient technologie de pointe et expérience utilisateur exceptionnelle.',
        passion: 'Ma passion réside dans la résolution de problèmes complexes et la création de produits qui ont un réel impact. Je m\'épanouis dans les environnements collaboratifs et j\'adore former les développeurs juniors.'
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
      email: 'contact@example.com',
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      title: 'Créons Quelque Chose d\'Extraordinaire',
      description: 'Vous avez un projet en tête ? Discutons de la manière dont nous pouvons travailler ensemble pour donner vie à vos idées.',
      sendMessage: 'Envoyer un Message',
      connectLinkedIn: 'Se Connecter sur LinkedIn'
    },

    // Réseaux sociaux
    socials: [
      { icon: Github, href: 'https://github.com', label: 'GitHub' },
      { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
      { icon: Mail, href: 'mailto:contact@example.com', label: 'Email' }
    ],

    // Projets
    projects: {
      title: 'Projets Phares',
      viewProject: 'Voir le Projet',
      items: [
        {
          title: 'Plateforme SaaS IA',
          description: 'Plateforme IA de niveau entreprise avec traitement en temps réel et analyses avancées',
          tech: ['Next.js', 'Python', 'TensorFlow', 'AWS'],
          gradient: 'from-violet-600 via-purple-600 to-fuchsia-600',
          icon: Sparkles,
          kpis: ['40% Réduction des Coûts', '99.9% Disponibilité', '3x Plus Rapide'],
          link: '#'
        },
        {
          title: 'Exchange DeFi',
          description: 'Plateforme de finance décentralisée avec intégration de contrats intelligents',
          tech: ['React', 'Solidity', 'Web3.js', 'Node.js'],
          gradient: 'from-cyan-500 via-blue-600 to-indigo-600',
          icon: Zap,
          kpis: ['5M$+ Volume Quotidien', 'Zéro Faille de Sécurité', '50K Utilisateurs Actifs'],
          link: '#'
        },
        {
          title: 'Infrastructure Cloud',
          description: 'Plateforme d\'orchestration multi-cloud avec déploiement automatisé',
          tech: ['Kubernetes', 'Docker', 'Go', 'Terraform'],
          gradient: 'from-emerald-500 via-teal-600 to-cyan-600',
          icon: Cloud,
          kpis: ['Déploiements Sans Interruption', '60% Builds Plus Rapides', '80% Moins de Travail Manuel'],
          link: '#'
        },
        {
          title: 'Collaboration Temps Réel',
          description: 'Suite de collaboration basée sur WebRTC avec fonctionnalités assistées par IA',
          tech: ['Vue.js', 'WebRTC', 'Redis', 'GraphQL'],
          gradient: 'from-orange-500 via-red-600 to-pink-600',
          icon: Terminal,
          kpis: ['30% Plus Productif', '100K+ Utilisateurs Simultanés', '45% Réunions Plus Rapides'],
          link: '#'
        }
      ]
    },

    // Section À Propos
    about: {
      title: 'À Propos de Moi',
      techStackTitle: 'Stack Technique & Expertise',
      techStack: [
        { icon: Globe, label: 'Frontend', items: 'React, Next.js, Vue' },
        { icon: Server, label: 'Backend', items: 'Node.js, Python, Go' },
        { icon: Database, label: 'Base de Données', items: 'PostgreSQL, MongoDB' },
        { icon: Box, label: 'DevOps', items: 'Docker, K8s, AWS' }
      ]
    },

    // Boutons
    buttons: {
      viewMyWork: 'Voir Mon Travail',
      getInTouch: 'Me Contacter'
    },

    // Pied de page
    footer: {
      copyright: '© 2025 Développeur Full Stack. Créé avec passion & code.'
    }
  }
};

export type Language = 'en' | 'fr';
export type Translations = typeof translations.en;

