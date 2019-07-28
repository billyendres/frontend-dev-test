import React, { Component } from "react";
import axios from "axios";

class Home extends Component {
	state = {
		home: []
	};
	//Request Homepage from API
	async componentDidMount() {
		const response = await axios.get("http://35.201.2.209/");
		//Set State As Data Response
		this.setState({ home: response.data });
	}
	//Render Raw HTML
	render() {
		return <div dangerouslySetInnerHTML={{ __html: this.state.home }} />;
	}
}

export default Home;
