import React from "react";
// import "./Counter.css";

/**
 *
 */

function Counter({ game }) {
  return (
    <div className="Counter">
      <p className="CounterMsg">
        {`Out of ${game.count} flips, there have been ${game.heads} heads and ${game.tails} tails.`}
      </p>
    </div>
  );
}

export default Counter;
