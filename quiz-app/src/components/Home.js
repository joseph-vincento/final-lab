// This page will be where users start a quiz. Users should enter a username before starting.

// documentation relevent to this page:
// https://www.w3schools.com/react/react_usestate.asp
// https://reactrouter.com/en/main/hooks/use-navigate

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const startQuiz = () => {
    // Check that username is not blank
    if (username.trim() !== '') {
      navigate('/quiz', { state: { username } });
    } else {
      alert('The username field cannot be blank. Please enter a valid username.');
    }
  };

  return (
    <div>
      <h2>Welcome to the Quiz App!</h2>
      <label>
        Enter your username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <button onClick={startQuiz}>Start Quiz</button>
    </div>
  );
};

export default Home;
