import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Devices from "./Devices";
import Login from "./Login";
import Notify from "./Notify";

class App extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/devices" component={Devices} />
					<Route exact path="/login" component={Login} />
					{/* <Route exact path="/notify" component={Notify} /> */}
				</Switch>
			</Router>
		);
	}
}

export default App;
