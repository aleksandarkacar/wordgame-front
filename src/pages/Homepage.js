import { useForm } from "react-hook-form";
import { useState } from "react";
import wordGameService from "../services/WordGameService";
import { ResultsComponent } from "../components/ResultsComponent";
import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";
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
    <div className="App">
      <Navbar />
      <div className="main">
        <div className="game">
          <h1>Welcome to the word game:</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="form">
            Please enter your word:
            <input
              type="text"
              id="word"
              {...register("word", { required: "Word is required" })}
              className="input"
            />
            <button type="submit" className="button">
              Submit
            </button>
            {errors.word && (
              <p style={{ color: "red" }}>{errors.word.message}</p>
            )}
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
        <div className="rules">
          <h2>The rules of the game are:</h2>
          <p>1. You gain one point for each unique letter in your word.</p>
          <p>2. If your word is a palindrome you gain 3 extra points.</p>
          <p>
            2. If your word is one letter off from being a palindrome you gain 2
            extra points.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};
