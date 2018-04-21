import React, {
	Component
} from 'react';
import {
	Button,
	ButtonToolbar
} from "react-bootstrap";
import {
	Link
} from 'react-router-dom';

export default class Header extends Component {
	buttons() {
		let auth = true;
		return auth ?
			(
				<ButtonToolbar> {/* To preserve space between buttons https://react-bootstrap.github.io/components/buttons/ */}
			<Button bsStyle = "link"><Link to="/login">Log-in</Link></Button> 
			<Button bsStyle = "link"><Link to="/new_user">Sign-up</Link></Button>
		</ButtonToolbar>
			) :
			(
				<ButtonToolbar> 
			<Button bsStyle = "link"><Link to="/new_poll">Create</Link></Button> 
			<Button bsStyle = "link"><Link to="/my_polls">New</Link></Button>
			<Button bsStyle = "link"><Link to="/">All</Link></Button> 
			<Button bsStyle = "link"><a href="/api/logout">Log-out</a></Button>
		</ButtonToolbar>
			);
	}
	render() {
		return (
			<div id="header">
				<span id = "left" className = "text-center">Build a Voting App</span>
				{this.buttons()}	
        </div>
		);
	}
}
