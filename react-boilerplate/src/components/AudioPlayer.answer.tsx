import React, { useRef, useEffect, useState } from "react";
import "../AudioPlayer.css";

const AudioPlayer: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const maxLife = 3;
  const [life, setLife] = useState(maxLife);

  const handlePlay = () => {
    setLife((prev) => Math.max(prev - 1, 0));
    setIsPlaying(true);
  };
  const handleEnded = () => setIsPlaying(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.addEventListener("play", handlePlay);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  const disabled = isPlaying || (!isPlaying && life === 0);

  return (
    <>
      <audio
        ref={audioRef}
        controls
        style={
          disabled
            ? {
                opacity: 0.3,
                pointerEvents: "none",
              }
            : undefined
        }
      >
        <source type="audio/mpeg" src="./sample.mp3" />
      </audio>
      <div className="life-container">
        {0 < life ? <span>❤️</span> : <span>🩶</span>}
        {1 < life ? <span>❤️</span> : <span>🩶</span>}
        {2 < life ? <span>❤️</span> : <span>🩶</span>}
      </div>
    </>
  );
};

export default AudioPlayer;
