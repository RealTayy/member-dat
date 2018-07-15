import React, { Component } from 'react';
import { ParLinker } from '../../components/Linker';
import { InvoicesForm } from '../../components/Invoices';
import './Invoices.css';

export class Invoices extends Component {
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
				<InvoicesForm
					parID={parID}
					parName={parName}
				/>
			</div>
		)
	}
};

export default Invoices;