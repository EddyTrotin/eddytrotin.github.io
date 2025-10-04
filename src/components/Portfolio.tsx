"use client";
import React, { useState, useEffect } from 'react';
import { LanguageProvider, useLanguage } from '@/contexts/LanguageContext';
import BackgroundEffects from './portfolio/BackgroundEffects';
import Navigation from './portfolio/Navigation';
import Hero from './portfolio/Hero';
import About from './portfolio/About';
import ClientLogos from './portfolio/ClientLogos';
import Projects from './portfolio/Projects';
import Contact from './portfolio/Contact';
import Footer from './portfolio/Footer';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
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
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;
    
    const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - 80;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1000;
    let start: number | null = null;

    const animation = (currentTime: number) => {
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

  return (
    <LanguageProvider>
      <PortfolioContent 
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />
    </LanguageProvider>
  );
}

function PortfolioContent({ 
  activeSection, 
  scrollToSection 
}: { 
  activeSection: string; 
  scrollToSection: (id: string) => void;
}) {
  const { isTransitioning } = useLanguage();

  return (
    <div className="bg-black text-white min-h-screen overflow-hidden">
      <BackgroundEffects />
      
      <Navigation 
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />

      <div className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
        <Hero onNavigate={scrollToSection} />

        <About />

        {/* <ClientLogos /> */}

        <Projects />

        <Contact />

        <Footer />
      </div>
    </div>
  );
}