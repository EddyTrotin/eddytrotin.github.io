import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative py-8 px-6 text-center text-gray-500 border-t border-white/10">
      <p>© {currentYear} {t.footer.copyright}</p>
    </footer>
  );
}

