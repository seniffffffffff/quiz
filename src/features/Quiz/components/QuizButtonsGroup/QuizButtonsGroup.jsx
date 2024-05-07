import React from "react";
import Button from "../../../../components/Button/Button";

const ButtonsGroup = ({
  goToPreviousQuestion,
  isFirstQuestion,
  isLastQuestion,
  submitQuiz,
  goToNextQuestion,
}) => {
  return (
    <div>
      <Button onClick={goToPreviousQuestion} disabled={isFirstQuestion}>
        Previous
      </Button>

      {isLastQuestion ? (
        <>
          <Button onClick={submitQuiz}>Done</Button>
        </>
      ) : (
        <>
          <Button onClick={goToNextQuestion}>Next</Button>
        </>
      )}
    </div>
  );
};

export default ButtonsGroup;
