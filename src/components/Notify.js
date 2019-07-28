import React, { Component } from "react";
import axios from "axios";

axios
	.post(`http://35.201.2.209/notify`, {
		name: "Billy Endres",
		email: "endres63@hotmail.com",
		repoURL: "https://github.com/billyendres/frontend-dev-test",
		message: ""
	})
	.then(res => {
		console.log(res);
		console.log(res.data);
	});

class Notify extends Component {
	render() {
		return <div>Token: {localStorage.getItem("Token")}</div>;
	}
}

export default Notify;
