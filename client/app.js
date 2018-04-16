import React, {
	Component
} from 'react';
import {
	BrowserRouter,
	Route,
	Redirect,
	Switch
} from 'react-router-dom';
import {
	connect
} from 'react-redux';
import * as actions from './modules/Vote/VoteActions';
import Header from './components/Header';
import Footer from "./components/Footer";
import Gateway from './modules/App/Gateway';
import Landing from './modules/App/Landing';
import Poll from './modules/Vote/Poll';
import PollNew from './PollNew';
import ProtectedRoute from './ProtectedRoute';
require("./main.scss");

class App extends Component {
	componentDidMount() {
		this.props.fetchUser();
	}

	render() {
		return (
			<div>
        <BrowserRouter>
          <div>
            <Header />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Landing} />
                <Route exact path="/login" component={Gateway} />
                <Route exact path="/new_user" component={Gateway} />
                <Route exact path="/poll/:pollId/" component={Poll} />
                <ProtectedRoute
                  exact
                  path="/my_polls"
                  auth={this.props.auth}
                  component={Landing}
                />
                <ProtectedRoute
                  exact
                  path="/new_poll"
                  auth={this.props.auth}
                  component={PollNew}
                />
                <Redirect to="/" />
              </Switch>
            </div>
	<Footer />
          </div>
        </BrowserRouter>
      </div>
		);
	}
}

function mapStateToProps({
	auth
}) {
	return {
		auth
	};
}
export default connect(mapStateToProps, actions)(App);
