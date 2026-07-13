import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import PageHero from '../../components/Common/PageHero';
import CTA from '../../components/CTA/CTA';
import { Heart, Globe2, Zap, Coffee, MapPin, ArrowRight } from 'lucide-react';

const perks = [
  { icon: Globe2, title: 'Work from Anywhere', desc: 'We are a remote-first company with hubs in major global cities.' },
  { icon: Heart, title: 'Health & Wellness', desc: 'Comprehensive medical, dental, and vision for you and your dependents.' },
  { icon: Zap, title: 'Continuous Growth', desc: 'Annual learning stipend and dedicated time for professional development.' },
  { icon: Coffee, title: 'Flexible Schedules', desc: 'Work when you are most productive. We care about output, not hours.' }
];

const positions = [
  { title: 'Senior Full Stack Engineer', dept: 'Engineering', loc: 'Remote', type: 'Full-time' },
  { title: 'Enterprise Cloud Architect', dept: 'Infrastructure', loc: 'London, UK', type: 'Full-time' },
  { title: 'Lead Product Designer', dept: 'Design', loc: 'New York, USA', type: 'Full-time' },
  { title: 'AI Solutions Specialist', dept: 'Data Science', loc: 'Remote', type: 'Full-time' },
  { title: 'Technical Account Manager', dept: 'Customer Success', loc: 'Singapore', type: 'Full-time' }
];

const Careers = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="flex flex-col w-full bg-slate-50 dark:bg-[#0A0F1C]">
      <PageHero 
        title="Join Our Mission" 
        subtitle="We're building the future of enterprise software. Come do the best work of your life."
        bgImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
      />
      
      {/* Culture & Perks */}
      <section className="py-24">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-indigo-600 dark:text-indigo-400 font-semibold tracking-wider uppercase text-sm mb-3">Life at NEXORA</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 font-heading">
              Built for top performers.
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              We empower our team with the autonomy, resources, and trust they need to solve the world's most complex engineering problems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {perks.map((perk, idx) => {
              const Icon = perk.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white dark:bg-[#151A28] rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/20 dark:shadow-none group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center mb-6 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform">
                    <Icon size={28} />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{perk.title}</h4>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {perk.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 bg-white dark:bg-[#151A28] relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 font-heading">Open Roles</h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg">Find your next opportunity below.</p>
          </div>
          
          <div className="space-y-6">
            {positions.map((job, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-slate-50 dark:bg-[#0A0F1C] border border-slate-200 dark:border-slate-800 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between hover:border-indigo-500 hover:shadow-xl transition-all group cursor-pointer hover-shimmer"
              >
                <div className="mb-6 md:mb-0">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{job.title}</h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-slate-600 dark:text-slate-400">
                    <span className="bg-slate-200 dark:bg-slate-800 px-3 py-1 rounded-full">{job.dept}</span>
                    <span className="flex items-center gap-1"><MapPin size={16} className="text-indigo-500" /> {job.loc}</span>
                    <span>{job.type}</span>
                  </div>
                </div>
                <button className="modern-btn group shrink-0">
                  Apply Now
                  <div className="icon-circle">
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
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
