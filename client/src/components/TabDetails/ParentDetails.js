import React, { Component } from 'react';
import $ from 'jquery';
import 'jquery-ui';
import { ParentStudentRow, ParentInvoiceRow } from '.';

export class ParentDetails extends Component {
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
		heardBy: '',
		idtwo: '',
	};

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
		$(`#heardBy${this.props.data.id}`).material_select();
		$(`#heardBy${this.props.data.id}`).on('change', this.handleChangeDropdown);

		const data = this.props.data
		this.setState({
			first: data.info.name.dFirst,
			last: data.info.name.dLast,
			email: data.info.contact.email,
			phone: data.info.contact.phone,
			dob: data.info.dob.full,
			line1: data.info.address.line1,
			line2: data.info.address.line2,
			city: data.info.address.city,
			state: data.info.address.state,
			zip: data.info.address.zip,
			ecEmail: data.info.emergencyContact.contact.email,
			ecFirst: data.info.emergencyContact.name.first,
			ecLast: data.info.emergencyContact.name.last,
			ecPhone: data.info.emergencyContact.contact.phone,
			ecRelation: data.info.emergencyContact.relation,
			referBy: data.info.heardBy,
			heardBy: data.info.referBy,
			idtwo: data.idtwo,
		})
	}

	handleChange = (e) => { this.setState({ [e.target.id]: e.target.value }); }

	handleChangeDropdown = (e) => {
		this.setState({ [e.target.id]: e.target.value });
		if (e.target.value) $(`#${e.target.id}`).parent().children('input').addClass('valid');
		else $(`#${e.target.id}`).parent().children('input').removeClass('valid');
	}

	handleBlur = (e) => {
		if (e.target.value !== ''); $(`#${e.target.id}`).removeClass('invalid'); $(`#${e.target.id}`).addClass('valid');
	}

	handleSubmit = (e) => {
		// If all required fields not filled in exit handleSubmit and display toast
		if (!this.allRequiredFilled()) return window.Materialize.toast('Please fill in all required * fields', 5000, 'animated bounceInUp');
		// TODO: THIS LMAO
		window.Materialize.toast(`Sorry! This function not yet implemented`, 5000, 'animated bounceInUp red darken-2');
	}

	allRequiredFilled = () => {
		// Helper function to detect when animation ends
		const animationEnd = (function (el) {
			const animations = {
				animation: 'animationend',
				OAnimation: 'oAnimationEnd',
				MozAnimation: 'mozAnimationEnd',
				WebkitAnimation: 'webkitAnimationEnd',
			};

			for (let t in animations) {
				if (el.style[t] !== undefined) return animations[t];
			}
		})(document.createElement('div'));

		// 
		const validationArr = $('.addparent-form .required').map(function () {
			if (this.value !== '') return true
			else {
				if (this.tagName === "SELECT") {
					$(this).parent().children('input').removeClass('valid');
					$(this).parent().children('input').addClass('invalid');
				} else {
					$(this).removeClass('valid');
					$(this).addClass('invalid');
				}
				$(this).parent().addClass('animated flash');
				$(this).parent().one(animationEnd, () => $(this).parent().removeClass('animated flash'));
				return false;
			}
		})
		return !validationArr.toArray().includes(false)
	};

	render() {
		const data = this.props.data;
		console.log(data);
		return (
			<div id={`${data.idtwo}`} className="detail-row row">
				<div className="col s12 m7 row">
					<div className="addparent-form">
						<form className="col s12 z-depth-2 trans-card">
							<div className="parent-info row">
								<h5 className="col s12">Parent Info</h5>
								<div className="input-field col s4">
									<input
										id="idtwo" type="text" className="validate" disabled
										value={this.state.idtwo} onChange={this.handleChange}
									/>
									<label className="active" htmlFor="idtwo">ID#</label>
								</div>
								<div className="input-field col s12 m4">
									<input
										id="first" type="text" className="required validate"
										value={this.state.first} onChange={this.handleChange}
									/>
									<label className="active" htmlFor="first">First Name *</label>
								</div>
								<div className="input-field col s12 m4">
									<input
										id="last" type="text" className="required validate"
										value={this.state.last} onChange={this.handleChange}
									/>
									<label className="active" htmlFor="last">Last Name *</label>
								</div>
								<div className="input-field col s12 m6">
									<input
										id="email" type="email" className="required validate"
										value={this.state.email} onChange={this.handleChange}
									/>
									<label className="active" htmlFor="email">Email *</label>
								</div>
								<div className="input-field col s12 m3">
									<input
										id="phone" type="tel" className="required validate"
										value={this.state.phone} onChange={this.handleChange}
									/>
									<label className="active" htmlFor="phone">Phone Number *</label>
								</div>
								<div className="input-field col s12 m3">
									<input
										id="dob" type="date" className="required validate"
										value={this.state.dob} onChange={this.handleChange} onBlur={this.handleBlur}
									/>
									<label className="active" htmlFor="dob">Date of Birth *</label>
								</div>
								<div className="input-field col s12">
									<input
										id="line1" type="text" className="required validate"
										value={this.state.line1} onChange={this.handleChange}
									/>
									<label className="active" htmlFor="line1">Address *</label>
								</div>
								<div className="input-field col s12 m4">
									<input
										id="line2" type="text" className="validate"
										value={this.state.line2} onChange={this.handleChange}
									/>
									<label className="active" htmlFor="line2">Address Line 2</label>
								</div>
								<div className="input-field col s12 m4">
									<input
										id="city" type="text" className="required validate"
										value={this.state.city} onChange={this.handleChange}
									/>
									<label className="active" htmlFor="city">City *</label>
								</div>
								<div className="input-field col s12 m2">
									<input
										id="state" type="text" className="required validate"
										value={this.state.state} onChange={this.handleChange}
									/>
									<label className="active" htmlFor="state">State *</label>
								</div>
								<div className="input-field col s12 m2">
									<input
										id="zip" type="text" className="required validate"
										value={this.state.zip} onChange={this.handleChange}
									/>
									<label className="active" htmlFor="zip">Zip Code *</label>
								</div>
							</div>
							<div className="divider row"></div>
							<div className="emergency-contact-info row">
								<h5 className="col s12">Emergency Contact Info</h5>
								<div className="input-field col s12 m6">
									<input
										id="ecFirst" type="text" className="required validate"
										value={this.state.ecFirst} onChange={this.handleChange}
									/>
									<label className="active" htmlFor="ecFirst">First Name *</label>
								</div>
								<div className="input-field col s12 m6">
									<input
										id="ecLast" type="text" className="required validate"
										value={this.state.ecLast} onChange={this.handleChange}
									/>
									<label className="active" htmlFor="ecLast">Last Name *</label>
								</div>
								<div className="input-field col s12 m6">
									<input
										id="ecEmail" type="email" className="required validate"
										value={this.state.ecEmail} onChange={this.handleChange}
									/>
									<label className="active" htmlFor="ecEmail">Email *</label>
								</div>
								<div className="input-field col s12 m3">
									<input
										id="ecPhone" type="tel" className="required validate"
										value={this.state.ecPhone} onChange={this.handleChange}
									/>
									<label className="active" htmlFor="ecPhone">Phone Number *</label>
								</div>
								<div className="input-field col s12 m3">
									<input
										id="ecRelation" type="text" className="validate"
										value={this.state.ecRelation} onChange={this.handleChange}
									/>
									<label className="active" htmlFor="ecRelation">Relation</label>
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
									<label className="active" htmlFor="referBy">Referred By</label>
								</div>
								<div className="input-field col s12 m6">
									<select
										id={`heardBy${this.props.data.id}`} type="text" className="heardBy validate"
										value={this.state.heardBy} onChange={this.handleChangeDropdown}>
										<option key="0" value="">Not Answered</option>
										{this.heardByArr.sort().map((heardBy, i) => {
											return <option key={i + 1} value={heardBy}>{heardBy}</option>
										})}
									</select>
									<label htmlFor="heardBy">How did you hear about us</label>
								</div>
							</div>
							<div className="submit-btn center-align">
								<a className="waves-effect waves-light btn-large" onClick={this.handleSubmit}>Update<i className="material-icons right">person_add</i></a>
							</div>
						</form>
					</div>
				</div>
				<div className="col s12 m5">


					<div className="parent-students col s12 z-depth-2 trans-card">
						<h5 className="parent-students-header" >Students</h5>
						{data.students.map((student, i) => {
							return <ParentStudentRow
								key={i}
								data={student}
								pushTab={this.props.pushTab}
							/>
						})}
					</div>


					<div className="parent-invoices col s12 z-depth-2 trans-card">
						<h5 className="parent-invoices-header" >Invoices</h5>
						{data.invoices.map((invoice, i) => {
							return <ParentInvoiceRow
								key={i}
								data={invoice}								
								setActiveTab={this.props.setActiveTab}
							/>
						})}
					</div>


				</div>
			</div>
		)
	}
};

export default ParentDetails;
