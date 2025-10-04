import React, { useState, useEffect, useRef } from 'react';

interface Particle {
  size: number;
  baseX: number;
  baseY: number;
  opacity: number;
  duration: number;
  delay: number;
}

export default function BackgroundEffects() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    // Generate particle positions once
    particlesRef.current = [...Array(60)].map(() => ({
      size: Math.random() * 3 + 1,
      baseX: Math.random() * 100,
      baseY: Math.random() * 100,
      opacity: Math.random() * 0.4 + 0.2,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 10
    }));
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <div className="fixed inset-0 z-0">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20"></div>
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.05) 1px, transparent 0)',
            backgroundSize: '50px 50px'
          }}
        />
        
        {/* Animated particles */}
        <div className="absolute inset-0">
          {particlesRef.current.map((particle, i) => {
            const particleX = (particle.baseX / 100) * window.innerWidth;
            const particleY = (particle.baseY / 100) * window.innerHeight;
            
            const dx = mousePosition.x - particleX;
            const dy = mousePosition.y - particleY;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            const repulsionRadius = 150;
            let offsetX = 0;
            let offsetY = 0;
            
            if (distance < repulsionRadius && distance > 0) {
              const force = (repulsionRadius - distance) / repulsionRadius;
              const angle = Math.atan2(dy, dx);
              offsetX = -Math.cos(angle) * force * 30;
              offsetY = -Math.sin(angle) * force * 30;
            }
            
            const animationType = i % 2 === 0 ? 'smoothFloat1' : 'smoothFloat2';
            
            return (
              <div
                key={i}
                className="absolute pointer-events-none"
                style={{
                  left: particle.baseX + '%',
                  top: particle.baseY + '%',
                  transform: `translate(${offsetX}px, ${offsetY}px)`,
                  transition: 'transform 0.3s ease-out'
                }}
              >
                <div
                  className="rounded-full bg-white"
                  style={{
                    width: particle.size + 'px',
                    height: particle.size + 'px',
                    opacity: particle.opacity,
                    animation: `${animationType} ${particle.duration}s ease-in-out infinite`,
                    animationDelay: `${particle.delay}s`
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes smoothFloat1 {
          0%, 100% {
            transform: translate(0, 0);
          }
          33% {
            transform: translate(25px, -25px);
          }
          66% {
            transform: translate(-25px, 25px);
          }
        }

        @keyframes smoothFloat2 {
          0%, 100% {
            transform: translate(0, 0);
          }
          33% {
            transform: translate(-25px, -25px);
          }
          66% {
            transform: translate(25px, 25px);
          }
        }
      `}</style>
    </>
  );
}

