
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-[90vh] flex items-center justify-center">
      
      {/* Background Grid & Overlays */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay dark:opacity-10 pointer-events-none z-0"></div>
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-indigo-50/80 dark:from-[#0B1120] to-transparent pointer-events-none z-0"></div>
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-white dark:from-[#0B1120] to-transparent pointer-events-none z-0"></div>

      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pointer-events-none">
        <div className="text-center max-w-4xl mx-auto pointer-events-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-8 border border-indigo-100 dark:border-indigo-500/20"
          >
            <Activity size={16} />
            <span>NEXORA Enterprise Solutions v2.0 is live</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-white mb-6 font-heading"
          >
            Building Tomorrow's <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
              Digital Solutions
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            We partner with global enterprises to design, develop, and scale world-class software products, AI platforms, and cloud infrastructure.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/contact" className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-medium transition-all shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-2 group">
              Start Free Trial
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/solutions" className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-[#1E293B] hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 rounded-xl font-medium transition-all shadow-sm flex items-center justify-center">
              View Solutions
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
