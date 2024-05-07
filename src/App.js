import "./App.css";
import Quiz from "./features/Quiz/Quiz";

function App() {
  const questions = [
    {
      id: 1,
      question: "How much is 2 + 2?",
      options: ["3", "4", "5", "2"],
      answer: "4",
    },

    {
      id: 2,
      question: "What is the largest planet?",
      options: ["Earth", "Jupiter", "Saturn"],
      answer: "Jupiter",
    },
    {
      id: 3,
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin"],
      answer: "Paris",
    },
    {
      id: 4,
      question: "What is 4 * 2?",
      options: ["8", "6", "4", "2"],
      answer: "8",
    },
  ];

  return (
    <div className="App">
      <Quiz questions={questions} />
    </div>
  );
}

export default App;
