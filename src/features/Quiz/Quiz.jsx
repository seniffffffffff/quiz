import { useState } from "react";
import QuestionCard from "./components/QuestionCard/QuestionCard";
import ButtonsGroup from "./components/QuizButtonsGroup/QuizButtonsGroup";
import Score from "./components/Score/Score";

function Quiz({ questions }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerChange = (event) => {
    const newAnswers = {
      ...answers,
      [questions[currentQuestion].id]: event.target.value,
    };
    setAnswers(newAnswers);
  };

  const goToNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const submitQuiz = () => {
    let correctAnswers = 0;
    questions.forEach((question) => {
      if (answers[question.id] === question.answer) {
        correctAnswers += 1;
      }
    });

    const finalScore = (correctAnswers / questions.length) * 100;
    setScore(finalScore);
    setSubmitted(true);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setSubmitted(false);
    setScore(0);
  };

  const isFirstQuestion = currentQuestion === 0;
  const isLastQuestion = currentQuestion === questions.length - 1;

  return (
    <div>
      {!submitted && (
        <>
          <QuestionCard
            question={questions[currentQuestion].question}
            options={questions[currentQuestion].options}
            onChange={handleAnswerChange}
            value={answers[questions[currentQuestion].id] || ""}
          />
          <ButtonsGroup
            goToNextQuestion={goToNextQuestion}
            isFirstQuestion={isFirstQuestion}
            isLastQuestion={isLastQuestion}
            submitQuiz={submitQuiz}
            goToPreviousQuestion={goToPreviousQuestion}
          />
        </>
      )}
      {submitted && <Score score={score.toFixed(2)} resetQuiz={resetQuiz} />}
    </div>
  );
}

export default Quiz;
