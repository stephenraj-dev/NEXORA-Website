
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import RevealText from '../Common/RevealText';


const CTA = () => {
  return (
    <section className="py-24 bg-white dark:bg-[#1A1514]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="rounded-[2.5rem] bg-linear-to-br from-indigo-600 to-purple-700 dark:from-indigo-900 dark:to-purple-900 p-12 md:p-16 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')] opacity-20 "></div>
          
          <div className="relative z-10">
            <RevealText as="h2" className="text-3xl md:text-5xl font-bold text-white mb-6 font-heading" text="Ready to build your next software product?" />
            <RevealText as="p" className="text-indigo-100 text-lg mb-10 max-w-2xl mx-auto" text="Join industry leaders who trust NEXORA to deliver robust, scalable, and beautifully designed digital solutions." />
            <Link to="/contact" className="modern-btn group mx-auto w-max">
              <span>START YOUR TRANSFORMATION</span>
              <span className="icon-circle">
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default CTA;
