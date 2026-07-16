import React, { useRef, useEffect, useState } from 'react';
import './robotAnimations.css';
import { useTheme } from '../../hooks/useTheme';

const RobotModel = ({ animationState, onClick }) => {
  const { isDarkMode } = useTheme();
  const robotRef = useRef(null);
  const headRef = useRef(null);
  const eyesWrapperRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Gradient colors for the cute cyan/green robot
  const topColor = isDarkMode ? '#10B981' : '#34D399'; // Greenish
  const bottomColor = isDarkMode ? '#06B6D4' : '#22D3EE'; // Cyan

  const [mouseIdle, setMouseIdle] = useState(true);

  useEffect(() => {
    let ticking = false;
    let idleTimeout;

    const handleMouseMove = (e) => {
      setMouseIdle(false);
      clearTimeout(idleTimeout);
      
      idleTimeout = setTimeout(() => {
        setMouseIdle(true);
      }, 2000);

      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!robotRef.current || !headRef.current) {
            ticking = false;
            return;
          }
          
          const rect = robotRef.current.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2 - 20; // approximate head center

          const dx = e.clientX - centerX;
          const dy = e.clientY - centerY;

          const maxDistance = window.innerWidth / 2;
          const distanceX = Math.max(-1, Math.min(1, dx / maxDistance));
          const distanceY = Math.max(-1, Math.min(1, dy / maxDistance));
          
          const maxEyeMoveX = 6;
          const maxEyeMoveY = 4;
          
          const eyeX = distanceX * maxEyeMoveX;
          const eyeY = distanceY * maxEyeMoveY;
          
          const headX = distanceX * 8;
          const headY = distanceY * 5;
          const headRotate = distanceX * 15; // up to 15deg tilt

          if (eyesWrapperRef.current) {
            eyesWrapperRef.current.style.transform = `translate(${eyeX}px, ${eyeY}px)`;
          }
          headRef.current.style.transform = `translate(${headX}px, ${headY}px) rotate(${headRotate}deg)`;
          
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(idleTimeout);
    };
  }, []);

  // Use waving animation if hovered
  const currentAnimation = isHovered ? 'waving' : animationState;

  return (
    <div 
      className={`relative cursor-pointer transition-transform duration-300 hover:scale-105 robot-${currentAnimation}`}
      style={{ width: '140px', height: '160px' }}
      ref={robotRef}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Tooltip Popup when Idle */}
      {animationState === 'idle' && mouseIdle && !isHovered && (
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white dark:bg-slate-800 text-slate-800 dark:text-white px-4 py-2 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700 whitespace-nowrap text-sm font-medium animate-bounce z-10">
          Need help? 👋
          <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white dark:bg-slate-800 border-b border-r border-slate-100 dark:border-slate-700 transform rotate-45"></div>
        </div>
      )}

      <div className="robot-body-wrapper w-full h-full absolute flex flex-col items-center justify-end pb-4 drop-shadow-2xl">
        
        <svg viewBox="0 0 200 240" className="w-full h-full absolute overflow-visible" style={{ pointerEvents: 'none' }}>
          <defs>
            <linearGradient id="cuteGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={topColor} />
              <stop offset="100%" stopColor={bottomColor} />
            </linearGradient>
            <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="15" stdDeviation="15" floodColor={bottomColor} floodOpacity="0.4" />
            </filter>
            <filter id="visorGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Floating Shadow beneath the robot */}
          <ellipse cx="100" cy="220" rx="35" ry="8" fill={bottomColor} opacity="0.2" className="robot-shadow" />

          {/* Left Arm (Waving Arm) */}
          <g className="robot-arm-left" style={{ transformOrigin: '70px 140px' }}>
            <path d="M 65 145 C 30 135, 30 165, 55 175 C 65 180, 75 160, 70 145 Z" fill="url(#cuteGrad)" />
          </g>

          {/* Right Arm */}
          <g className="robot-arm-right" style={{ transformOrigin: '130px 140px' }}>
            <path d="M 135 145 C 150 145, 155 180, 140 185 C 130 190, 125 160, 130 145 Z" fill="url(#cuteGrad)" />
            {/* White highlight for gloss */}
            <path d="M 138 150 C 145 150, 148 165, 145 170" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
          </g>

          {/* Main Body */}
          <path d="M 70 130 Q 100 135 130 130 C 150 130, 155 180, 130 200 C 115 210, 85 210, 70 200 C 45 180, 50 130, 70 130 Z" fill="url(#cuteGrad)" filter="url(#softShadow)" />

          {/* Head Group */}
          <g ref={headRef} className="robot-head transition-transform duration-200 ease-out" style={{ transformOrigin: '100px 100px' }}>
            
            {/* Antenna Base */}
            <rect x="90" y="55" width="20" height="8" rx="2" fill="url(#cuteGrad)" />
            {/* Antenna Stem */}
            <rect x="98" y="35" width="4" height="25" fill="#34D399" />
            {/* Antenna Ball */}
            <circle cx="100" cy="30" r="6" fill="#34D399" />

            {/* Head Shape */}
            <path d="M 40 105 C 40 60, 70 55, 100 55 C 130 55, 160 60, 160 105 C 160 135, 130 145, 100 145 C 70 145, 40 135, 40 105 Z" fill="url(#cuteGrad)" />
            
            {/* Head Gloss Highlight */}
            <path d="M 55 80 C 65 65, 85 62, 100 62" fill="none" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" opacity="0.4" />
            <circle cx="125" cy="70" r="5" fill="#FFFFFF" opacity="0.5" />
            <circle cx="138" cy="78" r="3" fill="#FFFFFF" opacity="0.5" />

            {/* Visor (Black Face) */}
            <path d="M 50 105 C 50 85, 150 85, 150 105 C 150 125, 50 125, 50 105 Z" fill="#0A0F1C" />

            {/* Eyes */}
            <g ref={eyesWrapperRef} className="robot-eyes-wrapper" style={{ transformOrigin: '100px 105px' }}>
              {isHovered || animationState === 'celebrating' || animationState === 'dancing' ? (
                // Happy Cute Eyes ^ ^
                <>
                  <path d="M 75 105 Q 85 95 95 105" fill="none" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" filter="url(#visorGlow)" />
                  <path d="M 105 105 Q 115 95 125 105" fill="none" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" filter="url(#visorGlow)" />
                </>
              ) : (
                // Big Anime Eyes
                <>
                  <g>
                    <circle cx="82" cy="105" r="10" fill="#FFFFFF" filter="url(#visorGlow)" />
                    {/* Inner Pupils / Highlights */}
                    <circle cx="82" cy="101" r="4" fill="#0A0F1C" />
                    <circle cx="84" cy="100" r="2" fill="#FFFFFF" />
                  </g>
                  <g>
                    <circle cx="118" cy="105" r="10" fill="#FFFFFF" filter="url(#visorGlow)" />
                    <circle cx="118" cy="101" r="4" fill="#0A0F1C" />
                    <circle cx="120" cy="100" r="2" fill="#FFFFFF" />
                  </g>
                </>
              )}
            </g>

            {/* Cute Mouth */}
            <path d="M 90 128 C 90 135, 110 135, 110 128 Z" fill="#FFFFFF" opacity="0.9" />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default RobotModel;
