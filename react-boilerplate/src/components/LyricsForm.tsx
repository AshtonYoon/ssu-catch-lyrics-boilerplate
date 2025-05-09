import React from 'react';
import LyricsField from './LyricsField';

interface LyricsFormProps {
  lyrics: string;
  values: string[];
  onValueChange: (index: number, value: string) => void;
  onSubmit: () => void;
}

const LyricsForm: React.FC<LyricsFormProps> = ({ lyrics, values, onValueChange, onSubmit }) => {
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

export default LyricsForm; 