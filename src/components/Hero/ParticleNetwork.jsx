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
    const numParticles = 250; // Increased for thicker design
    let width = canvas.offsetWidth || window.innerWidth;
    let height = canvas.offsetHeight || window.innerHeight;
    
    // Mouse position
    let mouse = { x: width / 2, y: height };

    // Resize handler
    const handleResize = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width;
      canvas.height = height;
      initParticles();
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = width / 2;
      mouse.y = height; // Reset to bottom center
    };

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        // Start from bottom center
        this.x = width / 2;
        this.y = height + 20;
        
        // Target position (forming a semi-circle/explosion)
        const angle = Math.PI + (Math.random() * Math.PI); // Top half circle
        const radius = 100 + Math.random() * (Math.min(width, height) * 0.8);
        
        this.baseTargetX = this.x + Math.cos(angle) * radius;
        this.baseTargetY = this.y + Math.sin(angle) * radius;
        
        this.targetX = this.baseTargetX;
        this.targetY = this.baseTargetY;

        this.currentX = this.x;
        this.currentY = this.y;

        this.speed = 0.02 + Math.random() * 0.03;
        this.size = Math.random() * 2 + 1;
      }

      update() {
        // Interactive hover effect
        // If mouse is close to target, repel it slightly
        const dx = mouse.x - this.baseTargetX;
        const dy = mouse.y - this.baseTargetY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 200;

        if (dist < maxDist) {
          const force = (maxDist - dist) / maxDist;
          this.targetX = this.baseTargetX - (dx * force * 0.5);
          this.targetY = this.baseTargetY - (dy * force * 0.5);
        } else {
          this.targetX = this.baseTargetX;
          this.targetY = this.baseTargetY;
        }

        // Move towards target smoothly
        this.currentX += (this.targetX - this.currentX) * this.speed;
        this.currentY += (this.targetY - this.currentY) * this.speed;
        
        // Random slight sway
        this.currentX += (Math.random() - 0.5) * 0.5;
        this.currentY += (Math.random() - 0.5) * 0.5;
      }

      draw(ctx, isDark) {
        // Draw Line from bottom center to particle
        ctx.beginPath();
        ctx.moveTo(width / 2, height);
        ctx.lineTo(this.currentX, this.currentY);
        
        // Gradient for line
        const gradient = ctx.createLinearGradient(width/2, height, this.currentX, this.currentY);
        if (isDark) {
          gradient.addColorStop(0, 'rgba(99, 102, 241, 1)'); // Indigo-500 Solid
          gradient.addColorStop(1, 'rgba(56, 189, 248, 0.4)'); // Light Blue
        } else {
          gradient.addColorStop(0, 'rgba(79, 70, 229, 1)'); // Indigo-600 Solid
          gradient.addColorStop(1, 'rgba(14, 165, 233, 0.3)'); // Sky Blue
        }
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.5; // Made lines thicker
        ctx.stroke();

        // Draw dot at the end
        ctx.beginPath();
        ctx.arc(this.currentX, this.currentY, this.size, 0, Math.PI * 2);
        ctx.fillStyle = isDark ? 'rgba(167, 139, 250, 1)' : 'rgba(79, 70, 229, 1)';
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
      ctx.clearRect(0, 0, width, height);
      
      const isDark = document.documentElement.classList.contains('dark');
      
      particles.forEach(p => {
        p.update();
        p.draw(ctx, isDark);
      });
      
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', handleResize);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    
    handleResize();
    animate();

    return () => {
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
