import React, { Component } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Zoom from "react-reveal/Zoom";

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

	// Forces Component Rerender Every 5 Seconds
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
			<div style={{ height: "100vh", width: "100%", background: "cyan" }}>
				<div style={{ textAlign: "center", paddingTop: "5em" }}>
					<div style={{ fontSize: "4em" }}>{this.state.device}</div>
					<p style={{ fontSize: "2em" }}>DEVICES ONLINE</p>
					<Zoom>
						<div
							style={{
								display: "flex",
								flexWrap: "wrap",
								justifyContent: "center",
								marginLeft: "3em",
								marginRight: "3em",
								marginTop: "2em"
							}}
						>
							{this.state.number.map(num => (
								<div
									style={{
										width: "1em",
										height: "1em",
										color: "black",
										background: "black",
										border: "40px solid black",
										borderRadius: "50%",
										margin: "1.5em"
									}}
								>
									{num}
								</div>
							))}
						</div>
					</Zoom>
					<div style={{ marginTop: "5%" }}>
						<Button
							variant="dark"
							style={{ marginRight: "2em" }}
							onClick={this.handleSubmitNotify}
						>
							Notify
						</Button>
						<Button variant="warning" onClick={this.handleSubmitLogout}>
							Logout
						</Button>
					</div>
				</div>
			</div>
		);
	}
}

export default Devices;
