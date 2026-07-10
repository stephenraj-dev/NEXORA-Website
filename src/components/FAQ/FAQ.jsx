
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
                <ChevronDown className={`text-slate-400 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} size={20} />
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
