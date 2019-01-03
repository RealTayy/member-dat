import React, { Component } from 'react';

export class InvoiceOnlineModal extends Component {
	state = {
		cardFirstName: '',
		cardLastName: '',
		cardCVC: '',
		cardExpDate: '',
		cardNumber: '',
		cardZipCode: '',
	}

	handleChange = (e) => {
		this.setState({ [e.target.id]: e.target.value });
	}

	handleClick = (e) => {
		window.Materialize.toast(`Sorry! This feature not yet implemented`, 5000, 'animated bounceInUp red darken-2');
	}

	render() {		
		return (
			<div className="container">
				<div className="center-align">
					<h4>Please Enter Card Information</h4>
				</div>
				<div className="row">
					<form className="col s12 center-align">
						<div className="input-field col s6">
							<input
								id="cardFirstName" type="text" className="validate"
								value={this.state.cardFirstName} onChange={this.handleChange}
							/>
							<label htmlFor="cardFirstName">First Name</label>
						</div>
						<div className="input-field col s6">
							<input
								id="cardLastName" type="text" className="validate"
								value={this.state.cardLastName} onChange={this.handleChange}
							/>
							<label htmlFor="cardLastName">Last Name</label>
						</div>
						<div className="input-field col s12">
							<input
								id="cardNumber" type="text" className="validate"
								value={this.state.cardNumber} onChange={this.handleChange}
							/>
							<label htmlFor="cardNumber">Card Number</label>
						</div>
						<div className="input-field col s4">
							<input
								id="cardExpDate" type="text" className="validate"
								value={this.state.cardExpDate} onChange={this.handleChange}
							/>
							<label htmlFor="cardExpDate">Expiration Date</label>
						</div>
						<div className="input-field col s4">
							<input
								id="cardCVC" type="text" className="validate"
								value={this.state.cardCVC} onChange={this.handleChange}
							/>
							<label htmlFor="cardCVC">CVC Code</label>
						</div>
						<div className="input-field col s4">
							<input
								id="cardZipCode" type="text" className="validate"
								value={this.state.cardZipCode} onChange={this.handleChange}
							/>
							<label htmlFor="cardZipCode">Zip Code</label>
						</div>
						<a onClick={this.handleClick} className="waves-effect waves-light btn btn-large">Submit Payment<i className="material-icons right">send</i></a>
					</form>
				</div>
			</div>
		)
	}
};

export default InvoiceOnlineModal;
