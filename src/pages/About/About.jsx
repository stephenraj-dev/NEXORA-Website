import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import PageHero from '../../components/Common/PageHero';
import CTA from '../../components/CTA/CTA';

const timelineEvents = [
  {
    year: '2023',
    title: 'Company Founded',
    description: 'NEXORA was founded with a mission to revolutionize enterprise software by bringing consumer-grade design to B2B platforms.'
  },
  {
    year: '2024',
    title: 'Series A Funding',
    description: 'Secured $50M in funding led by top-tier venture capital to scale global operations and expand the core engineering team.'
  },
  {
    year: '2025',
    title: 'Global Expansion',
    description: 'Opened flagship offices in London, Tokyo, and Singapore to support a rapidly growing list of Fortune 500 clients.'
  },
  {
    year: '2026',
    title: 'NEXORA 2.0 Launch',
    description: 'Released the next-generation platform featuring native AI capabilities, predictive analytics, and edge computing.'
  }
];

const leadership = [
  { name: 'Sarah Chen', role: 'Chief Executive Officer', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
  { name: 'Marcus Johnson', role: 'Chief Technology Officer', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
  { name: 'Elena Rodriguez', role: 'VP of Product', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' }
];

const About = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="flex flex-col w-full bg-slate-50 dark:bg-[#0A0F1C]">
      <PageHero 
        title="About NEXORA" 
        subtitle="We are a global team of engineers, designers, and strategists building the future of enterprise software."
        bgImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
      />
      
      {/* Our Story */}
      <section className="py-24">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5 }}
              className="lg:w-1/2"
            >
              <h2 className="text-indigo-600 dark:text-indigo-400 font-semibold tracking-wider uppercase text-sm mb-3">Our Story</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 font-heading">
                Rewriting the rules of enterprise tech.
              </h3>
              <div className="space-y-6 text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                <p>
                  Before NEXORA, enterprise software was synonymous with clunky interfaces, massive technical debt, and multi-year deployments that failed to deliver ROI. We knew there was a better way.
                </p>
                <p>
                  Founded by a team of ex-FAANG engineers, NEXORA was built on a simple premise: B2B software should be just as intuitive, fast, and beautiful as the consumer apps we use every day.
                </p>
                <p>
                  Today, we partner with some of the world's most ambitious organizations to modernize their legacy systems, implement scalable cloud architectures, and deploy intelligent automation that actually works.
                </p>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5 }}
              className="lg:w-1/2"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group hover-shimmer aspect-square max-w-md mx-auto">
                <img loading="lazy" decoding="async" 
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="NEXORA Founders" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-white dark:bg-[#151A28] relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 font-heading text-slate-900 dark:text-white">Our Journey</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">The milestones that shaped our growth.</p>
          </div>

          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-indigo-100 dark:bg-slate-800 transform md:-translate-x-1/2"></div>
            
            <div className="space-y-16">
              {timelineEvents.map((event, index) => {
                const isEven = index % 2 === 0;
                return (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className={`relative flex flex-col md:flex-row items-start md:items-center ${isEven ? 'md:flex-row-reverse' : ''}`}
                  >
                    <div className="hidden md:block w-1/2"></div>
                    <div className="absolute left-8 md:left-1/2 w-6 h-6 rounded-full bg-indigo-600 border-4 border-white dark:border-[#151A28] transform -translate-x-1/2 mt-6 md:mt-0 shadow-lg shadow-indigo-500/50 z-10"></div>
                    
                    <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${isEven ? 'md:pr-12 text-left md:text-right' : 'md:pl-12 text-left'}`}>
                      <div className="bg-slate-50 dark:bg-[#0A0F1C] p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-lg hover:border-indigo-500 transition-colors group cursor-pointer hover-shimmer">
                        <span className="inline-block px-4 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 font-bold text-sm mb-4">
                          {event.year}
                        </span>
                        <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{event.title}</h4>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 font-heading">Leadership Team</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">The visionaries steering the ship.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {leadership.map((leader, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="group relative overflow-hidden rounded-3xl hover-shimmer"
              >
                <div className="aspect-[3/4]">
                  <img loading="lazy" decoding="async" src={leader.image} alt={leader.name} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  <h3 className="text-2xl font-bold text-white mb-1">{leader.name}</h3>
                  <p className="text-indigo-300 font-medium">{leader.role}</p>
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
export default About;
