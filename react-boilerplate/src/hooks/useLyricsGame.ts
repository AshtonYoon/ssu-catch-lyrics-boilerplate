import { useMemo, useRef, useState } from 'react';

export const useLyricsGame = () => {
  const lyricsRef = useRef("아슬히 고개 내민 내게 첫 봄인사를 건네줘요 피울 수 있게 도와줘요")
  const lyrics = lyricsRef.current;

  const [values, setValues] = useState<string[]>(Array(lyrics.length).fill(''));
  const [submitted, setSubmitted] = useState(false);

  const score = useMemo(() => {
    let n = 0;
    values.forEach((_, i) => {
      if (lyrics[i] === values[i]) n++;
    });
    return n;
  }, [values]);

  const lengthWithoutSpace = useMemo(() => {
    return lyrics.replace(/\s/g, '').length;
  }, [lyrics]);

  const handleValueChange = (index: number, value: string) => {
    setValues(prev => [...prev.slice(0, index), value, ...prev.slice(index + 1, prev.length)]);
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
  };

  return {
    lyrics,
    values,
    submitted,
    score,
    lengthWithoutSpace,
    handleValueChange,
    handleSubmit,
    handleReset,
  };
}; 