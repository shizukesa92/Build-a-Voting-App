import React from 'react';

const LoginSuccess = ({
	username,
	login
}) => {
	return (
		<div id ="registersuccess">
      <div>
          <h4>Success!</h4>
      </div>
	  <div> 
          <p>
            You are now registered as user <b>{username}</b>.
          </p>
      </div>

      <div>
          <a className="btn" onClick={login}>
            Continue to Site
          </a>
      </div>
    </div>
	);
};
export default LoginSuccess;
