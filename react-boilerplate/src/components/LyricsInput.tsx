import React from 'react';
import LyricsField from './LyricsField';

interface LyricsInputProps {
  lyrics: string;
  values: string[];
  onValueChange: (index: number, value: string) => void;
  onSubmit: () => void;
}

const LyricsInput: React.FC<LyricsInputProps> = ({ lyrics, values, onValueChange, onSubmit }) => {
  return (
    <>
      <LyricsField
        lyrics={lyrics}
        values={values}
        onValueChange={onValueChange}
      />
      <div>
        <button className='btn-hover color-1' onClick={onSubmit}>제출하기</button>
      </div>
    </>
  );
};

export default LyricsInput; 