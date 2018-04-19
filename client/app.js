import React, {
	Component
} from 'react';
import ReactDOM from "react-dom";
import Header from './components/Header';
import Footer from "./components/Footer";
require("./main.scss");
require("./components/Components.scss");

export default class App extends Component {


	render() {
		return (
			<div id = "wrapper">
            <Header />
				<div id = "content">
            </div>
	<Footer />
          </div>
		);
	}
}
