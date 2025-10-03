import React, { useState } from 'react';
import { Code, Menu, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageToggle from './LanguageToggle';

interface NavigationProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export default function Navigation({ activeSection, onNavigate }: NavigationProps) {
  const { t } = useLanguage();
  const sections = ['home', 'about', 'projects', 'contact'] as const;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavigate = (section: string) => {
    onNavigate(section);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <button 
          onClick={() => onNavigate('home')}
          className="text-2xl font-bold flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
        >
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center">
            <Code size={20} />
          </div>
          <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            {t.personal.name}
          </span>
        </button>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">
          {sections.map(section => (
            <button
              key={section}
              onClick={() => onNavigate(section)}
              className={`transition-all relative group cursor-pointer ${
                activeSection === section ? 'text-cyan-400' : 'text-gray-400 hover:text-white'
              }`}
            >
              {t.navigation[section]}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-600 transition-all ${
                activeSection === section ? 'w-full' : 'w-0 group-hover:w-full'
              }`} />
            </button>
          ))}
          <LanguageToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <LanguageToggle />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-gray-400 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full backdrop-blur-xl bg-black/95 border-b border-white/10">
          <div className="px-6 py-4 flex flex-col gap-4">
            {sections.map(section => (
              <button
                key={section}
                onClick={() => handleNavigate(section)}
                className={`text-left py-3 px-4 rounded-lg transition-all ${
                  activeSection === section 
                    ? 'text-cyan-400 bg-white/5' 
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {t.navigation[section]}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

