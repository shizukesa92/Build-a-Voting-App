import React, {
	Component
} from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Landing from "./modules/App/Landing";
import {
	BrowserRouter,
	Route,
	Switch,
	Redirect
} from "react-router-dom";
import {
	Protected
} from "./modules/Auth/Protected";
import LoginSuccess from "./modules/Auth/LoginSuccess";
import {
	connect
} from 'react-redux';
import * as actions from './modules/Vote/VoteActions';
import Poll from './modules/Vote/Poll';
import PollNew from './modules/Vote/PollNew';
require("./main.scss");
require("./modules/App/App.scss");
require("./components/Components.scss");
require("./modules/Auth/Auth.scss");
require("./modules/Vote/Vote.scss")

class App extends Component {
	componentDidMount() {
		this.props.fetchUser();
	} /*current failing because no props*/

	render() {
		return (
			<BrowserRouter>
			<div id = "wrapper">
            <Header />
			<div id ="content">
				<Switch>
					<Route exact path="/" component={Landing} />
                <Route exact path="/login" component={LoginSuccess} />
                <Route exact path="/new_user" component={LoginSuccess} />
                <Route exact path="/poll/:pollId//" component={Poll} />
				
				<Protected
                  exact
                  path="/my_polls"
                  auth={this.props.auth}
                  component={Landing}
			  />
			  <Protected
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
