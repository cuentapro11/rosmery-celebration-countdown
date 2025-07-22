import React from 'react';
import { Heart, Sparkles } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-coral py-16">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <Sparkles className="w-12 h-12 text-white mx-auto mb-6 animate-pulse-soft" />
          
          <h2 className="text-5xl md:text-6xl font-serif text-white mb-4">
            Mis XV
          </h2>
          
          <h3 className="text-3xl md:text-4xl font-serif text-white/90 mb-6">
            Rosmery
          </h3>
          
          <p className="text-xl text-white/80 mb-8">
            Mis 15 años
          </p>
          
          <div className="flex items-center justify-center space-x-3 text-white/70">
            <Heart className="w-6 h-6 animate-pulse-soft" />
            <span className="text-lg">25 de Agosto, 2025</span>
            <Heart className="w-6 h-6 animate-pulse-soft" />
          </div>
          
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-white/60 text-sm">
              Una celebración llena de amor, alegría y momentos inolvidables
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;