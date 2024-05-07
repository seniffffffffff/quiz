import React from "react";
import * as S from "./Score.styled";
import Button from "../../../../components/Button/Button";

const Score = ({ score, resetQuiz }) => {
  return (
    <>
      <S.Score>Your score: {score}</S.Score>
      <Button onClick={resetQuiz}>Try again</Button>
    </>
  );
};

export default Score;
