import React, { Component } from 'react';
import './AddParentForm.css'
import $ from 'jquery';
import 'jquery-ui';

export class AddParentForm extends Component {
	state = {
		firstName: '',
		lastName: '',
		email: '',
		phoneNumber: '',
		dateOfBirth: '',
		addressLine: '',
		addressLine2: '',
		city: '',
		state: '',
		zipCode: '',
	}

	componentDidMount() {

	}




	handleChange = (e) => {
		this.setState({ [e.target.id]: e.target.value });
		setTimeout(() => { console.log(this.state) }, 1)
	}

	handleSubmit = (e) => {
		// Builds db object from filled in fields
		let dbObject = {};
		for (let property in this.state) {
			if (this.state[property] !== "") { dbObject[property] = this.state[property] }
		}
		console.log(dbObject);
	}
	render() {
		return (
			<div className="addparent-form">
				<form className="col s12">
					<div className="parent-info row">
						<h5 className="form-section-header col s12">Parent Info</h5>
						<div className="input-field col s12 m6">
							<input
								id="firstName" type="text" className="validate"
								value={this.state.firstName} onChange={this.handleChange}
							/>
							<label htmlFor="firstName">First Name *</label>
						</div>
						<div className="input-field col s12 m6">
							<input
								id="lastName" type="text" className="validate"
								value={this.state.lastName} onChange={this.handleChange}
							/>
							<label htmlFor="lastName">Last Name *</label>
						</div>
						<div className="input-field col s12 m6">
							<input
								id="email" type="email" className="validate"
								value={this.state.email} onChange={this.handleChange}
							/>
							<label htmlFor="email">Email *</label>
						</div>
						<div className="input-field col s12 m3">
							<input
								id="phoneNumber" type="tel" className="validate"
								value={this.state.phoneNumber} onChange={this.handleChange}
							/>
							<label htmlFor="phoneNumber">Phone Number *</label>
						</div>
						<div className="input-field col s12 m3">
							<input
								id="dateOfBirth" type="date" className="validate"
								value={this.state.dateOfBirth} onChange={this.handleChange}
							/>
							<label htmlFor="dateOfBirth">Date of Birth *</label>
						</div>
						<div className="input-field col s12">
							<input
								id="addressLine" type="text" className="validate"
								value={this.state.addressLine} onChange={this.handleChange}
							/>
							<label htmlFor="addressLine">Address *</label>
						</div>
						<div className="input-field col s12 m4">
							<input
								id="addressLine2" type="text" className="validate"
								value={this.state.addressLine2} onChange={this.handleChange}
							/>
							<label htmlFor="addressLine2">Address Line 2</label>
						</div>
						<div className="input-field col s12 m4">
							<input
								id="city" type="text" className="validate"
								value={this.state.city} onChange={this.handleChange}
							/>
							<label htmlFor="city">City *</label>
						</div>
						<div className="input-field col s12 m2">
							<input
								id="stateName" type="text" className="validate"
								value={this.state.stateName} onChange={this.handleChange}
							/>
							<label htmlFor="stateName">State *</label>
						</div>
						<div className="input-field col s12 m2">
							<input
								id="zipCode" type="text" className="validate"
								value={this.state.zipCode} onChange={this.handleChange}
							/>
							<label htmlFor="zipCode">Zip Code *</label>
						</div>
					</div>
					<div className="divider"></div>
					<div className="emergency-contact-info">
						asdf
					</div>
					<div className="divider"></div>
					<div className="additional-info">
						asdf
					</div>
				</form>
			</div>
		)
	}
};

export default AddParentForm;
