import React from 'react';
import './UserInput.css';


export default class GameBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userGuesses: []
    };
  }

  onSubmit(event) {
    event.preventDefault();
    let guess = this.textInput.value.trim();
    guess = parseInt(guess, 10);
    let sameNum = this.state.userGuesses.filter(uGuess => uGuess === guess);
    
      let errorMsg;
      if(sameNum) {
        errorMsg = 'You guessed this number already';
      } else if(isNaN(guess)) {
        errorMsg = 'Please enter a number';
      } else if (guess > 100) {
        errorMsg = 'Please enter number between 1 and 100';
      }
      this.props.errorFeedback(errorMsg);
             
    if(this.props.setGuess) {
      this.props.setGuess(guess);
      this.setState({
        userGuesses: [...this.state.userGuesses, { guess }]
      });
    }
    this.textInput.value = '';
  }
  
  render() {
    return ( 
		<form onSubmit={(e) => this.onSubmit(e)}>
		  <input type="text" name="userGuess" id="userGuess" className="text" maxLength="3" autoComplete="off" placeholder="Enter your Guess" required 
      ref={input => this.textInput = input}  />
      
      <input type="submit" id="guessButton" className="button" name="submit" value="Guess" onClick={this.props.showUserGuesses} />		
    </form>	
    );
  }
}