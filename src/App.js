import React, { useState } from "react";
import Board from "./components/Board/Board";
import Header from "./components/Header/Header";
import Score from "./components/Score/Score";
import "./App.css";

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [currentguessed, setCurrentguessed] = useState([]);

  const increaseScore = () => {
    setCurrentScore(currentScore + 1);
  };
  const resetScore = () => {
    setCurrentScore(0);
  };

  const raiseGuess = (obj) => {
    if (currentguessed.indexOf(obj) === -1) {
      setCurrentguessed((prevState) => prevState.concat(obj));
      increaseScore();
    } else {
      resetScore();
      resetCurrentGuessed();
    }
  };

  const resetCurrentGuessed = () => {
    setCurrentguessed([]);
  };
  return (
    <React.Fragment>
      <Header />
      <Score currentScore={currentScore} highScore={highScore} />
      <Board raiseGuess={raiseGuess} />
    </React.Fragment>
  );
}

export default App;
