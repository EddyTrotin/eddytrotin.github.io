import React from 'react';

interface FooterProps {
  copyright: string;
}

export default function Footer({ copyright }: FooterProps) {
  return (
    <footer className="relative py-8 px-6 text-center text-gray-500 border-t border-white/10">
      <p>{copyright}</p>
    </footer>
  );
}

