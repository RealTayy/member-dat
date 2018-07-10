import React, { Component } from 'react';
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
		ecFirstName: '',
		ecLastName: '',
		referBy: '',
		heardBy: ''
	}

	heardByArr = [
		"Email",
		"Referrence",
		"Drove By",
		"Web Search",
		"Facebook",
		"Instagram",
		"Paper Ads",
		"Magazine",
		"Newspaper",
		"School Event",
		"Other Event"
	];

	componentDidMount() {
		$('#heardBy').material_select();
		$('#heardBy').on('change', this.handleChange);
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
					<div className="divider row"></div>
					<div className="parent-info row">
						<h5 className="col s12">Parent Info</h5>
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
					<div className="divider row"></div>
					<div className="emergency-contact-info row">
						<h5 className="col s12">Emergency Contact Info</h5>
						<div className="input-field col s12 m6">
							<input
								id="ecFirstName" type="text" className="validate"
								value={this.state.ecFirstName} onChange={this.handleChange}
							/>
							<label htmlFor="ecFirstName">First Name *</label>
						</div>
						<div className="input-field col s12 m6">
							<input
								id="ecLastName" type="text" className="validate"
								value={this.state.ecLastName} onChange={this.handleChange}
							/>
							<label htmlFor="ecLastName">Last Name *</label>
						</div>
						<div className="input-field col s12 m6">
							<input
								id="ecEmail" type="text" className="validate"
								value={this.state.ecEmail} onChange={this.handleChange}
							/>
							<label htmlFor="ecEmail">Email</label>
						</div>
						<div className="input-field col s12 m3">
							<input
								id="ecPhoneNumber" type="tel" className="validate"
								value={this.state.ecPhoneNumber} onChange={this.handleChange}
							/>
							<label htmlFor="ecPhoneNumber">Phone Number *</label>
						</div>
						<div className="input-field col s12 m3">
							<input
								id="ecRelation" type="text" className="validate"
								value={this.state.ecRelation} onChange={this.handleChange}
							/>
							<label htmlFor="ecRelation">Relation</label>
						</div>
					</div>
					<div className="divider row"></div>
					<div className="additional-info row">
						<h5 className="col s12">Additional Info</h5>
						<div className="input-field col s12 m6">
							<input
								id="referBy" type="text" className="validate"
								value={this.state.referBy} onChange={this.handleChange}
							/>
							<label htmlFor="referBy">Referred By</label>
						</div>
						<div className="input-field col s12 m6">
							<select
								id="heardBy" type="text" className="validate"
								value={this.state.heardBy} onChange={this.handleChange}>
								<option key="0" value="">Not Answered</option>
								{this.heardByArr.sort().map((heardBy, i) => {
									return <option key={i + 1} value={heardBy}>{heardBy}</option>
								})}
							</select>
							<label htmlFor="heardBy">How did you hear about us</label>
						</div>
					</div>
					<div className="submit-btn center-align">
						<a className="waves-effect waves-light btn-large" onClick={this.handleSubmit}>Submit<i className="material-icons right">person_add</i></a>
					</div>					
				</form>
			</div>
		)
	}
};

export default AddParentForm;
