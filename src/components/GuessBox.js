import React from 'react';
import './GuessBox.css';

export default function GuessBox(props) {
  const guessList = props.guessList.map((guess, index) => {
    return <li key={index}>{guess.userGuess}</li>;
  });
  return (
<ul id="guessList" className="guessBox clearfix">
  {guessList}
</ul>    
  );
}
