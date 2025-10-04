import { Github, Linkedin, Mail, Sparkles, Zap, Cloud, Terminal, Globe, Server, Database, Box } from 'lucide-react';

export const portfolioConfig = {
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
      projectsCompleted: '40+',
      yearsExperience: '10+',
      clientSatisfaction: '100%'
    },
    bio: {
      intro: 'I build full-stack systems that scale. Over the past 10 years, I\'ve shipped **production applications** for startups to **world-class companies**, working across the entire stack—from database architecture to user interfaces. I write **clean, maintainable code** and believe the best solutions come from understanding both the technical requirements and the business context.',
      passion: 'What drives me is seeing projects go from **initial concept to production**. I\'ve **led development teams**, managed technical budgets, and contributed to **open-source projects** like node-i18n. Whether it\'s setting up complex structured app with CI/CD pipelines, integrating AI workflows with N8N, or building custom HubSpot extensions, I focus on delivering systems that actually work in **the real world**.'
    }
  },

  // Contact Information
  contact: {
    email: 'dev.eddy.trotin@outlook.com',
    github: 'https://github.com/eddytrotin',
    linkedin: 'https://linkedin.com/in/eddy-trotin',
    title: 'Let\'s Talk About Your Next Success',
    description: 'Looking for someone who can handle the full development lifecycle? I\'m available for contract work, technical leadership roles, or interesting challenges that require deep full-stack expertise.'
  },

  // Social Links
  socials: [
    { 
      icon: Github, 
      href: 'https://github.com/eddytrotin', 
      label: 'GitHub' 
    },
    { 
      icon: Linkedin, 
      href: 'https://linkedin.com/in/eddy-trotin', 
      label: 'LinkedIn' 
    },
    { 
      icon: Mail, 
      href: 'mailto:dev.eddy.trotin@outlook.com', 
      label: 'Email' 
    }
  ],

  // Projects
  projects: [
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
  ],

  // Skills
  skills: [
    { name: 'TypeScript & Node.js', level: 95, color: 'bg-cyan-500' },
    { name: 'React & Vue.js', level: 93, color: 'bg-green-500' },
    { name: 'AI & Automation', level: 88, color: 'bg-blue-500' },
    { name: 'Cloud & DevOps', level: 90, color: 'bg-purple-500' },
    { name: 'Database Systems', level: 92, color: 'bg-pink-500' },
    { name: 'System Architecture', level: 91, color: 'bg-orange-500' }
  ],

  // Tech Stack
  techStack: [
    { 
      icon: Globe, 
      label: 'Frontend', 
      items: 'React, Vue.js 3, Tailwind, Vite' 
    },
    { 
      icon: Server, 
      label: 'Backend', 
      items: 'Node.js, TypeScript, RESTful APIs, WebSocket' 
    },
    { 
      icon: Database, 
      label: 'Database', 
      items: 'PostgreSQL, MongoDB, Redis, Prisma' 
    },
    { 
      icon: Box, 
      label: 'DevOps', 
      items: 'Docker, AWS, CI/CD, Nginx, ELK' 
    }
  ],

  // Navigation
  navigation: {
    sections: ['home', 'about', 'projects', 'contact']
  },

  // Footer
  footer: {
    copyright: 'Eddy Trotin'
  }
};

export type PortfolioConfig = typeof portfolioConfig;

