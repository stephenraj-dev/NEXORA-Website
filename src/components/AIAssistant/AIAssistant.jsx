import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import RobotModel from './RobotModel';
import ChatWindow from './ChatWindow';

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [animationState, setAnimationState] = useState('idle'); // idle, walking, dancing, celebrating, waving
  const [scrollProgress, setScrollProgress] = useState(0);
  
  useEffect(() => {
    // Handle scroll velocity and sections for animations
    let scrollTimeout;
    let lastScrollY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const velocity = Math.abs(currentScrollY - lastScrollY);
          
          if (velocity > 5) {
            setAnimationState('walking');
            clearTimeout(scrollTimeout);
            
            // Calculate a horizontal movement based on scroll direction/amount
            // Max movement is 100px
            const maxMove = 100;
            const scrollDir = currentScrollY > lastScrollY ? 1 : -1;
            setScrollProgress(prev => Math.max(-maxMove, Math.min(maxMove, prev + (velocity * 0.5 * scrollDir))));
            
            // Return to idle after scrolling stops
            scrollTimeout = setTimeout(() => {
              setScrollProgress(0); // smoothly return to origin
              const random = Math.random();
              if (random > 0.8) setAnimationState('celebrating');
              else if (random > 0.6) setAnimationState('dancing');
              else setAnimationState('idle');
              
              if (random > 0.6) {
                setTimeout(() => setAnimationState('idle'), 2000);
              }
            }, 500);
          }
          
          lastScrollY = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Random idle animations
    const idleInterval = setInterval(() => {
      if (animationState === 'idle' && !isOpen) {
        const random = Math.random();
        if (random > 0.4) {
          setAnimationState('thinking');
          setTimeout(() => setAnimationState('idle'), 3000);
        } else if (random > 0.6) {
          setAnimationState('waving');
          setTimeout(() => setAnimationState('idle'), 2500);
        } else if (random > 0.8) {
          setAnimationState('dancing');
          setTimeout(() => setAnimationState('idle'), 3000);
        }
      }
    }, 5000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
      clearInterval(idleInterval);
    };
  }, [animationState, isOpen]);

  return (
    <>
      <div className="fixed bottom-2 left-2 md:bottom-8 md:left-8 z-90 flex items-end pointer-events-none">
        <motion.div 
          className="relative pointer-events-auto transform scale-75 sm:scale-90 md:scale-100 origin-bottom-left transition-transform duration-300"
          animate={{ x: scrollProgress }}
          transition={{ type: 'spring', damping: 20, stiffness: 100 }}
        >
          <RobotModel 
            animationState={isOpen ? 'idle' : animationState} 
            onClick={() => {
              setIsOpen(true);
              if (!isOpen) {
                setAnimationState('celebrating');
                setTimeout(() => setAnimationState('idle'), 1500);
              }
            }} 
          />
        </motion.div>
      </div>
      
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Invisible overlay to close on outside click */}
            <div 
              className="fixed inset-0 z-95" 
              onClick={() => setIsOpen(false)}
            />
            <div className="fixed bottom-32.5 md:bottom-40 left-4 md:left-8 z-100 origin-bottom-left pointer-events-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                className="relative"
              >
                <ChatWindow onClose={() => setIsOpen(false)} />
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIAssistant;
