import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="relative flex items-center gap-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full p-1">
      {/* Animated sliding background bubble */}
      <div
        className={`absolute top-1 bottom-1 w-[calc(50%-0.125rem)] bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full transition-all duration-500 ease-out shadow-lg ${
          language === 'en' ? 'left-1' : 'left-[calc(50%+0.125rem)]'
        }`}
      />
      
      <button
        onClick={() => setLanguage('en')}
        className={`relative z-10 px-3 py-1.5 rounded-full text-sm font-medium cursor-pointer transition-all duration-300 w-1/2 ${
          language === 'en'
            ? 'text-white scale-105'
            : 'text-gray-400 hover:text-white'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage('fr')}
        className={`relative z-10 px-3 py-1.5 rounded-full text-sm font-medium cursor-pointer transition-all duration-300 w-1/2 ${
          language === 'fr'
            ? 'text-white scale-105'
            : 'text-gray-400 hover:text-white'
        }`}
      >
        FR
      </button>
    </div>
  );
}


