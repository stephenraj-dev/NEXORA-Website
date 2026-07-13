import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import PageHero from '../../components/Common/PageHero';
import CTA from '../../components/CTA/CTA';
import { ArrowRight, Calendar, User } from 'lucide-react';

const insights = [
  {
    category: 'Research Report',
    title: 'The State of Enterprise AI Adoption in 2026',
    excerpt: 'An in-depth analysis of how Fortune 500 companies are moving from generative AI proofs-of-concept to production workloads.',
    author: 'Dr. Sarah Chen',
    date: 'July 10, 2026',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    featured: true
  },
  {
    category: 'Engineering Blog',
    title: 'Migrating Legacy Monoliths to Event-Driven Microservices',
    excerpt: 'A technical deep-dive into the strangler fig pattern and how we achieved zero-downtime migration for a Tier-1 bank.',
    author: 'Marcus Johnson',
    date: 'June 28, 2026',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    featured: false
  },
  {
    category: 'Whitepaper',
    title: 'Zero-Trust Architecture: Beyond the VPN',
    excerpt: 'Why perimeter-based security is dead, and how to implement identity-aware proxies for global remote workforces.',
    author: 'Elena Rodriguez',
    date: 'June 15, 2026',
    image: 'https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    featured: false
  },
  {
    category: 'Industry Trends',
    title: 'Data Monetization Strategies for Retailers',
    excerpt: 'How modern retailers are leveraging Snowflake and dbt to turn cost-center data warehouses into revenue engines.',
    author: 'David Kim',
    date: 'May 30, 2026',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    featured: false
  }
];

const Insights = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  
  const featuredInsight = insights.find(i => i.featured);
  const regularInsights = insights.filter(i => !i.featured);

  return (
    <div className="flex flex-col w-full bg-slate-50 dark:bg-[#0A0F1C]">
      <PageHero 
        title="Insights & Research" 
        subtitle="Explore our latest thinking on technology, strategy, and the future of enterprise software."
        bgImage="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
      />
      
      {/* Featured Insight */}
      <section className="py-24 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-10 font-heading">Featured Research</h2>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative rounded-3xl overflow-hidden bg-white dark:bg-[#151A28] shadow-xl border border-slate-200 dark:border-slate-800 flex flex-col lg:flex-row hover-shimmer cursor-pointer"
          >
            <div className="lg:w-3/5 overflow-hidden">
              <img src={featuredInsight.image} alt={featuredInsight.title} className="w-full h-full object-cover min-h-[400px] transform group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="lg:w-2/5 p-10 lg:p-16 flex flex-col justify-center">
              <span className="inline-block px-4 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 font-bold text-sm mb-6 w-max">
                {featuredInsight.category}
              </span>
              <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-6 font-heading leading-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {featuredInsight.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 leading-relaxed">
                {featuredInsight.excerpt}
              </p>
              <div className="flex items-center gap-6 text-sm text-slate-500 font-medium mt-auto">
                <div className="flex items-center gap-2"><User size={16} /> {featuredInsight.author}</div>
                <div className="flex items-center gap-2"><Calendar size={16} /> {featuredInsight.date}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Latest Insights Grid */}
      <section className="py-24">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white font-heading">Latest Articles</h2>
            <button className="hidden md:flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors">
              View all <ArrowRight size={20} />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularInsights.map((insight, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="group bg-white dark:bg-[#151A28] rounded-3xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 transition-all hover-shimmer cursor-pointer flex flex-col h-full"
              >
                <div className="h-60 overflow-hidden relative">
                  <img src={insight.image} alt={insight.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 rounded-full bg-white/90 dark:bg-black/80 backdrop-blur-sm text-slate-900 dark:text-white font-bold text-xs shadow-sm">
                      {insight.category}
                    </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 font-heading group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-2">
                    {insight.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-6 flex-grow line-clamp-3">
                    {insight.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-slate-500 font-medium pt-4 border-t border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-1"><User size={14} /> {insight.author}</div>
                    <div className="flex items-center gap-1"><Calendar size={14} /> {insight.date}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <button className="md:hidden w-full mt-10 modern-btn justify-center py-4 text-base">
            View all articles <ArrowRight size={20} className="ml-2" />
          </button>
        </div>
      </section>

      <CTA />
    </div>
  );
};

export default Insights;
