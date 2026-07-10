const fs = require('fs');
const path = require('path');

const writeComponent = (folder, name, content) => {
  const dir = path.join(__dirname, 'src', 'components', folder);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(path.join(dir, `${name}.jsx`), content);
};

// 8. LiveDashboardPreview
writeComponent('Dashboard', 'LiveDashboardPreview', `
import React from 'react';
import { motion } from 'framer-motion';

const LiveDashboardPreview = () => {
  return (
    <section className="py-24 bg-slate-50 dark:bg-[#060B14] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-indigo-600 dark:text-indigo-400 font-semibold tracking-wider uppercase text-sm mb-3">Next-Gen UI</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 font-heading">
            Experience our dashboard aesthetics.
          </h3>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Dashboard Mockup */}
          <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#1E293B] shadow-2xl overflow-hidden animate-floating">
            {/* Header */}
            <div className="h-12 border-b border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-400"></div>
              <div className="w-3 h-3 rounded-full bg-amber-400"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
            </div>
            {/* Body */}
            <div className="p-6 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Sidebar */}
              <div className="hidden md:flex flex-col gap-4 border-r border-slate-100 dark:border-slate-800 pr-6">
                <div className="h-8 w-3/4 bg-slate-100 dark:bg-slate-800 rounded-md"></div>
                <div className="h-4 w-1/2 bg-slate-100 dark:bg-slate-800 rounded-md mt-4"></div>
                <div className="h-4 w-2/3 bg-slate-100 dark:bg-slate-800 rounded-md"></div>
                <div className="h-4 w-1/2 bg-slate-100 dark:bg-slate-800 rounded-md"></div>
              </div>
              {/* Main Content */}
              <div className="md:col-span-2 flex flex-col gap-6">
                <div className="flex gap-4">
                  <div className="flex-1 h-24 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl border border-indigo-100 dark:border-indigo-800/50 p-4">
                     <div className="h-4 w-1/2 bg-indigo-200 dark:bg-indigo-800 rounded mb-2"></div>
                     <div className="h-8 w-1/3 bg-indigo-300 dark:bg-indigo-600 rounded"></div>
                  </div>
                  <div className="flex-1 h-24 bg-purple-50 dark:bg-purple-900/20 rounded-xl border border-purple-100 dark:border-purple-800/50 p-4">
                     <div className="h-4 w-1/2 bg-purple-200 dark:bg-purple-800 rounded mb-2"></div>
                     <div className="h-8 w-1/3 bg-purple-300 dark:bg-purple-600 rounded"></div>
                  </div>
                </div>
                <div className="h-48 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default LiveDashboardPreview;
`);

// 9. Statistics
writeComponent('Statistics', 'Statistics', `
import React from 'react';
import { motion } from 'framer-motion';
import { statsData } from '../../data/mockData';

const Statistics = () => {
  return (
    <section className="py-20 bg-indigo-600 dark:bg-indigo-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-indigo-500/30">
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center px-4"
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 font-heading">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-indigo-200 text-sm font-medium uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Statistics;
`);

// 10. Testimonials
writeComponent('Testimonials', 'Testimonials', `
import React from 'react';
import { motion } from 'framer-motion';
import { testimonialsData } from '../../data/mockData';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  return (
    <section className="py-24 bg-white dark:bg-[#0B1120]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-indigo-600 dark:text-indigo-400 font-semibold tracking-wider uppercase text-sm mb-3">Client Stories</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 font-heading">
            Trusted by industry leaders.
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 relative"
            >
              <Quote className="text-indigo-100 dark:text-indigo-900/50 absolute top-6 right-6" size={48} />
              <p className="text-slate-700 dark:text-slate-300 relative z-10 mb-8 italic">"{testimonial.feedback}"</p>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white">{testimonial.name}</h4>
                <p className="text-sm text-slate-500">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
`);

// 11. FAQ
writeComponent('FAQ', 'FAQ', `
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { faqData } from '../../data/mockData';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-24 bg-slate-50 dark:bg-[#060B14]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-indigo-600 dark:text-indigo-400 font-semibold tracking-wider uppercase text-sm mb-3">FAQ</h2>
          <h3 className="text-3xl font-bold text-slate-900 dark:text-white font-heading">
            Frequently asked questions
          </h3>
        </div>
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div key={index} className="bg-white dark:bg-[#1E293B] border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
              >
                <span className="font-semibold text-slate-900 dark:text-white">{faq.q}</span>
                <ChevronDown className={\`text-slate-400 transition-transform duration-300 \${openIndex === index ? 'rotate-180' : ''}\`} size={20} />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default FAQ;
`);

// 12. CTA
writeComponent('CTA', 'CTA', `
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-24 bg-white dark:bg-[#0B1120]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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
            <button className="px-8 py-4 bg-white text-indigo-600 hover:bg-slate-50 rounded-xl font-bold transition-colors shadow-xl flex items-center justify-center gap-2 mx-auto group">
              Get in Touch
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default CTA;
`);

console.log('Components 3 generated.');
