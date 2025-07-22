import React from 'react';

interface WaveDividerProps {
  className?: string;
  flip?: boolean;
}

const WaveDivider: React.FC<WaveDividerProps> = ({ className = "", flip = false }) => {
  return (
    <div className={`relative ${className}`}>
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className={`w-full h-12 ${flip ? 'rotate-180' : ''}`}
        style={{ filter: 'drop-shadow(0 4px 8px rgba(242, 140, 140, 0.1))' }}
      >
        <path
          d="M0,60 C200,100 400,20 600,60 C800,100 1000,20 1200,60 L1200,120 L0,120 Z"
          fill="hsl(var(--rose-soft))"
        />
      </svg>
    </div>
  );
};

export default WaveDivider;