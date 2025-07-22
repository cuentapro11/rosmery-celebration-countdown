import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

interface MusicControllerProps {
  isEnabled: boolean;
}

const MusicController: React.FC<MusicControllerProps> = ({ isEnabled }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const playerRef = useRef<any>(null);

  useEffect(() => {
    if (!isEnabled) return;

    // Load YouTube IFrame API
    const script = document.createElement('script');
    script.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(script);

    // YouTube API ready callback
    (window as any).onYouTubeIframeAPIReady = () => {
      playerRef.current = new (window as any).YT.Player('youtube-player', {
        height: '1',
        width: '1',
        videoId: 'dQw4w9WgXcQ', // Replace with desired video ID
        playerVars: {
          autoplay: 0,
          controls: 0,
          disablekb: 1,
          fs: 0,
          iv_load_policy: 3,
          modestbranding: 1,
          playsinline: 1,
          rel: 0,
          showinfo: 0,
        },
        events: {
          onReady: () => {
            setIsLoaded(true);
          },
          onStateChange: (event: any) => {
            setIsPlaying(event.data === (window as any).YT.PlayerState.PLAYING);
          },
        },
      });
    };

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
      }
    };
  }, [isEnabled]);

  const toggleMusic = () => {
    if (!playerRef.current || !isLoaded) return;

    if (isPlaying) {
      playerRef.current.pauseVideo();
    } else {
      playerRef.current.playVideo();
    }
  };

  if (!isEnabled) return null;

  return (
    <>
      {/* Hidden YouTube player */}
      <div id="youtube-player" style={{ position: 'absolute', left: '-9999px' }}></div>
      
      {/* Floating music control button */}
      <button
        onClick={toggleMusic}
        disabled={!isLoaded}
        className="fixed bottom-6 right-6 bg-coral text-white p-4 rounded-full shadow-elegant hover:bg-coral-dark transition-all duration-300 hover:scale-105 z-40"
        aria-label={isPlaying ? 'Pausar música' : 'Reproducir música'}
      >
        {isPlaying ? (
          <VolumeX className="w-6 h-6" />
        ) : (
          <Volume2 className="w-6 h-6" />
        )}
      </button>
    </>
  );
};

export default MusicController;