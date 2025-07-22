import React, { useState } from 'react';
import { Music, Shirt, Info, X, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const PartySection: React.FC = () => {
  const [showDressCode, setShowDressCode] = useState(false);
  const [showTips, setShowTips] = useState(false);

  const handleSugerirCancion = () => {
    const whatsappMessage = "¡Hola! Me gustaría sugerir una canción para la playlist de los XV años de Rosmery: ";
    const whatsappUrl = `https://wa.me/18296851234?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-serif text-gray-elegant mb-6">
            Fiesta
          </h2>
          <p className="text-xl text-gray-light max-w-2xl mx-auto">
            Hagamos juntos una fiesta épica. Aquí algunos detalles a tener en cuenta.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {/* Música */}
          <div className="bg-rose-soft border-2 border-coral/20 rounded-3xl p-8 text-center shadow-soft">
            <Music className="w-12 h-12 text-coral mx-auto mb-6 animate-bounce-soft" />
            <h3 className="text-2xl font-serif text-gray-elegant mb-4">Música</h3>
            <p className="text-gray-light mb-6">
              ¿Cuál es la canción que no debe faltar en la PlayList de la fiesta?
            </p>
            <Button 
              onClick={handleSugerirCancion}
              className="bg-coral hover:bg-coral-dark text-white rounded-full px-6 py-2 transition-all duration-300 transform hover:scale-105"
            >
              Sugerir Canción
            </Button>
          </div>

          {/* Código de Vestimenta */}
          <div className="bg-rose-soft border-2 border-coral/20 rounded-3xl p-8 text-center shadow-soft">
            <Shirt className="w-12 h-12 text-coral mx-auto mb-6 animate-float" />
            <h3 className="text-2xl font-serif text-gray-elegant mb-4">Código de Vestimenta</h3>
            <p className="text-gray-light mb-6">
              Una orientación para tu vestuario
            </p>
            <Button 
              onClick={() => setShowDressCode(true)}
              className="bg-coral hover:bg-coral-dark text-white rounded-full px-6 py-2 transition-all duration-300 transform hover:scale-105"
            >
              Ver más
            </Button>
          </div>

          {/* Tips y Notas */}
          <div className="bg-rose-soft border-2 border-coral/20 rounded-3xl p-8 text-center shadow-soft">
            <Info className="w-12 h-12 text-coral mx-auto mb-6 animate-pulse-soft" />
            <h3 className="text-2xl font-serif text-gray-elegant mb-4">Tips y Notas</h3>
            <p className="text-gray-light mb-6">
              Información adicional para tener en cuenta
            </p>
            <Button 
              onClick={() => setShowTips(true)}
              className="bg-coral hover:bg-coral-dark text-white rounded-full px-6 py-2 transition-all duration-300 transform hover:scale-105"
            >
              +Info
            </Button>
          </div>
        </div>

        {/* Dress Code Modal */}
        <Dialog open={showDressCode} onOpenChange={setShowDressCode}>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle className="text-2xl font-serif text-gray-elegant">Código de Vestimenta</DialogTitle>
              <DialogDescription className="text-gray-light">
                Sugerencias para tu outfit perfecto
              </DialogDescription>
            </DialogHeader>
            <div className="text-center py-6">
              <Shirt className="w-16 h-16 text-coral mx-auto mb-6" />
              <div className="space-y-4">
                <div className="bg-rose-soft rounded-2xl p-4">
                  <h4 className="font-semibold text-gray-elegant mb-2">Para Caballeros</h4>
                  <p className="text-gray-light">Pantalón fino y camisa roja</p>
                </div>
                <div className="bg-rose-soft rounded-2xl p-4">
                  <h4 className="font-semibold text-gray-elegant mb-2">Para Damas</h4>
                  <p className="text-gray-light">Vestido elegante en tonos coral o rosa</p>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* Tips Modal */}
        <Dialog open={showTips} onOpenChange={setShowTips}>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle className="text-2xl font-serif text-gray-elegant">Tips Importantes</DialogTitle>
              <DialogDescription className="text-gray-light">
                Información que debes saber
              </DialogDescription>
            </DialogHeader>
            <div className="text-center py-6">
              <Info className="w-16 h-16 text-coral mx-auto mb-6" />
              <div className="bg-rose-soft rounded-2xl p-6">
                <h4 className="font-semibold text-gray-elegant mb-2">Restricción de Edad</h4>
                <p className="text-gray-light">No menores de 15 años</p>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default PartySection;