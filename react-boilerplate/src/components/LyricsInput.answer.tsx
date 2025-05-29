import { useLayoutEffect, useRef, useState } from "react";
import Score from "./Score.answer";

const LyricsInput = ({ submitted }: { submitted: boolean }) => {
  const letterRef = useRef<HTMLSpanElement>(null);
  const [letterWidth, setLetterWidth] = useState(0);
  const spaceWidth = 19.5;
  const answerRef = useRef(
    "아슬히 고개 내민 내게 첫 봄인사를 건네줘요 피울 수 있게 도와줘요"
  );
  const answer = answerRef.current;

  useLayoutEffect(() => {
    if (letterRef.current) {
      setLetterWidth(letterRef.current.getBoundingClientRect().width);
    }
  }, [letterRef]);

  const [text, setText] = useState(
    [...answer].map((x) => (x === " " ? " " : "ㅁ")).join("")
  );

  return (
    <>
      <span ref={letterRef} style={{ fontSize: "2rem", visibility: "hidden" }}>
        {"뷁"}
      </span>
      <div className="textarea-container">
        <textarea
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          readOnly={submitted}
        />
        <div className="underline-container">
          {[...answer].map((char, index) => {
            const isEmpty = char === " ";
            if (isEmpty) {
              return (
                <div
                  key={index}
                  className={"space-decoration"}
                  style={{ width: spaceWidth }}
                />
              );
            }

            if (!submitted) {
              return (
                <div
                  key={index}
                  className={"letter-decoration"}
                  style={{ width: letterWidth }}
                />
              );
            }

            const pof = char === text[index] ? "pass" : "fail";
            return (
              <div
                key={index}
                className={`letter-decoration ${pof}`}
                style={{ width: letterWidth }}
              />
            );
          })}
        </div>
      </div>
      <Score submitted={submitted} answer={answer} text={text} />
    </>
  );
};

export default LyricsInput;
