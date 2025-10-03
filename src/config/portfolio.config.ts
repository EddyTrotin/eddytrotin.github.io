import { Github, Linkedin, Mail, Sparkles, Zap, Cloud, Terminal, Globe, Server, Database, Box } from 'lucide-react';

export const portfolioConfig = {
  // Personal Information
  personal: {
    name: 'DevPortfolio',
    title: 'Full Stack Developer',
    subtitle: 'Full Stack Developer specializing in building exceptional digital experiences with modern technologies',
    availability: 'Available for new projects',
    tagline: {
      prefix: 'Crafting Digital',
      highlight: 'Solutions'
    },
    stats: {
      projectsCompleted: '50+',
      yearsExperience: '5+',
      clientSatisfaction: '100%'
    },
    bio: {
      intro: 'I transform ideas into elegant, high-performance digital solutions. With 5+ years of experience, I specialize in building scalable applications that combine cutting-edge technology with exceptional user experience.',
      passion: 'My passion lies in solving complex problems and creating products that make a real impact. I thrive in collaborative environments and love mentoring junior developers.'
    }
  },

  // Contact Information
  contact: {
    email: 'contact@example.com',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    title: 'Let\'s Build Something Amazing',
    description: 'Have a project in mind? Let\'s discuss how we can work together to bring your ideas to life.'
  },

  // Social Links
  socials: [
    { 
      icon: Github, 
      href: 'https://github.com', 
      label: 'GitHub' 
    },
    { 
      icon: Linkedin, 
      href: 'https://linkedin.com', 
      label: 'LinkedIn' 
    },
    { 
      icon: Mail, 
      href: 'mailto:contact@example.com', 
      label: 'Email' 
    }
  ],

  // Projects
  projects: [
    {
      title: 'AI SaaS Platform',
      description: 'Enterprise-grade AI platform with real-time processing and advanced analytics',
      tech: ['Next.js', 'Python', 'TensorFlow', 'AWS'],
      gradient: 'from-violet-600 via-purple-600 to-fuchsia-600',
      icon: Sparkles,
      kpis: ['40% Cost Reduction', '99.9% Uptime', '3x Faster Processing'],
      link: '#' // Add your project link here
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
  ],

  // Skills
  skills: [
    { name: 'React & Next.js', level: 95, color: 'bg-cyan-500' },
    { name: 'Node.js & Python', level: 90, color: 'bg-green-500' },
    { name: 'TypeScript', level: 92, color: 'bg-blue-500' },
    { name: 'Cloud & DevOps', level: 88, color: 'bg-purple-500' },
    { name: 'Database Design', level: 85, color: 'bg-pink-500' },
    { name: 'UI/UX Design', level: 80, color: 'bg-orange-500' }
  ],

  // Tech Stack
  techStack: [
    { 
      icon: Globe, 
      label: 'Frontend', 
      items: 'React, Next.js, Vue' 
    },
    { 
      icon: Server, 
      label: 'Backend', 
      items: 'Node.js, Python, Go' 
    },
    { 
      icon: Database, 
      label: 'Database', 
      items: 'PostgreSQL, MongoDB' 
    },
    { 
      icon: Box, 
      label: 'DevOps', 
      items: 'Docker, K8s, AWS' 
    }
  ],

  // Navigation
  navigation: {
    sections: ['home', 'about', 'projects', 'contact']
  },

  // Footer
  footer: {
    copyright: '© 2025 Full Stack Developer. Crafted with passion & code.'
  }
};

export type PortfolioConfig = typeof portfolioConfig;

