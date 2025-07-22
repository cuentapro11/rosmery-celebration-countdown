import React, { useState } from 'react';
import { Camera, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import memory1 from '@/assets/memory-1.jpg';
import memory2 from '@/assets/memory-2.jpg';
import memory3 from '@/assets/memory-3.jpg';

const MemoryCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const images = [
    { src: memory1, alt: 'Recuerdos de la infancia' },
    { src: memory2, alt: 'Momentos especiales' },
    { src: memory3, alt: 'Celebraciones familiares' }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="py-20 bg-gradient-rose">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-serif text-gray-elegant mb-6">
            Un recorrido por estos 15 años
          </h2>
          <p className="text-xl text-gray-light mb-8">
            Junto a personas que son muy importantes en mi vida
          </p>
          <Camera className="w-16 h-16 text-coral mx-auto animate-pulse-soft" />
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative bg-white rounded-3xl shadow-deep overflow-hidden">
            <div className="aspect-video relative overflow-hidden">
              <img
                src={images[currentSlide].src}
                alt={images[currentSlide].alt}
                className="w-full h-full object-cover transition-transform duration-500"
              />
              
              {/* Navigation Buttons */}
              <Button
                onClick={prevSlide}
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-coral rounded-full w-12 h-12 shadow-lg transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
              
              <Button
                onClick={nextSlide}
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-coral rounded-full w-12 h-12 shadow-lg transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            </div>
            
            {/* Dots Indicator */}
            <div className="flex justify-center space-x-3 py-6">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-coral scale-125' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MemoryCarousel;