import React from 'react';
import { ExternalLink, TrendingUp, LucideIcon } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tech: string[];
  gradient: string;
  icon: LucideIcon;
  kpis: string[];
  link?: string;
}

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-16 text-center">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 transition-all"
              style={{
                transform: 'perspective(1000px) rotateX(0deg)',
                transition: 'all 0.5s ease'
              }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = (y - centerY) / 50;
                const rotateY = (centerX - x) / 50;
                e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.01)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
              }}
            >
              {/* Gradient Header */}
              <div className={`h-48 bg-gradient-to-r ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <project.icon size={64} className="opacity-50" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6">{project.description}</p>
                
                {/* Business KPIs */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.kpis.map((kpi, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full text-sm font-medium text-green-300 flex items-center gap-1.5"
                    >
                      <TrendingUp size={14} />
                      {kpi}
                    </span>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <button className="flex items-center gap-2 text-cyan-400 group-hover:gap-4 transition-all cursor-pointer">
                  View Project
                  <ExternalLink size={16} />
                </button>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/0 via-purple-600/0 to-pink-600/0 group-hover:from-cyan-600/10 group-hover:via-purple-600/10 group-hover:to-pink-600/10 transition-all pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

