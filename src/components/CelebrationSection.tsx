import React from 'react';
import { Calendar, MapPin, MessageCircle, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CelebrationSection: React.FC = () => {
  const handleAgendar = () => {
    const event = {
      title: 'XV Años de Rosmery',
      details: 'Celebración de los 15 años de Rosmery',
      location: 'Salón de Eventos Arias',
      start: new Date('2025-08-25T15:00:00'),
      end: new Date('2025-08-25T23:00:00')
    };
    
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${event.start.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '')}/${event.end.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '')}&details=${encodeURIComponent(event.details)}&location=${encodeURIComponent(event.location)}`;
    
    window.open(googleCalendarUrl, '_blank');
  };

  const handleConfirmarAsistencia = () => {
    const whatsappMessage = "¡Hola! Confirmo mi asistencia a los XV años de Rosmery el 25 de agosto. ¡No me lo perdería!";
    const whatsappUrl = `https://wa.me/18296851234?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleVerUbicacion = () => {
    const address = "Avenida 27 de Febrero esquina Núñez";
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    window.open(mapsUrl, '_blank');
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Sparkles className="w-16 h-16 text-coral mx-auto mb-6 animate-bounce-soft" />
          <h2 className="text-5xl md:text-6xl font-serif text-gray-elegant mb-4">
            La Celebración
          </h2>
          <div className="w-24 h-0.5 bg-coral mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Día */}
            <div className="text-center bg-rose-soft rounded-3xl p-8 shadow-soft">
              <Calendar className="w-12 h-12 text-coral mx-auto mb-6 animate-float" />
              <h3 className="text-2xl font-serif text-gray-elegant mb-4">Día</h3>
              <p className="text-xl text-gray-light mb-2">25 de Agosto</p>
              <p className="text-lg text-gray-light mb-6">a las 3:00 PM</p>
              <Button 
                onClick={handleAgendar}
                className="bg-coral hover:bg-coral-dark text-white rounded-full px-8 py-3 font-medium transition-all duration-300 transform hover:scale-105"
              >
                Agendar
              </Button>
            </div>

            {/* Lugar */}
            <div className="text-center bg-rose-soft rounded-3xl p-8 shadow-soft">
              <MapPin className="w-12 h-12 text-coral mx-auto mb-6 animate-float" style={{ animationDelay: '0.5s' }} />
              <h3 className="text-2xl font-serif text-gray-elegant mb-4">Lugar</h3>
              <p className="text-xl text-gray-light mb-6">Salón de Eventos Arias</p>
              <Button 
                onClick={handleConfirmarAsistencia}
                className="bg-coral hover:bg-coral-dark text-white rounded-full px-8 py-3 font-medium transition-all duration-300 transform hover:scale-105"
              >
                Confirmar Asistencia
              </Button>
            </div>

            {/* Dirección */}
            <div className="text-center bg-rose-soft rounded-3xl p-8 shadow-soft">
              <MessageCircle className="w-12 h-12 text-coral mx-auto mb-6 animate-float" style={{ animationDelay: '1s' }} />
              <h3 className="text-2xl font-serif text-gray-elegant mb-4">Dirección</h3>
              <p className="text-lg text-gray-light mb-6">Avenida 27 de Febrero esquina Núñez</p>
              <Button 
                onClick={handleVerUbicacion}
                className="bg-coral hover:bg-coral-dark text-white rounded-full px-8 py-3 font-medium transition-all duration-300 transform hover:scale-105"
              >
                Ver Ubicación
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CelebrationSection;