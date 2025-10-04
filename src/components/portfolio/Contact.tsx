import React from 'react';
import { Mail, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { LampContainer } from '@/components/ui/lamp';

export default function Contact() {
  const { t } = useLanguage();
  return (
    <section id="contact" className="relative overflow-visible">
      <LampContainer className="min-h-[50vh]">
        <></>
      </LampContainer>
      
      <div className="relative -mt-64 pb-16 md:pb-24 lg:pb-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
            className="text-5xl font-bold mb-8"
          >
            <span className="bg-gradient-to-r from-cyan-400 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              {t.contact.title}
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
            className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto"
          >
            {t.contact.description}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <a
              href={`mailto:${t.contact.email}`}
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full font-semibold overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <Mail size={20} />
                {t.contact.sendMessage}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href={t.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full font-semibold hover:bg-white/10 hover:border-cyan-500/50 transition-all flex items-center justify-center gap-2"
            >
              <Linkedin size={20} />
              {t.contact.connectLinkedIn}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

