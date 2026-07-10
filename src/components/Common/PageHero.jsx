import React from 'react';
import { motion } from 'framer-motion';

const PageHero = ({ title, subtitle, bgImage = "https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" }) => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex items-center justify-center min-h-[50vh]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img 
          src={bgImage} 
          alt={title} 
          initial={{ scale: 1.15 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: false }}
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-slate-900/60 mix-blend-multiply pointer-events-none"></div>
        {/* Reduced white blur at the bottom */}
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-white/70 dark:from-[#1A1514] to-transparent pointer-events-none"></div>
      </div>
      
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading tracking-tight"
          >
            {title}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl text-slate-300"
          >
            {subtitle}
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default PageHero;
