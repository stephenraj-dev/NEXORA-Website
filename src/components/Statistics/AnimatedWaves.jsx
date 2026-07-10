import React, { useEffect, useRef } from 'react';

const AnimatedWaves = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;
    
    // Wave configuration (Even slower sea wave speed, thicker ribbon, exact colors from image)
    const waves = [
      { yOffset: height * 0.5, amplitude: 120, wavelength: 0.0015, speed: 0.001, color: 'rgba(236, 72, 153, 0.4)' }, // Neon Pink
      { yOffset: height * 0.5, amplitude: 100, wavelength: 0.002,  speed: 0.0015, color: 'rgba(139, 92, 246, 0.5)' }, // Deep Purple
      { yOffset: height * 0.55, amplitude: 80, wavelength: 0.0025, speed: 0.002, color: 'rgba(99, 102, 241, 0.3)' }  // Indigo
    ];

    let time = 0;
    let isVisible = true;

    const handleResize = () => {
      width = canvas.offsetWidth || window.innerWidth;
      height = canvas.offsetHeight || window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      
      waves[0].yOffset = height * 0.5;
      waves[1].yOffset = height * 0.5;
      waves[2].yOffset = height * 0.55;
    };

    const animate = () => {
      if (!isVisible) return; // Completely stop rendering if not on screen
      
      ctx.clearRect(0, 0, width, height);
      
      waves.forEach((wave, i) => {
        for(let j = 0; j < 30; j++) {
          ctx.beginPath();
          const offsetMultiplier = j * 2;
          
          for (let x = 0; x < width + 20; x += 20) {
            const y = wave.yOffset + offsetMultiplier + 
                      Math.sin(x * wave.wavelength + time * wave.speed) * wave.amplitude * Math.sin(time * 0.1 + i) +
                      Math.cos(x * 0.001 - time * 0.002) * 30;
            
            if (x === 0) {
              ctx.moveTo(x, y);
            } else {
              ctx.lineTo(x, y);
            }
          }
          
          ctx.strokeStyle = wave.color;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      });
      
      time += 0.2; 
      animationFrameId = requestAnimationFrame(animate);
    };

    // Performance Optimization: Only animate when visible on screen
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          isVisible = true;
          animate(); // Start animation loop
        } else {
          isVisible = false;
          cancelAnimationFrame(animationFrameId); // Pause animation loop
        }
      });
    });
    observer.observe(canvas);

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
};

export default AnimatedWaves;
