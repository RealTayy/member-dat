import React, { Component } from 'react';
import $ from 'jquery';
import 'jquery-ui';

export class AddStudentForm extends Component {
	state = {
		firstName: '',
		lastName: '',
		school: '',
		phoneNumber: '',
		dob: '',
		beltRank: 'White',
		dojo: '',
		type: 'Standard',
		monthlyrate: '',
	}


	dojoArr = [
		'Pearland'
	]

	enrollmentArr = [
		"Standard",
		"Trial"
	]

	beltRankArr = [
		'White',
		'Yellow', 'Yellow Stripe',
		'Orange', 'Orange Stripe',
		'Green', 'Green Stripe',
		'Blue', 'Blue Stripe',
		'Brown', 'Brown Stripe',
		'Red', 'Red Stripe',
		'Black Candidate',
		'Black 1', 'Black 2', 'Black 3', 'Black 4', 'Black 5', 'Black 6', 'Black 7', 'Black 8', 'Black 9'
	];

	componentDidMount() {
		$('#beltRank').material_select();
		$('#beltRank').on('change', this.handleChange);
		$('#dojo').material_select();
		$('#dojo').on('change', this.handleChange);
		$('#type').material_select();
		$('#type').on('change', this.handleChange);
	}

	handleChange = (e) => {
		this.setState({ [e.target.id]: e.target.value });
		setTimeout(() => { console.log(this.state) }, 1)
	}

	handleChangeMonthlyRate = (e) => {
		let rate = parseFloat(e.target.value).toFixed(2);
		this.setState({ [e.target.id]: rate });
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
		// <div className="divider row"></div>
		return (
			<div className="addstudent-form">
				<form className="col s12">
					<div className="divider row"></div>
					<div className="student-info row">
						<h5 className="col s12">Student Info</h5>
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
								id="school" type="text" className="validate"
								value={this.state.school} onChange={this.handleChange}
							/>
							<label htmlFor="school">Public School Attending</label>
						</div>
						<div className="input-field col s12 m3">
							<input
								id="phoneNumber" type="tel" className="validate"
								value={this.state.phoneNumber} onChange={this.handleChange}
							/>
							<label htmlFor="phoneNumber">Phone Number</label>
						</div>
						<div className="input-field col s12 m3">
							<input
								id="dob" type="date" className="validate"
								value={this.state.dob} onChange={this.handleChange}
							/>
							<label htmlFor="dob">Date of Birth *</label>
						</div>
					</div>
					<div className="divider row"></div>
					<div className="enrollment-info row">
						<h5 className="col s12">Tuition/Enrollment Info</h5>
						<div className="input-field col s12 m6">
							<select
								id="dojo" type="text" className="validate"
								value={this.state.dojo} onChange={this.handleChange}>
								<option key="0" value="" disabled>Select Dojo</option>
								{this.dojoArr.map((dojo, i) => {
									return <option key={i + 1} value={dojo}>{dojo}</option>
								})}
							</select>
							<label htmlFor="dojo">Dojo *</label>
						</div>
						<div className="input-field col s12 m6">
							<select
								id="beltRank" type="text" className="validate"
								value={this.state.beltRank} onChange={this.handleChange}>
								{this.beltRankArr.map((beltRank, i) => {
									return <option key={i} value={beltRank}>{beltRank}</option>
								})}
							</select>
							<label htmlFor="beltRank">Belt Rank *</label>
						</div>
						<div className="input-field col s12 m6">
							<select
								id="type" type="text" className="validate"
								value={this.state.type} onChange={this.handleChange}>
								{this.enrollmentArr.map((type, i) => {
									return <option key={i} value={type}>{type}</option>
								})}
							</select>
							<label htmlFor="type">Enrollment Type *</label>
						</div>
						<div className="input-field col s12 m6">
							<input
								id="monthlyrate" type="number" className="validate"
								value={this.state.monthlyrate} onChange={this.handleChange} onBlur={this.handleChangeMonthlyRate}
							/>
							<label htmlFor="monthlyrate">Monthly Rate ($) *</label>
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

export default AddStudentForm;
