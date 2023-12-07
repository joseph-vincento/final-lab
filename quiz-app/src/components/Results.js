// This page will provide users will their score and an option to go back to the home page and start again.

// documentation relevent to this page:
// https://reactrouter.com/en/main/hooks/use-navigate
// https://reactrouter.com/en/main/hooks/use-location

import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { username, score } = location.state;

  const goHome = () => {
    navigate("/");
  }

  return (
    <div>
      <h2>Quiz Results</h2>
      <p>{username}, you scored: {score}</p>
      <button onClick={goHome}>Back to home</button>
    </div>
  );
};

export default Results;
