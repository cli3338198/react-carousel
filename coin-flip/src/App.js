
import './App.css';
import Coin from './Coin';
import FlipBtn from './FlipBtn';
import Counter from './Counter';
import React, { useState } from 'react';

function App() {
  const defaultGameInfo = {
    count : 0,
    start : false,
    heads : 0,
    tails : 0
  }
  const [ game, setGame ] = useState(defaultGameInfo)



  return (
    <div className="App">
      {game.start ? <Coin game={game}/> : null}
      <FlipBtn setGame={setGame} game={game}/>
      <Counter game={game} />
    </div>
  );
}

export default App;


//App
  //Coin
  //Flip Button
  //Results