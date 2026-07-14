import React from 'react';
import { motion } from 'framer-motion';

const RevealText = ({ 
  text, 
  as: Component = 'p', 
  className = '', 
  staggerDelay = 0.05,
  delay = 0,
  direction = 'left' 
}) => {
  const words = typeof text === 'string' ? text.split(" ") : [];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      }
    }
  };

  const xOffset = direction === 'left' ? -100 : 100;

  const childVariants = {
    hidden: { 
      opacity: 0, 
      x: xOffset,
      filter: 'blur(8px)'
    },
    visible: { 
      opacity: 1, 
      x: 0, 
      filter: 'blur(0px)',
      transition: { 
        type: 'spring', 
        damping: 15, 
        stiffness: 150,
        mass: 1,
        restDelta: 0.001
      } 
    }
  };

  const MotionComponent = motion[Component];

  if (typeof text !== 'string') {
    return <MotionComponent className={className}>{text}</MotionComponent>;
  }

  return (
    <MotionComponent
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1, margin: "50px" }}
      className={`flex flex-wrap ${className}`}
      style={{ display: 'inline-flex' }}
    >
      {words.map((word, index) => (
        <span key={index} className="inline-block overflow-hidden mr-[0.25em]">
          <motion.span
            variants={childVariants}
            className="inline-block"
            style={{ willChange: 'transform, filter, opacity' }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </MotionComponent>
  );
};

export default RevealText;
