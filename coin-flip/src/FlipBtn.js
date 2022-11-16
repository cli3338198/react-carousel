import React from "react";
// import "./FlipBtn.css";

/**
 *
 */

function FlipBtn({ setGame, game }) {
  function handleClick(evt) {
    game.count++;
    if (game.start === false) {
      setGame({ ...game, start: true });
    }
  }

  //GetRandom heads or tails. 
  //pass it to the handle click

  return (
    <div className="FlipBtn">
      <button className="FlipBtn-btn" onClick={handleClick}>
        Flip Me
      </button>
    </div>
  );
}

export default FlipBtn;
