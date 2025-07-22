import React from 'react';
import { Gift, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const GiftsSection: React.FC = () => {
  const handleGiftsClick = () => {
    window.open('https://amazon.com/wedding-registry', '_blank');
  };

  return (
    <section className="py-20 bg-gradient-rose">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <Gift className="w-16 h-16 text-coral mx-auto mb-8 animate-bounce-soft" />
          
          <h2 className="text-5xl md:text-6xl font-serif text-gray-elegant mb-6">
            Regalos
          </h2>
          
          <p className="text-xl text-gray-light mb-12">
            Si deseas regalarme algo más que tu hermosa presencia...
          </p>
          
          <div className="bg-white rounded-3xl p-8 shadow-elegant max-w-lg mx-auto">
            <Gift className="w-12 h-12 text-coral mx-auto mb-6 animate-float" />
            <h3 className="text-2xl font-serif text-gray-elegant mb-4">Lista de Regalos</h3>
            <p className="text-gray-light mb-6">
              Encuentra ideas perfectas para este día especial
            </p>
            <Button 
              onClick={handleGiftsClick}
              className="bg-coral hover:bg-coral-dark text-white rounded-full px-8 py-3 font-medium transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2"
            >
              <span>Regalos</span>
              <ExternalLink className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiftsSection;