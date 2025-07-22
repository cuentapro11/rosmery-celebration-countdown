import React, { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import CountdownTimer from '@/components/CountdownTimer';
import WaveDivider from '@/components/WaveDivider';
import CelebrationSection from '@/components/CelebrationSection';
import MemoryCarousel from '@/components/MemoryCarousel';
import PartySection from '@/components/PartySection';
import GiftsSection from '@/components/GiftsSection';
import Footer from '@/components/Footer';
import MusicWelcomeModal from '@/components/MusicWelcomeModal';
import MusicController from '@/components/MusicController';

const Index = () => {
  const [showMusicModal, setShowMusicModal] = useState(true);
  const [musicEnabled, setMusicEnabled] = useState(false);

  const handleMusicChoice = (withMusic: boolean) => {
    setMusicEnabled(withMusic);
    setShowMusicModal(false);
  };

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
      
      {showMusicModal && <MusicWelcomeModal onChoice={handleMusicChoice} />}
      <MusicController isEnabled={musicEnabled} />
    </div>
  );
};

export default Index;
