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

  const newHighScore = (score) => {
    if (score > highScore) {
      setHighScore(score);
    }
  };
  const resetCurrentGuessed = () => {
    setCurrentguessed([]);
  };

  const handleCurrentGuessChange = (obj) => {
    setCurrentguessed((prevState) => prevState.concat(obj));
  };

  return (
    <React.Fragment>
      <Header />
      <Score currentScore={currentScore} highScore={highScore} />
      <Board
        currentScore={currentScore}
        increaseScore={increaseScore}
        resetScore={resetScore}
        newHighScore={newHighScore}
        resetCurrentGuessed={resetCurrentGuessed}
        currentguessed={currentguessed}
        handleCurrentGuessChange={handleCurrentGuessChange}
      />
    </React.Fragment>
  );
}

export default App;
