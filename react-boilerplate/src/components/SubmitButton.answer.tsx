const SubmitButton = ({
  submitted,
  setSubmitted,
}: {
  submitted: boolean;
  setSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div>
      {!submitted && (
        <button
          className="btn-hover color-1"
          onClick={() => {
            setSubmitted(true);
          }}
        >
          제출하기
        </button>
      )}
      {submitted && (
        <button
          className="btn-hover color-2"
          onClick={() => {
            setSubmitted(false);
          }}
        >
          다시하기
        </button>
      )}
    </div>
  );
};

export default SubmitButton;
