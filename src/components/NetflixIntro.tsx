import React, { useState, useRef } from 'react';

interface NetflixIntroProps {
  onIntroFinish: () => void;
}

const NetflixIntro: React.FC<NetflixIntroProps> = ({ onIntroFinish }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isClicked, setIsClicked] = useState(false);

  const handleInteraction = () => {
    if (!isClicked) {
      setIsClicked(true);

      if (audioRef.current) {
        audioRef.current.play().catch(error => {
          console.error("Audio playback failed:", error);
        });
      }
      
      // Set a timer to match the full animation and sound duration
      setTimeout(() => {
        onIntroFinish();
      }, 3000); // 3 seconds for the full sequence
    }
  };

  return (
    <div
      className={`netflix-intro-container ${isClicked ? 'animate' : ''}`}
      onClick={handleInteraction}
      style={{ cursor: 'pointer' }}
    >
      <div className="netflix-n">
        <div className="middle"></div>
      </div>

      {!isClicked && (
        <div className="click-prompt">
          Click anywhere to continue
        </div>
      )}

      <audio
        ref={audioRef}
        src="/assets/Netflix-Intro-Sound-Effect.mp3"
        preload="auto"
      />
    </div>
  );
};

export default NetflixIntro; 