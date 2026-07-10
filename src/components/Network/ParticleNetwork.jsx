import React, { useEffect, useRef } from 'react';
import { useTheme } from '../../hooks/useTheme';

const ParticleNetwork = () => {
  const canvasRef = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    
    // Config
    const numParticles = 400; 
    let width = canvas.offsetWidth || window.innerWidth;
    let height = canvas.offsetHeight || window.innerHeight;
    let isVisible = true; // For performance optimization
    
    // Mouse position
    let mouse = { x: width / 2, y: height };
    let targetMouse = { x: width / 2, y: height };

    const handleResize = () => {
      width = canvas.offsetWidth || window.innerWidth;
      height = canvas.offsetHeight || window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      initParticles(); 
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      targetMouse.x = e.clientX - rect.left;
      targetMouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      targetMouse.x = width / 2;
      targetMouse.y = height;
    };

    // Smooth lerp function
    const lerp = (start, end, factor) => {
      return start + (end - start) * factor;
    };

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = width / 2;
        this.y = height + 20;
        
        const angle = Math.PI + (Math.random() * Math.PI); // Top half circle
        const radius = 100 + Math.random() * (Math.min(width, height) * 0.9);
        
        this.baseTargetX = this.x + Math.cos(angle) * radius;
        this.baseTargetY = this.y + Math.sin(angle) * radius;
        
        this.targetX = this.baseTargetX;
        this.targetY = this.baseTargetY;

        this.currentX = this.baseTargetX;
        this.currentY = this.baseTargetY;

        this.size = Math.random() * 2 + 1;
      }

      update() {
        // Smoothly move the actual interaction point towards the mouse for fluid feeling
        mouse.x = lerp(mouse.x, targetMouse.x, 0.1);
        mouse.y = lerp(mouse.y, targetMouse.y, 0.1);

        // Calculate distance from smooth mouse
        const dx = mouse.x - this.baseTargetX;
        const dy = mouse.y - this.baseTargetY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 300; // Larger interaction radius

        if (dist < maxDist) {
          const force = (maxDist - dist) / maxDist;
          // Calculate the target repel position
          this.targetX = this.baseTargetX - (dx * force * 0.8);
          this.targetY = this.baseTargetY - (dy * force * 0.8);
        } else {
          // Default position
          this.targetX = this.baseTargetX;
          this.targetY = this.baseTargetY;
        }

        // Extremely smooth interpolation towards the target position (Stripe style)
        this.currentX = lerp(this.currentX, this.targetX, 0.08);
        this.currentY = lerp(this.currentY, this.targetY, 0.08);
      }

      draw(ctx, isDark) {
        ctx.beginPath();
        ctx.moveTo(width / 2, height);
        ctx.lineTo(this.currentX, this.currentY);
        
        const gradient = ctx.createLinearGradient(width/2, height, this.currentX, this.currentY);
        if (isDark) {
          gradient.addColorStop(0, 'rgba(99, 102, 241, 0.8)'); // Indigo-500
          gradient.addColorStop(1, 'rgba(56, 189, 248, 0.2)'); // Light Blue
        } else {
          gradient.addColorStop(0, 'rgba(79, 70, 229, 0.8)'); // Indigo-600
          gradient.addColorStop(1, 'rgba(14, 165, 233, 0.15)'); // Sky Blue
        }
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.2;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(this.currentX, this.currentY, this.size, 0, Math.PI * 2);
        ctx.fillStyle = isDark ? 'rgba(167, 139, 250, 0.9)' : 'rgba(79, 70, 229, 0.9)';
        ctx.fill();
      }
    }

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < numParticles; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      if (!isVisible) return; // Completely stop rendering if not on screen

      ctx.clearRect(0, 0, width, height);
      const isDark = document.documentElement.classList.contains('dark');
      
      particles.forEach(p => {
        p.update();
        p.draw(ctx, isDark);
      });
      
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
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    
    handleResize();
    initParticles();

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full pointer-events-auto"
      style={{ zIndex: 0 }}
    />
  );
};

export default ParticleNetwork;
