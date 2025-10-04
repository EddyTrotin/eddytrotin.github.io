import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

// Helper function to render text with bold markers (**text**)
const renderTextWithBold = (text: string) => {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      const boldText = part.slice(2, -2);
      return <strong key={index} className="font-bold text-white">{boldText}</strong>;
    }
    return <span key={index}>{part}</span>;
  });
};

// Custom hook for count-up animation
const useCountUp = (end: number, duration: number = 4000, shouldStart: boolean = false) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!shouldStart || hasAnimated) return;

    setHasAnimated(true);
    let startTime: number | null = null;
    const startValue = 0;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth animation (easeOutCubic) - smoother end than expo
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      
      const currentValue = easedProgress * (end - startValue) + startValue;
      setCount(progress === 1 ? end : Math.round(currentValue));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, shouldStart, hasAnimated]);

  return count;
};

// Helper to parse stat values like "40+", "10+", "100%"
const parseStatValue = (stat: string): { value: number; suffix: string } => {
  const match = stat.match(/^(\d+)(.*)$/);
  if (match) {
    return {
      value: parseInt(match[1], 10),
      suffix: match[2] || ''
    };
  }
  return { value: 0, suffix: '' };
};

export default function About() {
  const { t } = useLanguage();
  const statsRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer to detect when stats card is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 1.0 } // Trigger when 30% of the element is visible
    );

    const currentRef = statsRef.current;
    
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  // Parse stat values
  const projectsStat = parseStatValue(t.personal.stats.projectsCompleted);
  const yearsStat = parseStatValue(t.personal.stats.yearsExperience);
  const satisfactionStat = parseStatValue(t.personal.stats.clientSatisfaction);

  // Animated counts
  const projectsCount = useCountUp(projectsStat.value, 4000, isVisible);
  const yearsCount = useCountUp(yearsStat.value, 4000, isVisible);
  const satisfactionCount = useCountUp(satisfactionStat.value, 4000, isVisible);

  return (
    <section id="about" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-16 text-center">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            {t.about.title}
          </span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Main Bio Card */}
          <div className="md:col-span-2 group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-cyan-500/50 transition-all overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">{t.personal.bio.heading}</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                {renderTextWithBold(t.personal.bio.intro)}
              </p>
              <p className="text-gray-400 leading-relaxed">
                {renderTextWithBold(t.personal.bio.passion)}
              </p>
            </div>
          </div>

          {/* Stats Card */}
          <div 
            ref={statsRef}
            className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-purple-500/50 transition-all overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10">
              <div className="mb-6">
                <div className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-2">
                  {projectsCount}{projectsStat.suffix}
                </div>
                <div className="text-gray-400">{t.personal.stats.projectsLabel}</div>
              </div>
              <div className="mb-6">
                <div className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-2">
                  {yearsCount}{yearsStat.suffix}
                </div>
                <div className="text-gray-400">{t.personal.stats.yearsLabel}</div>
              </div>
              <div>
                <div className="text-5xl font-bold bg-gradient-to-r from-pink-400 to-orange-600 bg-clip-text text-transparent mb-2">
                  {satisfactionCount}{satisfactionStat.suffix}
                </div>
                <div className="text-gray-400">{t.personal.stats.satisfactionLabel}</div>
              </div>
            </div>
          </div>

          {/* Key Highlights Card */}
          <div className="md:col-span-3 group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-emerald-500/50 transition-all overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/10 to-cyan-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                What Sets Me Apart
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {t.about.highlights.map((highlight, i) => (
                  <div 
                    key={i} 
                    className="flex items-start gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    <span className="text-emerald-400 text-lg leading-none mt-0.5">✓</span>
                    <span className="text-gray-300 leading-relaxed flex-1">
                      {highlight.replace('✓ ', '')}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tech Stack Card */}
          <div className="md:col-span-3 group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-cyan-500/50 transition-all overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-6">{t.about.techStackTitle}</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {t.about.techStack.map((item, i) => (
                  <div key={i} className="flex flex-col gap-2">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-600/20 flex items-center justify-center">
                      <item.icon size={24} className="text-cyan-400" />
                    </div>
                    <div>
                      <div className="font-semibold">{item.label}</div>
                      <div className="text-sm text-gray-400">{item.items}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

