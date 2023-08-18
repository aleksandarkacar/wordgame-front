export const ResultsComponent = ({
  isValid,
  isPalindrome,
  uniqueLetters,
  score,
}) => {
  if (isValid) {
    return (
      <div>
        Your word has {uniqueLetters} unique letters and {isPalindrome}. Your
        score is {score}
      </div>
    );
  } else {
    return (
      <div>
        <h1>Word is invalid try again</h1>
      </div>
    );
  }
};
