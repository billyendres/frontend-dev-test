import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import axios from "axios";

// Retrieves Token From Local Storage
const token = localStorage.getItem("Token");
// Sets Auth Bearer as Header
axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

// Axios Post Request
axios.post("http://35.201.2.209/notify", {
	name: "Billy Endres",
	email: "endres63@hotmail.com",
	repoUrl: "https://github.com/billyendres/frontend-dev-test",
	message: "How does a computer get drunk? It takes screenshots"
});

console.log(token);

class Notify extends Component {
	render() {
		return (
			<Container>
				<div
					style={{
						textAlign: "center",
						fontSize: "3em"
					}}
				>
					Token: {token}
				</div>
				<div
					style={{
						textAlign: "center",
						fontSize: "3em"
					}}
				>
					<div>
						Name: Billy Endres
						<br />
						Email: endres63@hotmail.com
						<br />
						RepoURL: https://github.com/billyendres/frontend-dev-test
						<br />
						Message: How does a computer get drunk? It takes screenshots
					</div>
				</div>
			</Container>
		);
	}
}

export default Notify;
