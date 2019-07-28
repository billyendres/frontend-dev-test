import React, { Component } from "react";
import axios from "axios";

axios
	.post(`http://35.201.2.209/login`, {
		email: "endres63@hotmail.com",
		password: "meld123"
	})
	.then(res => {
		console.log(res);
		console.log(res.data);
	});

class Login extends Component {
	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	handleSubmit = event => {
		event.preventDefault();
	};

	render() {
		return (
			<div className="center" style={{ textAlign: "center" }}>
				<div className="card">
					<h1>Login</h1>
					<form onSubmit={this.handleSubmit}>
						<input
							className="form-item"
							placeholder="Email Address"
							name="email"
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

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub3ciOjE1NjQyODI4MDg4NDEsInNlbmRlciI6ImVuZHJlczYzQGhvdG1haWwuY29tIiwiaWF0IjoxNTY0MjgyODA4fQ.AtMm2IrU7wjbo8q53hrvmaSE80vTDFlTFwhHWepJx4c
