import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import PageHero from '../../components/Common/PageHero';
import CTA from '../../components/CTA/CTA';
import { Leaf, Users, Globe2, Heart } from 'lucide-react';

const pillars = [
  {
    title: 'Net-Zero by 2030',
    description: 'We are committed to reducing our carbon footprint and achieving net-zero emissions across all global operations by the year 2030. Our data centers already run on 100% renewable energy.',
    icon: <Leaf size={32} />
  },
  {
    title: 'Diversity & Inclusion',
    description: 'Innovation requires diverse perspectives. We are proud that 45% of our leadership team identifies as women or underrepresented minorities, and we are striving for true parity.',
    icon: <Users size={32} />
  },
  {
    title: 'Digital Equity',
    description: 'We partner with non-profits worldwide to provide coding bootcamps and tech mentorship to underprivileged youth, bridging the global digital divide.',
    icon: <Globe2 size={32} />
  },
  {
    title: 'Employee Wellbeing',
    description: 'Beyond competitive pay, we prioritize mental health days, flexible remote work, and comprehensive family leave to ensure our team thrives both at work and at home.',
    icon: <Heart size={32} />
  }
];

const Sustainability = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="flex flex-col w-full bg-slate-50 dark:bg-[#0A0F1C]">
      <PageHero 
        title="Corporate Responsibility" 
        subtitle="Building technology that sustains the planet and empowers communities."
        bgImage="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
      />
      
      {/* Introduction */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-8 font-heading">
            Our ESG Commitment
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-12">
            At NEXORA, we believe that true enterprise success cannot be measured by revenue alone. We measure our impact by the health of our planet, the equity of our communities, and the well-being of our people.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-t border-b border-slate-200 dark:border-slate-800">
            <div>
              <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 font-heading mb-2">100%</div>
              <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">Renewable Energy</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 font-heading mb-2">45%</div>
              <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">Diverse Leadership</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 font-heading mb-2">$5M+</div>
              <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">Community Grants</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 font-heading mb-2">Top 50</div>
              <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">Best Workplaces</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-24 bg-white dark:bg-[#151A28]">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex gap-6 group hover-shimmer p-8 rounded-3xl border border-transparent hover:border-slate-200 dark:hover:border-slate-800 hover:bg-slate-50 dark:hover:bg-[#1A1F2E] transition-all cursor-pointer"
              >
                <div className="w-16 h-16 shrink-0 rounded-2xl bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform">
                  {pillar.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 font-heading">{pillar.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
};

export default Sustainability;
