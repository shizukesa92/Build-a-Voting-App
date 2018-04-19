import React, {
	Component
} from 'react';
import {
	Button,
	ButtonToolbar
} from "react-bootstrap";

export default class Header extends Component {

	render() {
		return (
			<div id="header">
				<span id = "left" className = "text-center">Build a Voting App</span>
					<ButtonToolbar> {/* To preserve space betwen buttons https://react-bootstrap.github.io/components/buttons/ */}
			<Button bsStyle = "link">Log-in</Button> 
			<Button bsStyle = "link">Sign-up</Button>
		</ButtonToolbar>
        </div>
		);
	}
}
