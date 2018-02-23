import React from 'react';
import './UserInput.css';


export default class UserInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentGuess: 0
    };
  }

  onSubmit(event) {
    event.preventDefault();
    let guess = this.textInput.value.trim();
    guess = parseInt(guess, 10);

    if (isNaN(guess)) {
      this.props.errorFeedback('Please enter a valid number');
      return;
    }
    if (guess > 100) {
        this.props.errorFeedback('Please enter number between 1 and 100');
        return;
      }

let sameNum = this.props.guessList.filter(uGuess => uGuess.userGuess === guess);  
console.log(sameNum, guess, this.props.guessList);
    if(sameNum.length > 0) {
       this.props.errorFeedback('You guessed this number already');
       return;
      } 

    this.setState({
      currentGuess: guess
    }); 

    if(this.props.setGuess) {
      this.props.setGuess(guess);
    }
    this.textInput.value = '';
  }
  
  render() {
    return ( 
		<form onSubmit={(e) => this.onSubmit(e)}>
		  <input type="text" name="userGuess" id="userGuess" className="text" maxLength="3" autoComplete="off" placeholder="Enter your Guess" required 
      ref={input => this.textInput = input}  />
      
      <input type="submit" id="guessButton" className="button" name="submit" value="Guess" />		
    </form>	
    );
  }
}