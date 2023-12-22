import { useState, useEffect } from "react";
import "./showQuiz.css"; // Import your CSS file for styling

import { QuizData as questions } from "../QuizData";

const TestGenerator = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [timer, setTimer] = useState(10);
  const [canLoadNextQuestion, setCanLoadNextQuestion] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [showMistakes, setShowMistakes] = useState(false);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);

      return () => clearInterval(interval);
    } else {
      // Enable loading the next question when the timer reaches 0
      setCanLoadNextQuestion(true);
    }
  }, [timer]);

  const handleOptionSelect = (selected) => {
    // Check if the selected option is correct
    const correctAnswer = questions[currentQuestion].correctAnswer;
    const isAnswerCorrect = selected === correctAnswer;

    // Update state to show correct or incorrect feedback
    setSelectedOption(selected);
    setIsCorrect(isAnswerCorrect);

    // Increment the correct answers count
    if (isAnswerCorrect) {
      setCorrectAnswers((prevCorrectAnswers) => prevCorrectAnswers + 1);
    }

    // Stop the timer when an option is selected
    setTimer(0);
  };

  const handleNextQuestion = () => {
    // Load the next question only if the "Next" button is enabled
    if (canLoadNextQuestion) {
      // Move to the next question
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setTimer(10);
        setSelectedOption(null);
        setIsCorrect(null);
        setCanLoadNextQuestion(false); // Disable loading the next question
      } else {
        // End of the test
        setShowResult(true);
      }
    }
  };

  const handleRestart = () => {
    // Reset all state values to restart the test
    setCurrentQuestion(0);
    setSelectedOption(null);
    setIsCorrect(null);
    setTimer(10);
    setCanLoadNextQuestion(false);
    setCorrectAnswers(0);
    setShowResult(false);
    setShowMistakes(false);

    // Reset selected options for each question
    const resetQuestions = questions.map((q) => ({
      ...q,
      selectedOption: null,
    }));
    setQuestions(resetQuestions);
  };

  const handleShowMistakes = () => {
    // Display mistakes
    setShowMistakes(true);
  };

  return (
    <div className="test-container">
      {showResult ? (
        <div className="testResult">
          <p>
            Test completed! Your result:{" "}
            {((correctAnswers / questions.length) * 100).toFixed(2)}%
          </p>
          <button className="nextBtn restartBtn" onClick={handleRestart}>
            Restart
          </button>
          <button
            className="nextBtn showResultBtn"
            onClick={handleShowMistakes}
          >
            Show correct answers
          </button>
        </div>
      ) : (
        <div>
          <p>{questions[currentQuestion].question}</p>
          <div className="options-container">
            {questions[currentQuestion].options.map((option, index) => (
              <div
                key={index}
                onClick={() => handleOptionSelect(option)}
                className={`option ${
                  selectedOption === option
                    ? isCorrect
                      ? "correct"
                      : "incorrect"
                    : ""
                }`}
              >
                {option}
              </div>
            ))}
          </div>
          <div className="timer">Time left: {timer}s</div>
          <button
            className="nextBtn"
            onClick={handleNextQuestion}
            disabled={!canLoadNextQuestion}
          >
            Next
          </button>
        </div>
      )}

      {showMistakes && (
        <div className="correctResults">
          {questions.map((q, index) => (
            <div
              key={index}
              className={`mistake ${
                q.correctAnswer !== q.selectedOption ? "incorrect" : ""
              }`}
            >
              <h1>
                {index + 1}. {q.question}
              </h1>
              <p
                style={{
                  color: "green",
                  paddingLeft: "20px",
                }}
              >
                Correct Answer: {q.correctAnswer}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TestGenerator;
