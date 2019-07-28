import React, { Component } from "react";
import axios from "axios";

class Devices extends Component {
	state = {
		device: [],
		number: []
	};

	//Fetching Device Data From API
	async componentDidMount() {
		const response = await axios.get("http://35.201.2.209/devices");
		this.setState({ device: JSON.stringify(response.data.devices.length) });
		this.setState({
			number: Object.keys(response.data.devices)
		});
		console.log(response);
		console.log(this.state.number);
	}

	//Forces Component Rerender Every 5 Seconds
	componentWillUpdate() {
		setInterval(() => {
			this.forceUpdate(this.componentDidMount);
		}, 3000);
	}

	//Event Handlers
	handleSubmitLogout = () => {
		this.props.history.replace("/login");
	};

	handleSubmitNotify = () => {
		this.props.history.replace("/notify");
	};

	render() {
		return (
			<div>
				<div style={{ textAlign: "center" }}>
					<p>DEVICES ONLINE</p>
					<div>{this.state.device}</div>
					<div
						style={{
							display: "flex",
							flexWrap: "wrap",
							justifyContent: "center"
						}}
					>
						{this.state.number.map(num => (
							<div
								style={{
									width: "1em",
									background: "black",
									border: "30px solid black",
									borderRadius: "50%",
									margin: "2em"
								}}
							>
								{num}
							</div>
						))}
					</div>
					<button onClick={this.handleSubmitLogout}>Logout</button>
					<button onClick={this.handleSubmitNotify}>Notify</button>
				</div>
			</div>
		);
	}
}

export default Devices;
