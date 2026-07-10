import React from 'react';
import introVideo from '../../assets/IntroVideo.mp4';

const VideoIntro = () => {
  return (
    <section className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center -z-10">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={introVideo} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-slate-900/30"></div>
    </section>
  );
};

export default VideoIntro;
