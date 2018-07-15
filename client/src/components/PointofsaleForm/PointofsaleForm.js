import React, { Component } from 'react';

export class PointofsaleForm extends Component {
	state = {
		parID: '',
		parName: '',
	};

	setParID = (parID) => {
		this.setState({ parID: parID});
	}

	setParName = (parName) => {
		this.setState({ parName: parName});
	}

	render() {
		return (
			<div className="pointofsale-form">
				point of sale form
			</div>
		)
	};
};

export default PointofsaleForm;
