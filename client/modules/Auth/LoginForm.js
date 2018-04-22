import React, {
	Component
} from 'react';

class AuthForm extends Component {
	returnTitle = () => {
		return this.props.pathname === '/login' ? 'Log In' : 'Register';
	};

	returnInstructions = () => {
		return this.props.pathname === '/login' ?
			'Please enter your Username and Password.' :
			'Pleaes enter a new Username and Password.';
	};

	returnPasswordConfirm = () => {
		return this.props.pathname === '/login' ? (
			<div />
		) : (
			<div id = "confirmation">
          <input
            id="passwordConfirm"
            type="password"
            value={this.props.passwordConfirm}
            onChange={this.props.handlePasswordConfirmChange}
          />
          <label htmlFor="password">Confirm Password</label>
          {this.returnPasswordConfirmFailure()}
      </div>
		);
	};

	returnPasswordConfirmFailure = () => {
		if (!this.props.passwordEntered)
			return <span style={{ color: 'red' }}>{'Please enter a password.'}</span>;
		if (!this.props.passwordsMatch)
			return (
				<span style={{ color: 'red' }}>
          {"The passwords don't match. Please retype your password."}
        </span>
			);
		return;
	};

	returnUsernameEmpty = () => {
		return this.props.usernameEntered ? (
			<span />
		) : (
			<span style={{ color: 'red' }}>{'Please enter a username.'}</span>
		);
	};

	render() {
		return (
			<div id = "authform">
        <div id = "title">
            <h4>{this.returnTitle()}</h4>
        </div>
        <div id = "instructions">
            <p>{this.returnInstructions()}</p>
        </div>
        <div id = "form">
          <form>
            <div className="username">
                <input
                  id="username"
                  type="text"
                  value={this.props.username}
                  onChange={this.props.handleUsernameChange}
                />
                <label htmlFor="username">Username</label>
                {this.returnUsernameEmpty()}
            </div>
            <div id = "password">
                <input
                  id="password"
                  type="password"
                  value={this.props.password}
                  onChange={this.props.handlePasswordChange}
                />
                <label htmlFor="password">Password</label>
            </div>
            {this.returnPasswordConfirm()}
          </form>
        </div>
        <div id ="submission">
            <a className="btn" onClick={this.props.closeGateway}>
              Cancel
            </a>
            <a
              className="btn"
              onClick={
                this.props.pathname === '/login'
                  ? this.props.loginSubmitForm
                  : this.props.registerSubmitForm
              }
            >
              Submit
            </a>
        </div>
      </div>
		);
	}
}
export default AuthForm;
