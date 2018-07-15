import React, { Component } from 'react';
import { ParLinker } from '../../components/Linker';
import { PointofsaleForm } from '../../components/PointofsaleForm';
import './Pointofsale.css';

export class Pointofsale extends Component {
	state = {
		parID: '',
		parName: '',
	};

	setParID = (parID) => {
		this.setState({ parID: parID });
	}

	setParName = (parName) => {
		this.setState({ parName: parName });
	}

	render() {
		const parID = this.state.parID;
		const parName = this.state.parName;
		return (
			<div className="row">
				<ParLinker
					setParID={this.setParID}
					setParName={this.setParName}
				/>
				<PointofsaleForm
					parID={parID}
					parName={parName}
				/>
			</div>
		)
	}
};

export default Pointofsale;