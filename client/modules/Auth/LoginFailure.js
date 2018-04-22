import React from 'react';

const AuthFailure = ({
	goBack,
	loginFailure
}) => {
	return (
		<div id = "authfailure">
      <div id = "rowone">
          <p>
            {loginFailure
              ? 'Username or Password are Invalid.'
              : 'Username is taken.'}
          </p>
          <p>
            {loginFailure
              ? 'Please try again.'
              : 'Please chose a different username.'}
          </p>
      </div>
      <div id = "rowtwo">
          <a className="btn" onClick={goBack}>
            Okay
          </a>
      </div>
    </div>
	);
};
export default AuthFailure;
