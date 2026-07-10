import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import PageHero from '../../components/Common/PageHero';
import CTA from '../../components/CTA/CTA';

const positions = [
  { title: 'Senior Frontend Engineer', dept: 'Engineering', loc: 'Remote', type: 'Full-time' },
  { title: 'Product Manager', dept: 'Product', loc: 'New York', type: 'Full-time' },
  { title: 'UX/UI Designer', dept: 'Design', loc: 'London', type: 'Full-time' },
  { title: 'DevOps Engineer', dept: 'Engineering', loc: 'Remote', type: 'Full-time' }
];

const Careers = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="flex flex-col w-full">
      <PageHero 
        title="Join Our Team" 
        subtitle="Help us build the next generation of digital enterprise solutions."
        bgImage="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
      />
      <section className="py-24 bg-white dark:bg-[#1A1514]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Open Positions</h2>
            <p className="text-slate-600 dark:text-slate-400">We're always looking for talented individuals to join our team.</p>
          </div>
          <div className="space-y-4">
            {positions.map((job, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-slate-50 dark:bg-[#1E293B] border border-slate-200 dark:border-slate-800 rounded-xl p-6 flex flex-col md:flex-row md:items-center justify-between hover:border-indigo-500 transition-colors group cursor-pointer"
              >
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{job.title}</h3>
                  <div className="flex space-x-4 text-sm text-slate-500 dark:text-slate-400">
                    <span>{job.dept}</span>
                    <span>•</span>
                    <span>{job.loc}</span>
                    <span>•</span>
                    <span>{job.type}</span>
                  </div>
                </div>
                <button className="mt-4 md:mt-0 px-6 py-2 bg-white dark:bg-[#1A1514] border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors font-medium">
                  Apply Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </div>
  );
};
export default Careers;
