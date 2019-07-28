import React, { Component } from "react";
import axios from "axios";
import "./Login.css";

//Axios Post Request
axios
	.post(`http://35.201.2.209/login`, {
		email: "endres63@hotmail.com",
		password: "meld123"
	})
	.then(res => {
		localStorage.setItem("Token", res.data);
	});

class Login extends Component {
	state = { password: "" };

	//Event Handler For Input Change
	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	//Event Handler - Sends Alert For Incorrect Password
	handleSubmit = event => {
		event.preventDefault();
		if (this.state.password === "meld123") this.props.history.replace("/devices");
		else {
			alert("Password Incorrect -- try 'meld123' ;)");
		}
	};

	render() {
		return (
			<div className="center">
				<div className="card">
					<h1>Login</h1>
					<form onSubmit={this.handleSubmit}>
						<input
							className="form-item"
							placeholder="Email"
							name="username"
							type="text"
							onChange={this.handleChange}
						/>
						<input
							className="form-item"
							placeholder="Password"
							name="password"
							type="password"
							onChange={this.handleChange}
						/>
						<input className="form-submit" value="SUBMIT" type="submit" />
					</form>
				</div>
			</div>
		);
	}
}

export default Login;
