
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-24 bg-white dark:bg-[#1A1514]">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-indigo-600 dark:text-indigo-400 font-semibold tracking-wider uppercase text-sm mb-3">About NEXORA</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 font-heading">
              Transforming complex challenges into elegant digital solutions.
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-8 text-lg leading-relaxed">
              Founded on the principles of engineering excellence and design thinking, NEXORA operates at the intersection of technology and business strategy. We don't just write code; we build resilient, scalable platforms that drive real enterprise value.
            </p>
            <ul className="space-y-4">
              {['Award-winning engineering team', 'ISO 27001 Certified Security', 'Agile delivery methodology'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="text-indigo-600 dark:text-indigo-400 shrink-0" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative aspect-square md:aspect-video lg:aspect-square rounded-3xl overflow-hidden shadow-2xl">
               <img 
                 src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                 alt="NEXORA Team Collaboration" 
                 className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
               <div className="absolute bottom-0 left-0 p-8">
                 <p className="text-white font-bold text-xl mb-2 font-heading">Empowering Teams</p>
                 <p className="text-slate-300 text-sm">Building software that matters.</p>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
