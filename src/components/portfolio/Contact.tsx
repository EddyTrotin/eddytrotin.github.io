import React from 'react';
import { Mail, Linkedin } from 'lucide-react';

interface ContactProps {
  title: string;
  description: string;
  email: string;
  linkedin: string;
}

export default function Contact({ title, description, email, linkedin }: ContactProps) {
  return (
    <section id="contact" className="relative py-96 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-8">
          <span className="bg-gradient-to-r from-cyan-400 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            {title}
          </span>
        </h2>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          {description}
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a
            href={`mailto:${email}`}
            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full font-semibold overflow-hidden"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <Mail size={20} />
              Send Message
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full font-semibold hover:bg-white/10 hover:border-cyan-500/50 transition-all flex items-center justify-center gap-2"
          >
            <Linkedin size={20} />
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

