import React from 'react';
import './GameBox.css';
import GuessBox from './GuessBox';

export default class GameBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      secretNumber: Math.floor(Math.random()*100)+1,
      userGuess: 0,
      guessCount: 0,
      guessList: [],
      feedback: '' || 'Make your Guess!'
    };
    console.log(this.state.secretNumber);
  }

  onSubmit(event) {
    event.preventDefault();
    this.setGuess(this.textInput.value.trim());
    this.textInput.value = '';
    this.addCount();
    this.props.toggleGuessBox();
    this.generateFeedback();
  }
  
  setGuess(userGuess) {
    this.setState({
      userGuess: +userGuess,
      guessList: [...this.state.guessList, { userGuess }]
    });
  }
 
  addCount() {
    this.setState((prevState) => {
       return { guessCount: prevState.guessCount + 1 };
    });
  }
  generateFeedback() {
    console.log("Secret Number ===>", this.state.secretNumber)
    console.log("User Number ===>", this.state.userGuess)
   if(this.state.secretNumber === this.state.userGuess){
		this.setState({feedback: "You Won!"});
	} else if(Math.abs(this.state.secretNumber - this.state.userGuess) < 10){
		this.setState({feedback: "Hot"});
	} else if(Math.abs(this.state.secretNumber - this.state.userGuess) < 20 && Math.abs(this.state.secretNumber - this.state.userGuess) > 9){
		this.setState({feedback: 'Kinda hot'});
	} else if(Math.abs(this.state.secretNumber - this.state.userGuess) < 30 && Math.abs(this.state.secretNumber - this.state.userGuess) > 19){
		this.setState({feedback: 'Less than warm'});
	} else {
		this.setState({feedback: 'Cold'});
	}
  }

  render() {
    return (
    <section className="game">			
		<h2 id="feedback">{this.state.feedback}</h2>

		<form onSubmit={(e) => this.onSubmit(e)}>
		  <input type="text" name="userGuess" id="userGuess" className="text" maxLength="3" autoComplete="off" placeholder="Enter your Guess" required 
      ref={input => this.textInput = input}  />
      
      <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
		
    </form>
			
    <p>Guess #<span id="count">{this.state.guessCount}</span>!</p>
		{!this.state.isHidden && <GuessBox  guessList={this.state.guessList} /> } 	
		</section>
    );
  }
}