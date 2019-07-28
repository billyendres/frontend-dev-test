import React, { Component } from "react";
import axios from "axios";

class Devices extends Component {
	state = {
		device: [],
		number: []
	};
	async componentDidMount() {
		const response = await axios.get("http://35.201.2.209/devices");
		this.setState({ device: JSON.stringify(response.data.devices.length) });
		this.setState({
			number: Object.keys(response.data.devices)
		});
		console.log(response);
		console.log(this.state.number);
	}

	render() {
		return (
			<div style={{ textAlign: "center" }}>
				<div style={{ fontSize: "3em" }}>{this.state.device}</div>
				<p>DEVICES ONLINE</p>
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
			</div>
		);
	}
}

export default Devices;
