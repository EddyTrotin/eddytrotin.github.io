import React, { useState, useEffect } from 'react';

interface RotatingTextProps {
  words: string[];
  interval?: number;
  className?: string;
}

export default function RotatingText({ words, interval = 3000, className = '' }: RotatingTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, interval);

    return () => clearInterval(timer);
  }, [words.length, interval]);

  // Find the longest word for consistent width
  const longestWord = words.reduce((a, b) => a.length > b.length ? a : b, '');

  return (
    <span className="relative inline-block" style={{ minHeight: '1em' }}>
      <span className={`invisible ${className}`} aria-hidden="true">
        {longestWord}
      </span>
      {words.map((word, index) => (
        <span
          key={index}
          className={`
            ${className}
            absolute left-0 top-0 right-0 text-center whitespace-nowrap
            transition-all duration-500 ease-in-out
            ${index === currentIndex 
              ? 'opacity-100 translate-y-0' 
              : index < currentIndex
              ? 'opacity-0 -translate-y-8'
              : 'opacity-0 translate-y-8'
            }
          `}
        >
          {word}
        </span>
      ))}
    </span>
  );
}

