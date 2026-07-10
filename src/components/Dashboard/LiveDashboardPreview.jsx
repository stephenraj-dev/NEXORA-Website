
import React from 'react';
import { motion } from 'framer-motion';

const LiveDashboardPreview = () => {
  return (
    <section className="py-24 bg-slate-50 dark:bg-[#060B14] overflow-hidden">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-indigo-600 dark:text-indigo-400 font-semibold tracking-wider uppercase text-sm mb-3">Next-Gen UI</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 font-heading">
            Experience our dashboard aesthetics.
          </h3>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
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
