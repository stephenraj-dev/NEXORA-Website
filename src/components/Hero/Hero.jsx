
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import RevealText from '../Common/RevealText';


const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-[90vh] flex items-center justify-center">
      
      {/* Background Grid & Overlays */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay dark:opacity-10 pointer-events-none z-0"></div>
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-indigo-50/80 dark:from-[#1A1514] to-transparent pointer-events-none z-0"></div>
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-white dark:from-[#1A1514] to-transparent pointer-events-none z-0"></div>

      {/* Massive Outline Text in Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 0.05, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-[15rem] md:text-[20rem] font-bold tracking-tighter text-transparent"
          style={{ WebkitTextStroke: "2px currentColor", color: "var(--color-slate-900)" }}
        >
          NEXORA
        </motion.div>
      </div>

      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pointer-events-none">
        <div className="text-center max-w-4xl mx-auto pointer-events-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-8 border border-indigo-100 dark:border-indigo-500/20"
          >
            <Activity size={16} />
            <span>NEXORA Digital Solutions v2.0 is live</span>
          </motion.div>
          
          {/* Staggered Word Animation */}
          <motion.h1 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
            }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-white mb-6 font-heading flex flex-wrap justify-center gap-x-4"
          >
            <motion.span variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } }}>Building</motion.span>
            <motion.span variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } }}>Tomorrow's</motion.span>
            <br className="hidden md:block w-full" />
            <motion.span variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } }} className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
              Digital
            </motion.span>
            <motion.span variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } }} className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
              Solutions
            </motion.span>
          </motion.h1>
          
          <RevealText as="p" 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed"
           text="We partner with global enterprises to design, develop, and scale world-class software products, AI platforms, and cloud infrastructure." />
          
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.8, type: "spring", bounce: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/contact" className="modern-btn group">
              <span>START FREE TRIAL</span>
              <span className="icon-circle">
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
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
