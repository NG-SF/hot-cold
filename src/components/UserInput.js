import React from 'react';
import './UserInput.css';


export default class UserInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userGuesses: [],
      currentGuess: 0
    };
  }

  inputValidation() {
   
    let guess = this.state.currentGuess; 
    let sameNum = this.state.userGuesses.filter(uGuess => uGuess === guess);  
    let feedback;
      if(sameNum) {
        feedback = 'You guessed this number already';
      } else if(isNaN(guess)) {
        feedback = 'Please enter a number';
      } else if (guess > 100) {
        feedback = 'Please enter number between 1 and 100';
      }
      this.props.errorFeedback(feedback);
  
  }

  onSubmit(event) {
    event.preventDefault();
    let guess = this.textInput.value.trim();
    guess = parseInt(guess, 10);

    this.setState({
      currentGuess: guess
    }); 

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
      
      <input type="submit" id="guessButton" className="button" name="submit" value="Guess" onClick={this.inputValidation} />		
    </form>	
    );
  }
}