import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="relative flex items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-full p-1 w-24 h-10 cursor-pointer transition-all hover:border-white/20"
    >
      {/* Animated sliding background bubble */}
      <div
        className={`absolute top-1 bottom-1 w-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full transition-all duration-500 ease-out ${
          language === 'en' ? 'left-1' : 'left-[calc(100%-2.75rem)]'
        }`}
      />
      
      {/* Language labels */}
      <span
        className={`relative z-10 flex-1 text-center text-sm font-medium transition-all duration-300 ${
          language === 'en' ? 'text-white' : 'text-gray-400'
        }`}
      >
        EN
      </span>
      <span
        className={`relative z-10 flex-1 text-center text-sm font-medium transition-all duration-300 ${
          language === 'fr' ? 'text-white' : 'text-gray-400'
        }`}
      >
        FR
      </span>
    </button>
  );
}


