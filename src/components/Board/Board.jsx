import React, { useState } from "react";
import "./Board.css";
import Cards from "./Cards";
import cardData from "./cardData";

export default function Board(props) {
  const [cards, setCards] = useState(cardData);

  const shuffleArray = () => {
    setCards((prevState) => prevState.sort(() => Math.random() - 0.5));
  };

  const raiseGuess = (obj) => {
    if (props.currentguessed.indexOf(obj) === -1) {
      props.handleCurrentGuessChange(obj);
      props.increaseScore();
    } else {
      props.resetScore();
      props.resetCurrentGuessed();
      props.newHighScore(props.currentScore);
    }
    shuffleArray();
  };

  const createCards = () => {
    return cards.map((obj) => (
      <Cards
        obj={obj}
        name={obj.name}
        src={obj.src}
        key={obj.key}
        raiseGuess={raiseGuess}
      />
    ));
  };

  return <div className="gameBoardContainer">{createCards()}</div>;
}
