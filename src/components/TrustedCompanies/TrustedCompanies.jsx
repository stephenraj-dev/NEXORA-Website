
import React from 'react';
import { motion } from 'framer-motion';
import { trustedCompanies } from '../../data/mockData';
import RevealText from '../Common/RevealText';


const TrustedCompanies = () => {
  return (
    <section className="py-12 border-y border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-[#1A1514]/50 overflow-hidden">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
        <RevealText as="p" className="text-sm font-semibold tracking-wider text-slate-500 dark:text-slate-400 uppercase" text="Trusted by innovative teams worldwide" />
      </div>
      <div className="relative flex overflow-x-hidden group cursor-pointer">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-16 py-4 group-hover:[animation-play-state:paused]">
          {[...trustedCompanies, ...trustedCompanies].map((company, index) => (
            <span key={index} className="text-xl md:text-2xl font-bold text-slate-300 dark:text-slate-700 font-heading hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">
              {company}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
export default TrustedCompanies;
