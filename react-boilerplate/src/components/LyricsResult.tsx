import React from 'react';
import LyricsField from './LyricsField';

interface LyricsResultProps {
  lyrics: string;
  values: string[];
  score: number;
  totalLength: number;
  onReset: () => void;
}

const LyricsResult: React.FC<LyricsResultProps> = ({ lyrics, values, score, totalLength, onReset }) => {
  return (
    <>
      <LyricsField
        lyrics={lyrics}
        values={values}
        isReadOnly={true}
      />
      <div className='score'>{score}/{totalLength} 점</div>
      <div>
        <button className='btn-hover color-2' onClick={onReset}>🤔 다시하기</button>
      </div>
    </>
  );
};

export default LyricsResult; 