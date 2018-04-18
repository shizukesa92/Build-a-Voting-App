import React, {
	Component
} from 'react';
import {
	BrowserRouter
} from 'react-router-dom';
import {
	connect
} from 'react-redux';
import * as actions from './modules/Vote/VoteActions';
import Header from './components/Header';
import Footer from "./components/Footer";
import routes from "./routes";
require("./main.scss");
require("./modules/App/App.scss")

class App extends Component {
	componentDidMount() {
		this.props.fetchUser();
	}

	render() {
		return (
			<BrowserRouter>
          <div>
            <Header />
            <div className="container">
				{routes}
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
