import React, { Component } from 'react';
import { ParLinker } from '../../components/Linker';
import { InvoicesResults } from '../../components/Invoices';
import './Invoices.css';

export class Invoices extends Component {
	state = {
		parID: '',
		parName: '',
		invoices: [],
	};

	componentDidMount = () => {

	}


	setParID = (parID) => {
		this.setState({ parID: parID });
	}

	setParName = (parName) => {
		this.setState({ parName: parName });
	}

	setInvoices = (invoices) => {
		this.setState({ invoices: invoices });
	}

	render() {
		const parID = this.state.parID;
		const parName = this.state.parName;
		const invoices = this.state.invoices;
		const setInvoices = this.setInvoices;
		return (
			<div className="row">
				<ParLinker
					setParID={this.setParID}
					setParName={this.setParName}
					setInvoices={this.setInvoices}
					autoLinkId={this.props.autoLinkId}
				/>
				<InvoicesResults
					parID={parID}
					parName={parName}
					invoices={invoices}
					setInvoices={setInvoices}
				/>
			</div>
		)
	}
};

export default Invoices;