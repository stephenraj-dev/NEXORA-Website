import React from 'react';
import introVideo from '../../assets/IntroVideo.mp4';
import introImage from '../../assets/IntroImage.png';

const VideoIntro = () => {
  return (
    <section className="relative h-auto md:sticky md:top-0 md:h-[100dvh] w-full md:overflow-hidden flex items-center justify-center -z-10 bg-black">
      {/* Mobile Image (Normal flow, full height, Hidden on md and up) */}
      <img
        src={introImage}
        alt="NEXORA Intro"
        className="w-full h-auto block md:hidden"
      />
      
      {/* Tablet/Desktop Video (Sticky background, Hidden on mobile) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover hidden md:block"
      >
        <source src={introVideo} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-slate-900/10"></div>
    </section>
  );
};

export default VideoIntro;
