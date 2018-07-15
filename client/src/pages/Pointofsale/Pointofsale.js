import React, { Component } from 'react';
import { ParLinker } from '../../components/Linker';
import { PointofsaleForm } from '../../components/PointofsaleForm';

export class Pointofsale extends Component {
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
			<div>
				<ParLinker/>
				<PointofsaleForm/>
			</div>
		)
	}
};

export default Pointofsale;
