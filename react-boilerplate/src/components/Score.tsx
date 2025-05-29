const Score = ({
  submitted,
  answer,
  text,
}: {
  submitted: boolean;
  answer: string;
  text: string;
}) => {
  // 점수를 계산하는 로직을 작성해주세요, 공백문자는 점수에서 제외시켜야합니다
  const score = 0;

  const total = answer.replace(/\s/g, "").length;

  if (!submitted) return null;

  return (
    <div className="score">
      {score}/{total} 점
    </div>
  );
};

export default Score;
