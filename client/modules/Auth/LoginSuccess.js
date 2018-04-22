import React, {
	Component
} from 'react';
import {
	withRouter
} from 'react-router-dom';
import LoginWindow from './LoginWindow';

class LoginSuccess extends Component {
	state = {
		redirectOnSuccess: typeof this.props.location.state !== 'undefined' ?
			this.props.location.state.from.pathname : '/my_polls'
	};

	closeGateway = () => {
		this.props.history.goBack();
	};

	render() {
		return (
			<div>
        <div className="greyout" onClick={this.closeGateway} />
		<LoginWindow
          redirectOnSuccess={this.state.redirectOnSuccess}
          closeGateway={this.closeGateway}
		/>
      </div>
		);
	}
}

export default withRouter(LoginSuccess);
