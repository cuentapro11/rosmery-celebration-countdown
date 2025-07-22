import React, { useState } from 'react';
import { Music, Volume2 } from 'lucide-react';

interface MusicWelcomeModalProps {
  onChoice: (withMusic: boolean) => void;
}

const MusicWelcomeModal: React.FC<MusicWelcomeModalProps> = ({ onChoice }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 max-w-md mx-4 text-center shadow-elegant">
        <Music className="w-16 h-16 text-coral mx-auto mb-6 animate-pulse-soft" />
        <h2 className="text-2xl font-serif text-gray-elegant mb-4">
          Invitación de XV de Rosmery
        </h2>
        <p className="text-gray-light mb-8">
          ¿Te gustaría disfrutar de la experiencia con música de fondo?
        </p>
        <div className="flex flex-col space-y-4">
          <button
            onClick={() => onChoice(true)}
            className="flex items-center justify-center space-x-2 bg-coral text-white px-6 py-3 rounded-full hover:bg-coral-dark transition-colors"
          >
            <Volume2 className="w-5 h-5" />
            <span>Entrar con música</span>
          </button>
          <button
            onClick={() => onChoice(false)}
            className="bg-gray-100 text-gray-elegant px-6 py-3 rounded-full hover:bg-gray-200 transition-colors"
          >
            Entrar sin música
          </button>
        </div>
      </div>
    </div>
  );
};

export default MusicWelcomeModal;