import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import RotatingText from './RotatingText';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const { t } = useLanguage();
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6">
      <div className="relative z-10 max-w-6xl mx-auto text-center w-full">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6 sm:mb-8 animate-fade-in">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-xs sm:text-sm text-gray-300">{t.personal.availability}</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 leading-tight px-2">
          <div className="animate-slide-up">
            {t.personal.tagline.prefix}
          </div>
          <div 
            className="animate-slide-up" 
            style={{ animationDelay: '0.1s' }}
          >
            <RotatingText 
              words={t.personal.tagline.rotating}
              className="bg-white bg-clip-text text-transparent font-bold"
            />
          </div>
          <div 
            className="animate-slide-up" 
            style={{ animationDelay: '0.2s' }}
          >
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
              {t.personal.tagline.suffix}
            </span>
          </div>
        </h1>

        <p 
          className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-8 sm:mb-12 max-w-3xl mx-auto animate-slide-up px-2" 
          style={{ animationDelay: '0.3s' }}
        >
          {t.personal.subtitle}
        </p>

        {/* CTA Buttons */}
        <div 
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12 sm:mb-16 animate-slide-up px-4 sm:px-0" 
          style={{ animationDelay: '0.4s' }}
        >
          <button
            onClick={() => onNavigate('projects')}
            className="group relative px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full font-semibold overflow-hidden text-sm sm:text-base"
          >
            <span className="relative z-10 flex items-center justify-center gap-2 cursor-pointer">
              {t.buttons.viewMyWork}
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
          <button
            onClick={() => onNavigate('contact')}
            className="px-6 py-3 sm:px-8 sm:py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full font-semibold hover:bg-white/10 transition-all cursor-pointer text-sm sm:text-base"
          >
            {t.buttons.getInTouch}
          </button>
        </div>

        {/* Social Links */}
        <div 
          className="flex gap-3 sm:gap-4 justify-center animate-slide-up" 
          style={{ animationDelay: '0.5s' }}
        >
          {t.socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-3 sm:p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full hover:border-cyan-500/50 transition-all"
            >
              <Icon size={20} className="sm:w-6 sm:h-6 group-hover:text-cyan-400 transition-colors" />
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
        <div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl animate-pulse" 
          style={{ animationDelay: '1s' }} 
        />
      </div>

      <style jsx>{`
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
    </section>
  );
}

