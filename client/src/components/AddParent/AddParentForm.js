import React, { Component } from 'react';
import $ from 'jquery';
import 'jquery-ui';
import { parentsAPI } from '../../utils/api/index';

export class AddParentForm extends Component {
	state = {
		first: '',
		last: '',
		email: '',
		phone: '',
		dob: '',
		line1: '',
		line2: '',
		city: '',
		state: '',
		zip: '',
		ecEmail: '',
		ecFirst: '',
		ecLast: '',
		ecPhone: '',
		ecRelation: '',
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
		$('.submit-btn i').addClass('animated infinite flip');
		$('.submit-btn a').addClass('disabled');
		let dbObject = {};
		for (let property in this.state) {
			if (this.state[property] !== "") { dbObject[property] = this.state[property] }
		}
		parentsAPI.submitNewParent(dbObject)
			.then((data) => {
				let parent = data.data;
				console.log(data);
				$('.submit-btn i').removeClass('animated infinite flip');
				$('.submit-btn a').removeClass('disabled');
				window.Materialize.toast(`${parent.info.name.full} successfully added`, 5000, 'animated bounceInUp green darken-2');
			})
			.catch((err) => {
				console.log(err)
				$('.submit-btn i').removeClass('animated infinite flip');
				$('.submit-btn a').removeClass('disabled');
				window.Materialize.toast(`Error adding new parent: ${err.response.data.name}`, 5000, 'animated bounceInUp red darken-2');
			});
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
								id="first" type="text" className="validate"
								value={this.state.first} onChange={this.handleChange}
							/>
							<label htmlFor="first">First Name *</label>
						</div>
						<div className="input-field col s12 m6">
							<input
								id="last" type="text" className="validate"
								value={this.state.last} onChange={this.handleChange}
							/>
							<label htmlFor="last">Last Name *</label>
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
								id="phone" type="tel" className="validate"
								value={this.state.phone} onChange={this.handleChange}
							/>
							<label htmlFor="phone">Phone Number *</label>
						</div>
						<div className="input-field col s12 m3">
							<input
								id="dob" type="date" className="validate"
								value={this.state.dob} onChange={this.handleChange}
							/>
							<label htmlFor="dob">Date of Birth *</label>
						</div>
						<div className="input-field col s12">
							<input
								id="line1" type="text" className="validate"
								value={this.state.line1} onChange={this.handleChange}
							/>
							<label htmlFor="line1">Address *</label>
						</div>
						<div className="input-field col s12 m4">
							<input
								id="line2" type="text" className="validate"
								value={this.state.line2} onChange={this.handleChange}
							/>
							<label htmlFor="line2">Address Line 2</label>
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
								id="state" type="text" className="validate"
								value={this.state.state} onChange={this.handleChange}
							/>
							<label htmlFor="state">State *</label>
						</div>
						<div className="input-field col s12 m2">
							<input
								id="zip" type="text" className="validate"
								value={this.state.zip} onChange={this.handleChange}
							/>
							<label htmlFor="zip">Zip Code *</label>
						</div>
					</div>
					<div className="divider row"></div>
					<div className="emergency-contact-info row">
						<h5 className="col s12">Emergency Contact Info</h5>
						<div className="input-field col s12 m6">
							<input
								id="ecFirst" type="text" className="validate"
								value={this.state.ecFirst} onChange={this.handleChange}
							/>
							<label htmlFor="ecFirst">First Name *</label>
						</div>
						<div className="input-field col s12 m6">
							<input
								id="ecLast" type="text" className="validate"
								value={this.state.ecLast} onChange={this.handleChange}
							/>
							<label htmlFor="ecLast">Last Name *</label>
						</div>
						<div className="input-field col s12 m6">
							<input
								id="ecEmail" type="email" className="validate"
								value={this.state.ecEmail} onChange={this.handleChange}
							/>
							<label htmlFor="ecEmail">Email</label>
						</div>
						<div className="input-field col s12 m3">
							<input
								id="ecPhone" type="tel" className="validate"
								value={this.state.ecPhone} onChange={this.handleChange}
							/>
							<label htmlFor="ecPhone">Phone Number *</label>
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
