import * as S from "./QuestionCard.styled";

function QuestionCard({ question, options, onChange, value }) {
  return (
    <S.Card>
      <S.Question>{question}</S.Question>
      <S.Options>
        {options.map((option, index) => (
          <S.Option key={index}>
            <S.Input
              type="radio"
              value={option}
              checked={value === option}
              onChange={onChange}
            />
            {option}
          </S.Option>
        ))}
      </S.Options>
    </S.Card>
  );
}

export default QuestionCard;
