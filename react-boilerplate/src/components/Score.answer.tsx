const Score = ({
  submitted,
  answer,
  text,
}: {
  submitted: boolean;
  answer: string;
  text: string;
}) => {
  const score = answer.split("").reduce((acc, curr, i) => {
    if (curr == text[i] && curr !== " ") return acc + 1;
    return acc;
  }, 0);

  const total = answer.replace(/\s/g, "").length;

  if (!submitted) return null;

  return (
    <div className="score">
      {score}/{total} 점
    </div>
  );
};

export default Score;
