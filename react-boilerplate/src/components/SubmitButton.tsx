const SubmitButton = ({
  submitted,
  setSubmitted,
}: {
  submitted: boolean;
  setSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const _submitButton = (
    <button
      className="btn-hover color-1"
      onClick={() => {
        // 동작을 구현해주세요
      }}
    >
      제출하기
    </button>
  );

  const _retryButton = (
    <button
      className="btn-hover color-2"
      onClick={() => {
        // 동작을 구현해주세요
      }}
    >
      다시하기
    </button>
  );

  return (
    <div>
      {
        // submitted 상태에 따라 각각 다른 버튼을 렌더링시켜주세요
      }
    </div>
  );
};

export default SubmitButton;
