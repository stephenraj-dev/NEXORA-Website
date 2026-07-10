import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowRight as ArrowIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const stories = [
  {
    id: 1,
    company: "GlobalBank Inc.",
    description: "Transforms into a modern, cloud-centric, intelligence-driven security-operating organisation.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    company: "HealthPlus",
    description: "Shifts to a business-aligned operating model designed to help it scale, innovate, and adapt with greater confidence.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    company: "Vantage Logistics",
    description: "Powers AI-driven fleet management and real-time tracking experience with NEXORA.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    company: "TechNova Solutions",
    description: "Accelerates digital transformation through scalable enterprise architecture.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    company: "RetailPrime",
    description: "Reimagines omnichannel retail experiences with cutting-edge data pipelines.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

const CustomerStories = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-white dark:bg-[#1A1514] overflow-hidden border-t border-slate-100 dark:border-slate-800/50">
      <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex justify-between items-end mb-12">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-normal text-slate-900 dark:text-white font-heading"
          >
            Customer Stories
          </motion.h2>
          
          {/* Scroll Buttons */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="hidden md:flex gap-4"
          >
            <button 
              onClick={() => scroll('left')}
              className="p-3 rounded-full border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-all"
              aria-label="Scroll left"
            >
              <ArrowLeft size={20} strokeWidth={1.5} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-3 rounded-full border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-all"
              aria-label="Scroll right"
            >
              <ArrowRight size={20} strokeWidth={1.5} />
            </button>
          </motion.div>
        </div>

        {/* Cards Container */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8 -mx-4 px-4 sm:mx-0 sm:px-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {stories.map((story, idx) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="min-w-[320px] md:min-w-[400px] lg:min-w-[450px] h-[550px] relative rounded-2xl overflow-hidden group snap-start cursor-pointer"
            >
              {/* Background Image with Zoom on Hover */}
              <div className="absolute inset-0 w-full h-full">
                <img 
                  src={story.image} 
                  alt={story.company} 
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Gradient Overlays for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent pointer-events-none"></div>

              {/* Card Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col justify-end h-full">
                <h3 className="text-3xl font-medium text-white mb-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  {story.company}
                </h3>
                <p className="text-slate-200/90 text-sm md:text-base leading-relaxed mb-8 opacity-90 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {story.description}
                </p>
                
                {/* Read More Button */}
                <Link to="/about" className="inline-flex items-center gap-2 text-white font-medium text-sm tracking-widest uppercase overflow-hidden group/btn w-max">
                  <ArrowIcon size={16} className="transform -translate-x-full opacity-0 group-hover/btn:translate-x-0 group-hover/btn:opacity-100 transition-all duration-300" />
                  <span className="transform -translate-x-6 group-hover/btn:translate-x-0 transition-all duration-300">Read More</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CustomerStories;
