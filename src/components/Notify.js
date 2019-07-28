import React, { Component } from "react";
import axios from "axios";

const token = localStorage.getItem("Token");
axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

axios
	.post("http://35.201.2.209/notify", {
		name: "Billy Endres",
		email: "endres63@hotmail.com",
		repoURL: "https://github.com/billyendres/frontend-dev-test",
		message: ""
	})
	.then(res => {
		res.status(200).send("Success");
	})
	.then(res => {
		res.status(401).send("Access Denied");
	})
	.then(res => {
		res.status(400).send("Bad Request");
	});

console.log(localStorage.getItem("Token"));

class Notify extends Component {
	render() {
		return (
			<div style={{ width: "100%", display: "flex", flexWrap: "wrap" }}>
				Token: {localStorage.getItem("Token")}
			</div>
		);
	}
}

export default Notify;
