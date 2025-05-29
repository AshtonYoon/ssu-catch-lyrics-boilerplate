import { useLayoutEffect, useRef, useState } from "react";
import Score from "./Score";

/**
 * LyricsInput 컴포넌트는 가사 입력을 받는 컴포넌트입니다.
 * 입력을 담당하는 <textarea /> 엘리먼트와
 * 글자의 수와 위치를 쉽게 파악할 수 있도록 도와주는 div.underline-container 엘리먼트
 * 그리고 제출한 답이 정답과 비교했을 때 몇 개나 일치하는지 알려주는 <Score /> 컴포넌트로 구성되어있습니다.
 */
const LyricsInput = ({ submitted }: { submitted: boolean }) => {
  const letterRef = useRef<HTMLSpanElement>(null);
  const [letterWidth, setLetterWidth] = useState(0);
  const spaceWidth = 19.5;
  const answer =
    "아슬히 고개 내민 내게 첫 봄인사를 건네줘요 피울 수 있게 도와줘요";

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
          // 정답을 제출한 뒤에는 더이상 입력을 받을 수 없도록 처리해줘야합니다. 어떻게 처리해야할까요?? 👀
        />
        <div className="underline-container">
          {[...answer].map((char, index) => {
            // ../index.css 내부에 선언된 .letter-decoration, .space-decoration .pass .fail 클래스를 모두 활용해야합니다.

            const isEmpty = char === " ";
            if (isEmpty) {
              // 공백 문자는 밑줄 대신 약간의 여백을 가진 엘리먼트를 리턴해야합니다.
              // <div>로 시작하는 엘리먼트를 완성해주세요
              // 가로 길이는 spaceWidth 값을 넣어주면 됩니다
              return null;
            }

            if (!submitted) {
              // 정답을 제출하기 전 까만색 밑줄을 가진 컴포넌트를 리턴해야합니다.
              // // <div>로 시작하는 엘리먼트를 완성해주세요
              // 가로 길이는 letterWidth 값을 넣어주면 됩니다
              return null;
            }

            // 제출한 답이 정답과 일치하면 'pass', 일치하지 않으면 'fail'을 반환하는 로직을 완성해주세요
            // 반환된 값은 className으로 활용됩니다.
            const pof = false;

            // <div>로 시작하는 엘리먼트를 완성해주세요
            return null;
          })}
        </div>
      </div>
      <Score submitted={submitted} answer={answer} text={text} />
    </>
  );
};

export default LyricsInput;
