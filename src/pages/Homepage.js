import { useForm } from "react-hook-form";
import { useState } from "react";
import wordGameService from "../services/WordGameService";
import { ResultsComponent } from "../components/ResultsComponent";
export const HomePage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [response, setResponse] = useState(false);

  const onSubmit = async (e) => {
    try {
      const newResponseData = await wordGameService.verify(e.word);
      setResponse(newResponseData);
    } catch (error) {
      console.error("Error verifying word:", error);
    }
  };

  return (
    <div>
      <h1>Word Game HomePage:</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        Please enter your word:
        <input
          type="text"
          id="word"
          {...register("word", { required: "Word is required" })}
        />
        <button type="submit">Submit</button>
        {/* {errors.word && <p>{errors.word.message}</p>} */}
      </form>
      {response && (
        <ResultsComponent
          isValid={response.valid}
          isPalindrome={response.palindrome}
          uniqueLetters={response.uniqueLetters}
          score={response.score}
        />
      )}
    </div>
  );
};
