import React, { useRef, useEffect, useState } from 'react';
import "../AudioPlayer.css"

const FilledHeart: React.FC = () => <span>❤️</span>

const EmptyHeart: React.FC = () => <span>🩶</span>

const disabledStyle: React.CSSProperties = {
  opacity: 0.3,
  pointerEvents: 'none'
}

const AudioPlayer: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const maxLife = 3

  const handlePlay = () => { }
  const handleEnded = () => { }

  // audio를 조작할 수 없는 조건을 완성해주세요
  const disabled = false

  return (
    <>
      <audio
        ref={audioRef}
        controls
        style={undefined}
      // 재생상태에 맞게 style을 조작해주세요
      >
        <source type="audio/mpeg" src='./sample.mp3' />
      </audio>
      <div className='life-container'>
        {/* 이 부분을 채워주세요 */}
      </div>
    </>
  );
};

export default AudioPlayer; 