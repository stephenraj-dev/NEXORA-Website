
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="py-24 bg-white dark:bg-[#0B1120]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="rounded-[2.5rem] bg-gradient-to-br from-indigo-600 to-purple-700 dark:from-indigo-900 dark:to-purple-900 p-12 md:p-16 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-heading">
              Ready to build your next software product?
            </h2>
            <p className="text-indigo-100 text-lg mb-10 max-w-2xl mx-auto">
              Join industry leaders who trust NEXORA to deliver robust, scalable, and beautifully designed digital solutions.
            </p>
            <Link to="/contact" className="px-8 py-4 bg-white text-indigo-600 hover:bg-slate-50 rounded-xl font-bold transition-colors shadow-xl flex items-center justify-center gap-2 mx-auto group w-max">
              Start Your Transformation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default CTA;
