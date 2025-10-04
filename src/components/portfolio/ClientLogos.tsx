import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ClientLogos() {
  const { t } = useLanguage();

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-5xl font-bold mb-16 text-center">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            {t.clients.title}
          </span>
        </h2>

        {/* Infinite Scroll Container */}
        <div className="relative">
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

          {/* Scrolling Track - hover on this to pause */}
          <div className="overflow-hidden scroll-container">
            <div className="flex gap-16 scroll-track">
              {/* First set of logos */}
              {t.clients.items.map((client, index) => (
                <a
                  key={`first-${index}`}
                  href={client.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 cursor-pointer hover:scale-110"
                  title={client.name}
                >
                  <img
                    src={`/logos/${client.logo}`}
                    alt={`${client.name} logo`}
                    className="h-12 w-auto object-contain px-8"
                    onError={(e) => {
                      // Fallback to text if logo fails to load
                      const target = e.currentTarget;
                      target.style.display = 'none';
                      const fallback = document.createElement('span');
                      fallback.className = 'text-2xl font-bold text-white whitespace-nowrap px-8';
                      fallback.textContent = client.name;
                      target.parentElement?.appendChild(fallback);
                    }}
                  />
                </a>
              ))}

              {/* Duplicate set for seamless loop */}
              {t.clients.items.map((client, index) => (
                <a
                  key={`second-${index}`}
                  href={client.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 cursor-pointer hover:scale-110"
                  title={client.name}
                >
                  <img
                    src={`/logos/${client.logo}`}
                    alt={`${client.name} logo`}
                    className="h-12 w-auto object-contain px-8"
                    onError={(e) => {
                      // Fallback to text if logo fails to load
                      const target = e.currentTarget;
                      target.style.display = 'none';
                      const fallback = document.createElement('span');
                      fallback.className = 'text-2xl font-bold text-white whitespace-nowrap px-8';
                      fallback.textContent = client.name;
                      target.parentElement?.appendChild(fallback);
                    }}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .scroll-track {
          animation: scroll-left 40s linear infinite;
          display: flex;
          gap: 4rem;
          width: fit-content;
        }

        .scroll-container:hover .scroll-track {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

