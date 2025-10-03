"use client";
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations, Language, Translations } from '@/config/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
  isTransitioning: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('portfolio-language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'fr')) {
      setLanguageState(savedLanguage);
    }
  }, []);

  // Save language to localStorage when it changes with transition
  const setLanguage = (lang: Language) => {
    if (lang === language) return; // Don't transition if same language
    
    setIsTransitioning(true);
    
    // Wait for fade out animation
    setTimeout(() => {
      setLanguageState(lang);
      localStorage.setItem('portfolio-language', lang);
      
      // Wait a bit then fade back in
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 150);
  };

  const value: LanguageContextType = {
    language,
    setLanguage,
    t: translations[language],
    isTransitioning
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}


