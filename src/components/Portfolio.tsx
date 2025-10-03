"use client";
import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, Code, Database, Globe, Server, Sparkles, Terminal, Zap, ExternalLink, ArrowRight, Box, Cpu, Cloud, TrendingUp } from 'lucide-react';

export default function Portfolio() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeSection, setActiveSection] = useState('home');
  const heroRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    // Generate particle positions once
    particlesRef.current = [...Array(60)].map(() => ({
      size: Math.random() * 2 + 0.5,
      baseX: Math.random() * 100,
      baseY: Math.random() * 100,
      opacity: Math.random() * 0.4 + 0.2,
      duration: Math.random() * 25 + 20,
      delay: Math.random() * 10
    }));
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      
      // Check if we're near the bottom of the page (within 100px)
      const isNearBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;
      
      if (isNearBottom) {
        setActiveSection('contact');
        return;
      }
      
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (!element) return;
    
    const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - 80; // 80px offset for navbar
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1000; // 1 second duration
    let start = null;

    const animation = (currentTime) => {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const progress = Math.min(timeElapsed / duration, 1);
      
      // Easing function for smooth animation
      const ease = progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;
      
      window.scrollTo(0, startPosition + distance * ease);
      
      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  const projects = [
    {
      title: 'AI SaaS Platform',
      description: 'Enterprise-grade AI platform with real-time processing and advanced analytics',
      tech: ['Next.js', 'Python', 'TensorFlow', 'AWS'],
      gradient: 'from-violet-600 via-purple-600 to-fuchsia-600',
      icon: Sparkles,
      kpis: ['40% Cost Reduction', '99.9% Uptime', '3x Faster Processing']
    },
    {
      title: 'DeFi Exchange',
      description: 'Decentralized finance platform with smart contract integration',
      tech: ['React', 'Solidity', 'Web3.js', 'Node.js'],
      gradient: 'from-cyan-500 via-blue-600 to-indigo-600',
      icon: Zap,
      kpis: ['$5M+ Daily Volume', 'Zero Security Breaches', '50K Active Users']
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Multi-cloud orchestration platform with automated deployment',
      tech: ['Kubernetes', 'Docker', 'Go', 'Terraform'],
      gradient: 'from-emerald-500 via-teal-600 to-cyan-600',
      icon: Cloud,
      kpis: ['Zero Downtime Deployments', '60% Faster Builds', '80% Less Manual Work']
    },
    {
      title: 'Real-time Collaboration',
      description: 'WebRTC-powered collaboration suite with AI-assisted features',
      tech: ['Vue.js', 'WebRTC', 'Redis', 'GraphQL'],
      gradient: 'from-orange-500 via-red-600 to-pink-600',
      icon: Terminal,
      kpis: ['30% More Productivity', '100K+ Concurrent Users', '45% Faster Meetings']
    }
  ];

  const skills = [
    { name: 'React & Next.js', level: 95, color: 'bg-cyan-500' },
    { name: 'Node.js & Python', level: 90, color: 'bg-green-500' },
    { name: 'TypeScript', level: 92, color: 'bg-blue-500' },
    { name: 'Cloud & DevOps', level: 88, color: 'bg-purple-500' },
    { name: 'Database Design', level: 85, color: 'bg-pink-500' },
    { name: 'UI/UX Design', level: 80, color: 'bg-orange-500' }
  ];

  return (
    <div className="bg-black text-white min-h-screen overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20"></div>
        {/* Subtle grid pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.05) 1px, transparent 0)',
          backgroundSize: '50px 50px'
        }}></div>
        {/* Smoothly animated stars with mouse avoidance */}
        <div className="absolute inset-0">
          {particlesRef.current.map((particle, i) => {
            // Calculate particle position in pixels
            const particleX = (particle.baseX / 100) * window.innerWidth;
            const particleY = (particle.baseY / 100) * window.innerHeight;
            
            // Calculate distance from mouse
            const dx = mousePosition.x - particleX;
            const dy = mousePosition.y - particleY;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            // Repulsion effect - particles move away from mouse within 150px radius
            const repulsionRadius = 150;
            let offsetX = 0;
            let offsetY = 0;
            
            if (distance < repulsionRadius && distance > 0) {
              const force = (repulsionRadius - distance) / repulsionRadius;
              const angle = Math.atan2(dy, dx);
              offsetX = -Math.cos(angle) * force * 30;
              offsetY = -Math.sin(angle) * force * 30;
            }
            
            const animationType = i % 2 === 0 ? 'smoothFloat1' : 'smoothFloat2';
            
            return (
              <div
                key={i}
                className="absolute pointer-events-none"
                style={{
                  left: particle.baseX + '%',
                  top: particle.baseY + '%',
                  transform: `translate(${offsetX}px, ${offsetY}px)`,
                  transition: 'transform 0.3s ease-out'
                }}
              >
                <div
                  className="rounded-full bg-white"
                  style={{
                    width: particle.size + 'px',
                    height: particle.size + 'px',
                    opacity: particle.opacity,
                    animation: `${animationType} ${particle.duration}s ease-in-out infinite`,
                    animationDelay: `${particle.delay}s`
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <button 
            onClick={() => scrollToSection('home')}
            className="text-2xl font-bold flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center">
              <Code size={20} />
            </div>
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              DevPortfolio
            </span>
          </button>
          <div className="hidden md:flex gap-8">
            {['home', 'about', 'projects', 'contact'].map(section => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize transition-all relative group cursor-pointer ${
                  activeSection === section ? 'text-cyan-400' : 'text-gray-400 hover:text-white'
                }`}
              >
                {section}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-600 transition-all ${
                  activeSection === section ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" ref={heroRef} className="relative min-h-screen flex items-center justify-center px-6">
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          {/* Floating Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-8 animate-fade-in">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm text-gray-300">Available for new projects</span>
          </div>

          {/* Main Heading with Gradient Animation */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            <span className="inline-block animate-slide-up">Crafting</span>{' '}
            <span className="inline-block animate-slide-up" style={{ animationDelay: '0.1s' }}>Digital</span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient inline-block animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Experiences
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.3s' }}>
            Full Stack Developer specializing in building exceptional digital experiences with modern technologies
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <button
              onClick={() => scrollToSection('projects')}
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full font-semibold overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-2 cursor-pointer">
                View My Work
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 groupFhover:opacity-100 transition-opacity" />
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full font-semibold hover:bg-white/10 transition-all cursor-pointer"
            >
              Get In Touch
            </button>
          </div>

          {/* Social Links with Hover Effects */}
          <div className="flex gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.5s' }}>
            {[
              { icon: Github, href: 'https://github.com', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:contact@example.com', label: 'Email' }
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full hover:border-cyan-500/50 transition-all"
              >
                <Icon size={24} className="group-hover:text-cyan-400 transition-colors" />
                <span className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1 bg-black border border-white/10 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {label}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
      </section>

      {/* About Section - Bento Grid */}
      <section id="about" className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-16 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Main Card */}
            <div className="md:col-span-2 group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-cyan-500/50 transition-all overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">Full Stack Developer & Creative Technologist</h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  I transform ideas into elegant, high-performance digital solutions. With 5+ years of experience, 
                  I specialize in building scalable applications that combine cutting-edge technology with 
                  exceptional user experience.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  My passion lies in solving complex problems and creating products that make a real impact. 
                  I thrive in collaborative environments and love mentoring junior developers.
                </p>
              </div>
            </div>

            {/* Stats Card */}
            <div className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-purple-500/50 transition-all overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="mb-6">
                  <div className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-2">
                    50+
                  </div>
                  <div className="text-gray-400">Projects Completed</div>
                </div>
                <div className="mb-6">
                  <div className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-2">
                    5+
                  </div>
                  <div className="text-gray-400">Years Experience</div>
                </div>
                <div>
                  <div className="text-5xl font-bold bg-gradient-to-r from-pink-400 to-orange-600 bg-clip-text text-transparent mb-2">
                    100%
                  </div>
                  <div className="text-gray-400">Client Satisfaction</div>
                </div>
              </div>
            </div>

            {/* Tech Stack Card */}
            <div className="md:col-span-3 group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-cyan-500/50 transition-all overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-6">Tech Stack & Expertise</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { icon: Globe, label: 'Frontend', items: 'React, Next.js, Vue' },
                    { icon: Server, label: 'Backend', items: 'Node.js, Python, Go' },
                    { icon: Database, label: 'Database', items: 'PostgreSQL, MongoDB' },
                    { icon: Box, label: 'DevOps', items: 'Docker, K8s, AWS' }
                  ].map((item, i) => (
                    <div key={i} className="flex flex-col gap-2">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-600/20 flex items-center justify-center">
                        <item.icon size={24} className="text-cyan-400" />
                      </div>
                      <div>
                        <div className="font-semibold">{item.label}</div>
                        <div className="text-sm text-gray-400">{item.items}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-16 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 transition-all"
                style={{
                  transform: 'perspective(1000px) rotateX(0deg)',
                  transition: 'all 0.5s ease'
                }}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  const centerX = rect.width / 2;
                  const centerY = rect.height / 2;
                  const rotateX = (y - centerY) / 50;
                  const rotateY = (centerX - x) / 50;
                  e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.01)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
                }}
              >
                {/* Gradient Header */}
                <div className={`h-48 bg-gradient-to-r ${project.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <project.icon size={64} className="opacity-50" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-6">{project.description}</p>
                  
                  {/* Business KPIs */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.kpis.map((kpi, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full text-sm font-medium text-green-300 flex items-center gap-1.5"
                      >
                        <TrendingUp size={14} />
                        {kpi}
                      </span>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  <button className="flex items-center gap-2 text-cyan-400 group-hover:gap-4 transition-all cursor-pointer">
                    View Project
                    <ExternalLink size={16} />
                  </button>
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/0 via-purple-600/0 to-pink-600/0 group-hover:from-cyan-600/10 group-hover:via-purple-600/10 group-hover:to-pink-600/10 transition-all pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-96 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Let's Build Something Amazing
            </span>
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="mailto:contact@example.com"
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full font-semibold overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <Mail size={20} />
                Send Message
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full font-semibold hover:bg-white/10 hover:border-cyan-500/50 transition-all flex items-center justify-center gap-2"
            >
              <Linkedin size={20} />
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 px-6 text-center text-gray-500 border-t border-white/10">
        <p>© 2025 Full Stack Developer. Crafted with passion & code.</p>
      </footer>

      <style jsx>{`
        @keyframes smoothFloat1 {
          0%, 100% {
            transform: translate(0, 0);
          }
          33% {
            transform: translate(8px, -8px);
          }
          66% {
            transform: translate(-8px, 8px);
          }
        }

        @keyframes smoothFloat2 {
          0%, 100% {
            transform: translate(0, 0);
          }
          33% {
            transform: translate(-8px, -8px);
          }
          66% {
            transform: translate(8px, 8px);
          }
        }

        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
}