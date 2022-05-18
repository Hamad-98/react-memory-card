import React from "react";
import "./Score.css";

export default function Score(props) {
  return (
    <div className="scoreContainer">
      <span> Current-Score: {props.currentScore}</span>
      <span> High-Score: {props.highScore}</span>
    </div>
  );
}
