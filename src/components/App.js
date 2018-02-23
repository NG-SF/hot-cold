import React from 'react';
import Header from './Header';
import UserInput from './UserInput';
import GuessBox from './GuessBox';
import './App.css';

export default class App extends React.Component {
  state = {
      isHidden: true,
      restart: false,
      secretNumber: Math.floor(Math.random()*100)+1,
      userGuess: 0,
      guessCount: 0,
      guessList: [],
      feedback: '' || 'Make your Guess!'
    };

  showUserGuesses = (value) => {
    this.setState({ isHidden: value });
  };

 setGuess = (userGuess) => {
    this.setState({
      userGuess: userGuess,
      guessList: [...this.state.guessList, { userGuess }],
      isHidden: false
    });
    this.addCount();
    this.generateFeedback(userGuess);
    this.showUserGuesses();
  };
 
  addCount = () => {
    this.setState((prevState) => {
       return { guessCount: prevState.guessCount + 1 };
    });
  };

  generateFeedback = (guess) => { 
  let difference = Math.abs(this.state.secretNumber - guess);
  let feedback;
   if(this.state.secretNumber === guess){
		  feedback = "You Won!";
      this.restart();
	  } else if(difference < 10){
		    feedback= "Hot";
	  } else if(difference < 20 && difference > 9){
		    feedback= 'Kinda hot';
	  } else if(difference < 30 && difference > 19){
		    feedback= 'Less than warm';
	  } else {
		    feedback= 'Cold';
	  }
    this.setState({ feedback });
  };
   
   errorFeedback = (feedback) => {
     this.setState({ feedback });
   };

  restart = () => {
    this.setState({ 
      secretNumber: Math.floor(Math.random()*100)+1,
      userGuess: 0,
      guessCount: 0,
      guessList: [],
      feedback: '' || 'Make your Guess!'
      });
  };

  render() {
    return (
    <div className="App">
        <Header restart={this.restart} />

      <section className="game">
        <h2 id="feedback">{this.state.feedback}</h2>

        <UserInput setGuess={this.setGuess} errorFeedback={this.errorFeedback} 
                   guessList={this.state.guessList} />

        <p>Guess #<span id="count">{this.state.guessCount}</span>!</p>

		    {!this.state.isHidden && <GuessBox  guessList={this.state.guessList} /> } 
      </section>
      </div>
    );
  }
}


