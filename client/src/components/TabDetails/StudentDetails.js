import React, { Component } from 'react';
import './StudentDetails.css';
import $ from 'jquery';

export class StudentDetails extends Component {
	state = {
		first: '',
		last: '',
		school: '',
		phone: '',
		dob: '',
		beltRank: '',
		dojo: '',
		type: '',
		length: '',
		initFee: '',
		rateFee: '',
		parID: '',
		parIDtwo: '',
		parName: '',
		expDate: '',
		willRenew: true,
	}

	dojoArr = [
		'Pearland',
		'Cypress'
	]

	enrollmentTypeArr = [
		'Black Belt',
		'Standard',
		'Trial'
	]

	enrollmentLengthArr = [
		'3 Years',
		'1 Year',
		'6 Months',
		'1 Month',
		'6 Weeks',
		'2 Weeks'
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
		$('#beltRank').on('change', this.handleChangeDropdown);
		$('#dojo').material_select();
		$('#dojo').on('change', this.handleChangeDropdown);
		$('#type').material_select();
		$('#type').on('change', this.handleChangeDropdown);
		$('#length').material_select();
		$('#length').on('change', this.handleChangeDropdown);
	}

	handleChange = (e) => {
		this.setState({ [e.target.id]: e.target.value });
	}

	handleChangeCheckbox = (e) => {
		this.setState({ [e.target.id]: (e.target.value === 'false') ? 'true' : 'false' });
		setTimeout(() => { console.log(this.state) }, 10);
	}

	handleBlur = (e) => {
		if (e.target.value !== ''); $(`#${e.target.id}`).removeClass('invalid'); $(`#${e.target.id}`).addClass('valid');
	}

	handleBlurNumber = (e) => {
		let rate = parseFloat(e.target.value).toFixed(2);
		this.setState({ [e.target.id]: rate });
		setTimeout(() => { console.log(this.state) }, 1)
	}

	handleSubmit = (e) => {
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
		const validationArr = $('.addstudent-form .required').map(function () {
			if (this.value !== '') return true
			else {
				if (this.tagName === "SELECT") {
					$(this).parent().children('input').removeClass('valid');
					$(this).parent().children('input').addClass('invalid');
				}
				$(this).removeClass('valid'); $(this).addClass('invalid');
				$(this).parent().addClass('animated flash');
				$(this).parent().one(animationEnd, () => $(this).parent().removeClass('animated flash'));
				return false;
			}
		})
		return !validationArr.toArray().includes(false)
	};

	render() {
		const data = this.props.data;
		return (
			<div id={`${data.idtwo}`} className="detail-row row">
				<div className="col s7">
					<div className="addstudent-form">
						<form className="detail-info col s12 z-depth-2 trans-card" action="#">
							<div className="student-info row">
								<h5 className="col s12">Student Info</h5>
								<div className="input-field col s12 m6">
									<input
										id="first" type="text" className="required validate"
										value={this.state.first} onChange={this.handleChange}
									/>
									<label htmlFor="first">First Name *</label>
								</div>
								<div className="input-field col s12 m6">
									<input
										id="last" type="text" className="required validate"
										value={this.state.last} onChange={this.handleChange}
									/>
									<label htmlFor="last">Last Name *</label>
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
										id="phone" type="tel" className="validate"
										value={this.state.phone} onChange={this.handleChange}
									/>
									<label htmlFor="phone">Phone Number</label>
								</div>
								<div className="input-field col s12 m3">
									<input
										id="dob" type="date" className="required datepicker validate"
										value={this.state.dob} onChange={this.handleChange} onBlur={this.handleBlur}
									/>
									<label htmlFor="dob">Date of Birth *</label>
								</div>
							</div>
							<div className="submit-btn center-align">
								<a className="waves-effect waves-light btn-large" onClick={this.handleSubmit}>Update<i className="material-icons right">person_add</i></a>
							</div>
						</form>
					</div>
					<div className="addstudent-form">
						<form className="detail-enrollment col s12 z-depth-2 trans-card" action="#">
							<div className="enrollment-info row">
								<h5 className="col s12">Tuition/Enrollment Info</h5>
								<div className="input-field col s12 m6">
									<select
										id="dojo" type="text" className="required validate"
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
										id="beltRank" type="text" className="required validate"
										value={this.state.beltRank} onChange={this.handleChange}>
										<option key="0" value="" disabled>Select Belt Rank</option>
										{this.beltRankArr.map((beltRank, i) => {
											return <option key={i + 1} value={beltRank}>{beltRank}</option>
										})}
									</select>
									<label htmlFor="beltRank">Belt Rank *</label>
								</div>
								<div className="input-field col s12 m6">
									<select
										id="type" type="text" className="required validate"
										value={this.state.type} onChange={this.handleChange}>
										<option key="0" value="" disabled>Select Program Type</option>
										{this.enrollmentTypeArr.map((type, i) => {
											return <option key={i + 1} value={type}>{type}</option>
										})}
									</select>
									<label htmlFor="type">Program Type *</label>
								</div>
								<div className="input-field col s12 m6">
									<select
										id="length" type="text" className="required validate"
										value={this.state.length} onChange={this.handleChange}>
										<option key="0" value="" disabled>Select Program Length</option>
										{this.enrollmentLengthArr.map((length, i) => {
											return <option key={i + 1} value={length}>{length}</option>
										})}
									</select>
									<label htmlFor="length">Program Length *</label>
								</div>
								<div className="input-field col s12 m6">
									<input
										id="expDate" type="date" className="required datepicker validate"
										value={this.state.expDate} onChange={this.handleChange} onBlur={this.handleBlur}
									/>
									<label htmlFor="expDate">Start Date</label>
								</div>
								<div className="input-field col s12 m6">
									<input
										id="expDate" type="date" className="required datepicker validate"
										value={this.state.expDate} onChange={this.handleChange} onBlur={this.handleBlur}
									/>
									<label htmlFor="expDate">Expiration Date</label>
								</div>
								<div className="input-field col s12 m6">
									<input
										id="rateFee" type="number" className="required validate"
										value={this.state.rateFee} onChange={this.handleChange} onBlur={this.handleBlurNumber}
									/>
									<label htmlFor="rateFee">Renewal Fee ($) *</label>
								</div>
								<div className="input-field check-box-field col s12 m6">
									<p>
										<label htmlFor="willRenew">
											<input id="willRenew" type="checkbox" className="filled-in"
												value={this.state.willRenew} onChange={this.handleChangeCheckbox}
											/>
											<span>Automatic Renewal</span>
										</label>
									</p>
								</div>
							</div>
							<div className="submit-btn center-align">
								<a className="waves-effect waves-light btn-large" onClick={this.handleSubmit}>Update<i className="material-icons right">person_add</i></a>
							</div>
						</form>
					</div>
				</div>
				<div>
				</div>
			</div>
		)
	}
};

export default StudentDetails;
