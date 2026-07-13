import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    // We don't use simple window.scrollTo because Lenis handles smooth scrolling, 
    // but just in case, standard smooth scroll works too. Lenis intercepts it.
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 50, transition: { duration: 0.2 } }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9, y: -20, transition: { type: "spring", stiffness: 400, damping: 10 } }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-[100] p-4 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-2xl shadow-indigo-500/20 hover:shadow-indigo-500/40 border border-slate-700 dark:border-slate-200 backdrop-blur-md transition-shadow group"
          aria-label="Back to top"
        >
          {/* Rocket thruster effect on hover */}
          <motion.div 
            className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-gradient-to-t from-orange-500 to-yellow-300 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity"
            animate={{ 
              height: isHovered ? ["10px", "20px", "10px"] : "0px",
              opacity: isHovered ? [0.5, 1, 0.5] : 0 
            }}
            transition={{ duration: 0.5, repeat: Infinity }}
          />
          
          <ArrowUp size={24} className="relative z-10 group-hover:-translate-y-1 transition-transform" />
          
          {/* Ripple Effect */}
          <div className="absolute inset-0 rounded-full border-2 border-slate-900 dark:border-white opacity-0 group-hover:animate-ping" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
