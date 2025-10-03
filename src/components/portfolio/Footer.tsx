import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer className="relative py-8 px-6 text-center text-gray-500 border-t border-white/10">
      <p>{t.footer.copyright}</p>
    </footer>
  );
}

