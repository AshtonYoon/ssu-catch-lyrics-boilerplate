import React from 'react';
import "../AudioPlayer.css"

const AudioPlayer: React.FC = () => {
  return (
    <audio controls>
      <source type="audio/mpeg" />
    </audio>
  );
};

export default AudioPlayer; 