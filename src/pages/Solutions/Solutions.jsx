import React, { useEffect } from 'react';
import PageHero from '../../components/Common/PageHero';
import CTA from '../../components/CTA/CTA';
import { motion } from 'framer-motion';
import { Network, LineChart, Shield, Zap } from 'lucide-react';

const solutions = [
  {
    icon: Network,
    title: "Legacy Modernization",
    challenge: "Outdated monolithic architectures slowing down deployment cycles and increasing maintenance costs.",
    solution: "We strangle the monolith using a microservices-based approach. By containerizing workloads and establishing event-driven architectures, we help you achieve 99.99% uptime and zero-downtime deployments.",
    color: "text-blue-500",
    bg: "bg-blue-500/10"
  },
  {
    icon: LineChart,
    title: "Data Monetization",
    challenge: "Vast amounts of unstructured data trapped in silos, preventing real-time business insights.",
    solution: "Implementation of advanced data lakes (Snowflake/Databricks) combined with customized AI pipelines. We convert your dormant data into predictive dashboards that directly impact your bottom line.",
    color: "text-purple-500",
    bg: "bg-purple-500/10"
  },
  {
    icon: Shield,
    title: "Zero-Trust Security",
    challenge: "Increasing attack surfaces from remote workforces and sophisticated ransomware threats.",
    solution: "A ground-up security paradigm shift. We integrate identity-aware proxies, multi-factor authentication, and end-to-end encryption across your entire CI/CD pipeline and corporate network.",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10"
  },
  {
    icon: Zap,
    title: "Automated Workflows",
    challenge: "Manual, error-prone administrative tasks consuming thousands of human hours annually.",
    solution: "Deploying Robotic Process Automation (RPA) and custom internal tools. We map your current operations and build tailored software that automates up to 80% of repetitive data entry and compliance checks.",
    color: "text-orange-500",
    bg: "bg-orange-500/10"
  }
];

const Solutions = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="flex flex-col w-full bg-slate-50 dark:bg-[#0A0F1C]">
      <PageHero 
        title="Enterprise Solutions" 
        subtitle="Strategic technology implementations designed to solve your most complex business bottlenecks."
        bgImage="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
      />
      
      {/* Challenges & Solutions Grid */}
      <section className="py-24">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-indigo-600 dark:text-indigo-400 font-semibold tracking-wider uppercase text-sm mb-3">Problem Solvers</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 font-heading">
              How we tackle enterprise challenges.
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              Technology should act as a catalyst, not a constraint. Discover how our strategic solutions dismantle operational roadblocks.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {solutions.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-[#151A28] rounded-3xl p-8 md:p-12 border border-slate-200 dark:border-slate-800 shadow-lg group hover-shimmer"
                >
                  <div className="flex items-center gap-4 mb-8">
                    <div className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center`}>
                      <Icon className={item.color} size={28} />
                    </div>
                    <h4 className="text-3xl font-bold text-slate-900 dark:text-white">{item.title}</h4>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h5 className="text-sm font-bold uppercase tracking-wider text-red-500 mb-2">The Challenge</h5>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">{item.challenge}</p>
                    </div>
                    
                    <div className="h-px w-full bg-slate-200 dark:bg-slate-700/50"></div>
                    
                    <div>
                      <h5 className="text-sm font-bold uppercase tracking-wider text-emerald-500 mb-2">The NEXORA Solution</h5>
                      <p className="text-slate-800 dark:text-slate-200 leading-relaxed text-lg font-medium">{item.solution}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Architecture Graphic Placeholder */}
      <section className="py-24 bg-slate-900 dark:bg-black text-white overflow-hidden">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} className="flex-1">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">Built on scalable architecture.</h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                Our solutions are architected using cloud-native principles. We leverage Kubernetes for orchestration, Kafka for event streaming, and robust CI/CD pipelines to ensure that as your business grows, your technology scales effortlessly without hitting performance ceilings.
              </p>
              <button className="modern-btn group">
                View Architecture Docs
              </button>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: false }} className="flex-1 w-full">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-indigo-500/20 border border-slate-700 aspect-video group hover-shimmer bg-slate-800 flex items-center justify-center p-8">
                {/* Abstract Architecture Representation */}
                <div className="w-full h-full border-2 border-dashed border-slate-600 rounded-xl relative flex flex-col justify-between p-4">
                  <div className="h-12 w-full bg-indigo-500/20 border border-indigo-500/50 rounded flex items-center justify-center text-indigo-300 font-mono text-sm">Load Balancer (AWS ALB)</div>
                  <div className="flex gap-4 h-24">
                    <div className="flex-1 bg-purple-500/20 border border-purple-500/50 rounded flex items-center justify-center text-purple-300 font-mono text-xs text-center p-2">App Cluster (EKS)</div>
                    <div className="flex-1 bg-purple-500/20 border border-purple-500/50 rounded flex items-center justify-center text-purple-300 font-mono text-xs text-center p-2">API Gateway</div>
                  </div>
                  <div className="flex gap-4 h-16">
                    <div className="flex-1 bg-orange-500/20 border border-orange-500/50 rounded flex items-center justify-center text-orange-300 font-mono text-xs">Primary DB (Aurora)</div>
                    <div className="w-1/3 bg-emerald-500/20 border border-emerald-500/50 rounded flex items-center justify-center text-emerald-300 font-mono text-xs">Cache (Redis)</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
};
export default Solutions;
