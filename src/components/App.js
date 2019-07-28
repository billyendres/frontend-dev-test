import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Devices from "./Devices";
import Login from "./Login";

class App extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/devices" component={Devices} />
					<Route exact path="/login" component={Login} />
				</Switch>
			</Router>
		);
	}
}

export default App;
