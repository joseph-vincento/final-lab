// Users will answer questions one at a time. The current question # should be displayed to the user
// The questions will be stored in an array of key:value pairs and read from the questions.js file.
// Question answers will be displayed as radio button options for the user to select.
// When an answer has been picked, the user will click a submit button to move to the next question. 

// documentation relevent to this page:
// https://www.w3schools.com/react/react_usestate.asp
// https://reactrouter.com/en/main/hooks/use-navigate
// https://reactrouter.com/en/main/hooks/use-location

import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import questions from '../questions';

const Quiz = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { username } = location.state;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);

  const handleAnswerSubmit = () => {
    // increment the score state if the user selects the corrrect answer
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore((prevScore) => prevScore + 1);
    }

    // if there are questions remaining, refresh the page with the next question
    // if all questions have been answered, navigate to the results page
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
      // reset selected answer for the next question
      setSelectedAnswer(null);
    } else {
      navigate('/results', { state: { username, score } });
    }
  };

  return (
    <div>
      <h2>{`Question ${currentQuestion + 1}/${questions.length}`}</h2>
      <p>{questions[currentQuestion].question}</p>
      <form>
        {questions[currentQuestion].options.map((option, index) => (
          <div key={index}>
            <input
              type="radio"
              name="answer"
              value={option}
              checked={selectedAnswer === option}
              onChange={() => setSelectedAnswer(option)}
            />
            <label>{option}</label>
          </div>
        ))}
      </form>
      <button onClick={handleAnswerSubmit} disabled={!selectedAnswer}>Submit Answer</button>
    </div>
  );
};

export default Quiz;
