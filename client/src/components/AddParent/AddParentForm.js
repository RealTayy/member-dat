import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import $ from 'jquery';
import moment from 'moment';

// https://www.npmjs.com/package/react-datepicker


export class AddParentForm extends Component {
	state = {
		firstName: '',
		lastName: '',
		email: '',
		phoneNumber: '',
		dateOfBirth: '',
		addressLine: '',
		addressLine2: '',
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
			<div className="addparent-form row">
				<form className="col s12">
					<div className="input-field col s12 m6">
						<input
							id="firstName" type="text" className="validate"
							value={this.state.firstName} onChange={this.handleChange}
						/>
						<label htmlFor="firstName">First Name</label>
					</div>
					<div className="input-field col s12 m6">
						<input
							id="lastName" type="text" className="validate"
							value={this.state.lastName} onChange={this.handleChange}
						/>
						<label htmlFor="lastName">Last Name</label>
					</div>
					<div className="input-field col s12 m6">
						<input
							id="email" type="email" className="validate"
							value={this.state.email} onChange={this.handleChange}
						/>
						<label htmlFor="email">Email</label>
					</div>
					<div className="input-field col s12 m3">
						<input
							id="phoneNumber" type="text" className="validate"
							value={this.state.phoneNumber} onChange={this.handleChange}
						/>
						<label htmlFor="phoneNumber">Phone Number</label>
					</div>


					{/* <div className="input-field col s12 m3">
						<input
							id="dateOfBirth" type="text" className="datepicker validate"
							value={this.state.dateOfBirth} onChange={this.handleChange}
						/>
						<label htmlFor="dateOfBirth">Date of Birth</label>
					</div> */}


					<div className="input-field col s12">
						<input
							id="addressLine" type="text" className="validate"
							value={this.state.addressLine} onChange={this.handleChange}
						/>
						<label htmlFor="addressLine">Address</label>
					</div>
					<div className="input-field col s12">
						<input
							id="addressLine2" type="text" className="validate"
							value={this.state.addressLine2} onChange={this.handleChange}
						/>
						<label htmlFor="addressLine2">Address Line 2</label>
					</div>
				</form>
			</div>
		)
	}
};

export default AddParentForm;
