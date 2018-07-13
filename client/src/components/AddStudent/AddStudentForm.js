import React, { Component } from 'react';
import $ from 'jquery';
import 'jquery-ui';
import { parentsAPI, studentsAPI } from '../../utils/api/index';

export class AddStudentForm extends Component {
	state = {
		first: '',
		last: '',
		school: '',
		phone: '',
		dob: '',
		beltrank: 'White',
		dojo: 'Pearland',
		type: 'Standard',
		rate: '',
		parID: '',
		parIDtwo: '',
		parName: 'Please enter Parent ID',
	}

	dojoArr = [
		'Pearland'
	]

	enrollmentArr = [
		"Standard",
		"Trial"
	]

	beltrankArr = [
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
		$('#beltrank').material_select();
		$('#beltrank').on('change', this.handleChangeDropdown);
		$('#dojo').material_select();
		$('#dojo').on('change', this.handleChangeDropdown);
		$('#type').material_select();
		$('#type').on('change', this.handleChangeDropdown);
	}

	handleChange = (e) => {
		this.setState({ [e.target.id]: e.target.value });
		setTimeout(() => { console.log(this.state) }, 1)
	}

	handleChangeDropdown = (e) => {
		this.setState({ [e.target.id]: e.target.value });
		if (e.target.value) $(`#${e.target.id}`).parent().children('input').addClass('valid');
		else $(`#${e.target.id}`).parent().children('input').removeClass('valid');
	}

	handleLink = (e) => {
		if (!this.state.parIDtwo) return window.Materialize.toast('You must enter in a Parent ID', 5000, 'animated bounceInUp');
		$('.link-btn i').addClass('animated infinite flip');
		$('.link-btn a').addClass('disabled');
		parentsAPI.getOneParentByIdTwo(this.state.parIDtwo)
			.then((data) => {
				console.log(data);
				let parent = data.data[0]
				$('.link-btn i').removeClass('animated infinite flip');
				$('.link-btn a').removeClass('disabled');
				if (data.data.length === 0) return window.Materialize.toast(`No parent found with ID: ${this.state.parIDtwo}`, 5000, 'animated bounceInUp red darken-2')
				else window.Materialize.toast(`${parent.info.name.dFull} linked`, 5000, 'animated bounceInUp green darken-2');
				this.setState({ parID: parent.id, parName: parent.info.name.dFull });
			})
			.catch((err) => {
				console.log(err);
				$('.link-btn i').removeClass('animated infinite flip');
				$('.link-btn a').removeClass('disabled');
				window.Materialize.toast(`Error searching ParentID: ${err.response.data.name} `, 5000, 'animated bounceInUp red darken-2');
			});
	}

	handleBlurRate = (e) => {
		let rate = parseFloat(e.target.value).toFixed(2);
		this.setState({ [e.target.id]: rate });
		setTimeout(() => { console.log(this.state) }, 1)
	}

	handleSubmit = (e) => {
		// If all required fields not filled in exit handleSubmit and display toast
		if (!this.allRequiredFilled()) return window.Materialize.toast('Please fill in all required * fields', 5000, 'animated bounceInUp');
		// If user didn't link parent then exit handleSubmit and display Toast
		if (this.state.parID === '') return window.Materialize.toast(`Please link parent before submitting student`, 5000, 'animated bounceInUp');
		// Button goes to "Working" animation
		$('.submit-btn i').addClass('animated infinite flip');
		$('.submit-btn a').addClass('disabled');
		// Submit this.state to API to build object to be added to DB
		studentsAPI.submitNewStudent(this.state)
			.then((data) => {
				// Button finishes "Working" animation
				$('.submit-btn i').removeClass('animated infinite flip');
				$('.submit-btn a').removeClass('disabled');
				// Console log response data and display Success toast
				let student = data.data;
				console.log(data);
				window.Materialize.toast(`${student.info.name.dFull} successfully added`, 5000, 'animated bounceInUp green darken-2');
			})
			.catch((err) => {
				// Button finishes "Working" animation
				$('.submit-btn i').removeClass('animated infinite flip');
				$('.submit-btn a').removeClass('disabled');
				// If err then console log entire err
				console.log(err)
				// If error was from server display returned message in a toast
				if (err.response) { console.log(err.response); return window.Materialize.toast(`Error adding new student: ${err.response.data.name}`, 5000, 'animated bounceInUp red darken-2'); }
				// Else display generic error toast
				else console.log(err); window.Materialize.toast(`Error adding new student: Unrecognized Error`, 5000, 'animated bounceInUp red darken-2');
			});
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
				$(this).removeClass('valid');
				$(this).addClass('invalid');
				$(this).parent().addClass('animated flash');
				$(this).parent().one(animationEnd, () => $(this).parent().removeClass('animated flash'));
				return false;
			}
		})		
		return !validationArr.toArray().includes(false)
	};

	render() {
		return (
			<div className="addstudent-form">
				<form className="col s12">
					<div className="divider row"></div>
					<div className="parent-info row">
						<h5 className="col s12">Link Parent</h5>
						<div className="">
							<div className="input-field col s12 m4">
								<input
									id="parIDtwo" type="text" className=""
									value={this.state.parIDtwo} onChange={this.handleChange}
								/>
								<label htmlFor="parIDtwo">Parent ID</label>
							</div>
							<div className="input-field col s12 m4 uneditable">
								<input disabled
									id="parName" type="text" className="validate"
									value={this.state.parName} onChange={this.handleChange}
								/>
								<label htmlFor="parName"></label>
							</div>
							<div className="col s12 m4">
								<div className="link-btn center-align">
									<a className="waves-effect waves-light btn-large" onClick={this.handleLink}>Link<i className="material-icons right">insert_link</i></a>
								</div>
							</div>
						</div>
					</div>
					<div className="divider row"></div>
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
								id="beltrank" type="text" className="required validate"
								value={this.state.beltrank} onChange={this.handleChange}>
								{this.beltrankArr.map((beltrank, i) => {
									return <option key={i} value={beltrank}>{beltrank}</option>
								})}
							</select>
							<label htmlFor="beltrank">Belt Rank *</label>
						</div>
						<div className="input-field col s12 m6">
							<select
								id="type" type="text" className="required validate"
								value={this.state.type} onChange={this.handleChange}>
								{this.enrollmentArr.map((type, i) => {
									return <option key={i} value={type}>{type}</option>
								})}
							</select>
							<label htmlFor="type">Enrollment Type *</label>
						</div>
						<div className="input-field col s12 m6">
							<input
								id="rate" type="number" className="required validate"
								value={this.state.rate} onChange={this.handleChange} onBlur={this.handleBlurRate}
							/>
							<label htmlFor="rate">Monthly Rate ($) *</label>
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
