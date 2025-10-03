import React from 'react';
import { Code } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  sections: string[];
  brandName: string;
}

export default function Navigation({ activeSection, onNavigate, sections, brandName }: NavigationProps) {
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
            {brandName}
          </span>
        </button>
        
        <div className="hidden md:flex gap-8">
          {sections.map(section => (
            <button
              key={section}
              onClick={() => onNavigate(section)}
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
  );
}

