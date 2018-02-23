import React from 'react';
import Modal from './Modal';
import './Header.css';

export default class Header extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isHidden: true
    }
  }
  toggleHidden () {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  render () {
    return (
    <header>
			<nav> 
				<ul className="clearfix">
					<li><a onClick={() => this.toggleHidden(false)} className="what">What ?</a></li>
					<li><a onClick={this.props.restart} className="new">+ New Game</a></li>
				</ul>
			</nav>
    {!this.state.isHidden && <Modal closeModal={() => this.toggleHidden(true)} />}   
      <h1>HOT or COLD</h1>
    </header>
    );
  }
}

		
