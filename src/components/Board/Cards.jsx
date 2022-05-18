import React from "react";

export default function Cards(props) {
  return (
    <div
      className="imageContainer"
      onClick={() => {
        props.raiseGuess(props.obj);
      }}
    >
      <img src={props.src} alt={props.name} />
      <p className="imageCaption">{props.name}</p>
    </div>
  );
}
