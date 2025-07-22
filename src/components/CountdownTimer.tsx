import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Heart } from 'lucide-react';

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-08-25T15:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <Heart className="w-12 h-12 text-coral mx-auto mb-6 animate-pulse-soft" />
          <h2 className="text-4xl md:text-5xl font-serif text-gray-elegant mb-4">
            ¡Faltan solo...!
          </h2>
          <p className="text-xl text-gray-light mb-12">
            Para mi gran celebración
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              { label: 'Días', value: timeLeft.days },
              { label: 'Horas', value: timeLeft.hours },
              { label: 'Minutos', value: timeLeft.minutes },
              { label: 'Segundos', value: timeLeft.seconds }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-elegant">
                <div className="text-4xl md:text-5xl font-bold text-coral mb-2">
                  {String(item.value).padStart(2, '0')}
                </div>
                <div className="text-gray-light text-sm font-medium uppercase tracking-wider">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default CountdownTimer;