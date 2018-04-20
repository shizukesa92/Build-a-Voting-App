import React, {
	Component
} from 'react';
import {
	Button,
	ButtonToolbar
} from "react-bootstrap";

export default class Header extends Component {
	buttons() {
		let auth = true;
		return auth ?
			(
				<ButtonToolbar> {/* To preserve space betwen buttons https://react-bootstrap.github.io/components/buttons/ */}
			<Button bsStyle = "link">Log-in</Button> 
			<Button bsStyle = "link">Sign-up</Button>
		</ButtonToolbar>
			) :
			(
				<ButtonToolbar> 
			<Button bsStyle = "link">Create</Button> 
			<Button bsStyle = "link">New</Button>
			<Button bsStyle = "link">All</Button> 
			<Button bsStyle = "link">Log-out</Button>
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
