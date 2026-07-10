import React from 'react';
import { motion } from 'framer-motion';
import ParticleNetwork from './ParticleNetwork';

const NetworkSection = () => {
  return (
    <section className="relative py-32 bg-slate-50 dark:bg-[#0B1120] overflow-hidden min-h-[80vh] flex items-center border-t border-slate-200 dark:border-slate-800">
      {/* Background Interactive Particles */}
      <ParticleNetwork />
      
      {/* Overlay Gradients to fade edges */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50/80 dark:from-[#0B1120]/80 via-transparent to-slate-50/80 dark:to-[#0B1120]/80 pointer-events-none z-0"></div>

      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pointer-events-none w-full">
        <div className="text-center max-w-3xl mx-auto pointer-events-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-indigo-50 dark:bg-indigo-500/10 rounded-full px-4 py-1.5 mb-8 border border-indigo-100 dark:border-indigo-500/20 backdrop-blur-sm"
          >
            <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">Global Infrastructure</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 font-heading tracking-tight"
          >
            Connected. <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-sky-500 dark:from-indigo-400 dark:to-sky-400">Everywhere.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 dark:text-slate-400"
          >
            Interact with our ultra-low latency global network. Move your cursor to see the connection nodes respond instantly across the globe.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default NetworkSection;
