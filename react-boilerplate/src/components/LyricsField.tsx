import React from 'react';

interface LyricsFieldProps {
  lyrics: string;
  values: string[];
  onValueChange?: (index: number, value: string) => void;
  isReadOnly?: boolean;
}

const LyricsField: React.FC<LyricsFieldProps> = ({ lyrics, values, onValueChange, isReadOnly = false }) => {
  return (
    <div>
      {values.map((value, i) => {
        if (lyrics[i] === " ") return <span key={i} style={{ marginLeft: '16px' }} />

        const className = isReadOnly ? `letter ${lyrics[i] === value ? 'pass' : 'fail'}` : 'letter';

        return (
          <input
            key={i}
            className={className}
            maxLength={1}
            value={value}
            readOnly={isReadOnly}
            onInput={(e) => {
              if (onValueChange) {
                const newValue = e.currentTarget.value.substring(0, 1);
                onValueChange(i, newValue);
              }
            }}
          />
        )
      })}
    </div>
  );
};

export default LyricsField; 