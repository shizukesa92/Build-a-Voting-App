import React, {
	Component
} from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Landing from "./modules/App/Landing";
import {
	BrowserRouter,
	Route
} from "react-router-dom";
import {
	Protected
} from "./modules/Auth/Protected";
import LoginSuccess from "./modules/Auth/LoginSuccess"
require("./main.scss");
require("./modules/App/App.scss");
require("./components/Components.scss");
require("./modules/Auth/Auth.scss");
require("./modules/Vote/Vote.scss")

export default class App extends Component {


	render() {
		return (
			<BrowserRouter>
			<div id = "wrapper">
            <Header />
			<div id ="content">
				<Route exact path="/" component={LoginSuccess} />
                <Route exact path="/" component={LoginSuccess} />
			</div>
	<Footer />
</div>
			</BrowserRouter>
		);
	}
}
