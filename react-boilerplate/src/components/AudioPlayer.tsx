import React, { memo } from 'react';
import "../AudioPlayer.css"

const AudioPlayer: React.FC = () => {
  return (
    <audio controls>
      <source src="./sample.mp3" type="audio/mpeg" />
    </audio>
  );
};

export default memo(AudioPlayer); 