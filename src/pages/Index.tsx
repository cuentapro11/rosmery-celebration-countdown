import React from 'react';
import HeroSection from '@/components/HeroSection';
import CountdownTimer from '@/components/CountdownTimer';
import WaveDivider from '@/components/WaveDivider';
import CelebrationSection from '@/components/CelebrationSection';
import MemoryCarousel from '@/components/MemoryCarousel';
import PartySection from '@/components/PartySection';
import GiftsSection from '@/components/GiftsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      
      <WaveDivider />
      <CountdownTimer />
      
      <WaveDivider flip />
      <CelebrationSection />
      
      <WaveDivider />
      <MemoryCarousel />
      
      <WaveDivider flip />
      <PartySection />
      
      <WaveDivider />
      <GiftsSection />
      
      <WaveDivider flip />
      <Footer />
    </div>
  );
};

export default Index;
