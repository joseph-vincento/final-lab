import React, { useState } from 'react';
import './App.css';

const questions = [
  {
    question: 'What is the capital of France?',
    options: ['Berlin', 'Paris', 'Madrid', 'Rome'],
    correctAnswer: 'Paris',
  },
  {
    question: 'Which planet is known as the Red Planet?',
    options: ['Mars', 'Jupiter', 'Venus', 'Saturn'],
    correctAnswer: 'Mars',
  },
  {
    question: 'What is the largest mammal?',
    options: ['Elephant', 'Blue Whale', 'Giraffe', 'Hippopotamus'],
    correctAnswer: 'Blue Whale',
  },
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswerClick = (selectedAnswer) => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Quiz is finished
      alert(`Quiz completed! Your score: ${score}/${questions.length}`);
      // You can also display the score in the UI or navigate to a different component.
    }
  };

  return (
    <div className="App">
      <h1>Quiz App</h1>
      <p>Question {currentQuestion + 1} of {questions.length}</p>
      <p>{questions[currentQuestion].question}</p>
      <ul>
        {questions[currentQuestion].options.map((option, index) => (
          <li key={index} onClick={() => handleAnswerClick(option)}>
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
