import React, { Component } from 'react';

export class InvoicesForm extends Component {
	state = {
		parID: '',
		parName: 'Please Link Parent',
	};

	componentWillReceiveProps(nextProps) {
		console.log(nextProps);
		this.setState(nextProps);
	}

	render() {
		const parName = this.state.parName;
		return (
			<div className="invoices col s8">
				<div className="col s12 z-depth-2">
					<h4 className="invoices-header">
						Invoices
						<span> - {parName}</span>
					</h4>
					<div className="divider row"></div>
					<form className="col s12">
						Form goes here
					</form>
				</div>
			</div>
		)
	};
};

export default InvoicesForm;
