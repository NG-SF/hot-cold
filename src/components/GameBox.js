import React from 'react';
import './GameBox.css';
import GuessBox from './GuessBox';

export default class GameBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      secretNumber: Math.floor(Math.random()*100)+1,
      userGuess: undefined,
      guessCount: 0,
      guessList: []
    };
  }

  onSubmit(event) {
    event.preventDefault();
    this.textInput.value = '';
    this.addCount();
    this.props.toggleGuessBox();
  }
  
  setGuess(userGuess) {
    this.setState({
      userGuess: userGuess,
      guessList: [...this.state.guessList, { userGuess }]
    });
     console.log(this.state);
  }
 
  addCount() {
    this.setState((prevState) => {
       return { guessCount: prevState.guessCount + 1 };
    });
  }

  render() {
    return (
    <section className="game">			
		<h2 id="feedback">Make your Guess!</h2>

		<form onSubmit={(e) => this.onSubmit(e)}>
		  <input type="text" name="userGuess" id="userGuess" className="text" maxLength="3" autoComplete="off" placeholder="Enter your Guess" required 
      ref={input => this.textInput = input}
      onChange={e => this.setGuess(e.target.value)}  />
      
      <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
		
    </form>
			
    <p>Guess #<span id="count">{this.state.guessCount}</span>!</p>
		{!this.state.isHidden && <GuessBox  guessList={this.state.guessList} /> } 	
		</section>
    );
  }
}