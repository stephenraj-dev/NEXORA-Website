
import React from 'react';
import { motion } from 'framer-motion';
import { processData } from '../../data/mockData';
import RevealText from '../Common/RevealText';


const Process = () => {
  return (
    <section className="py-24 bg-slate-900 dark:bg-[#060B14] text-white">
      <div className="max-w-360 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <RevealText as="h2" className="text-indigo-400 font-semibold tracking-wider uppercase text-sm mb-3" text="How We Work" />
          <RevealText as="h3" className="text-3xl md:text-4xl font-bold mb-6 font-heading" text="Proven engineering methodology." />
        </div>
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-800 -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-8 relative z-10">
            {processData.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-start lg:items-center text-left lg:text-center group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center font-bold mb-6 shadow-lg shadow-indigo-600/30 lg:mx-auto transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-translate-y-4 group-hover:scale-110">
                  {step.id}
                </div>
                <h4 className="text-lg font-bold mb-2">{step.title}</h4>
                <p className="text-sm text-slate-400">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Process;
