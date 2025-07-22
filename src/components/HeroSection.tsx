import React from 'react';
import heroLeft from '@/assets/hero-left.jpg';
import heroRight from '@/assets/hero-right.jpg';

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen flex">
      {/* Left Image with Parallax Effect */}
      <div 
        className="w-1/2 h-full parallax-bg flex items-center justify-center"
        style={{
          backgroundImage: `url(${heroLeft})`,
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
      
      {/* Right Image */}
      <div className="w-1/2 h-full flex items-center justify-center overflow-hidden">
        <img
          src={heroRight}
          alt="Celebración de XV años"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Overlay Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white z-10">
          <h1 className="text-6xl md:text-8xl font-serif mb-4 drop-shadow-2xl">
            Mis XV
          </h1>
          <p className="text-2xl md:text-3xl font-light drop-shadow-lg">
            Una celebración inolvidable
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;