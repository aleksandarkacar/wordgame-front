export const ResultsComponent = ({
  isValid,
  isPalindrome,
  uniqueLetters,
  score,
}) => {
  if (isValid) {
    return (
      <div className="score">
        Your word has {uniqueLetters} unique letters and {isPalindrome}. Your
        score is: {score}!
      </div>
    );
  } else {
    return <div style={{ color: "red" }}>*Word is invalid try again</div>;
  }
};
