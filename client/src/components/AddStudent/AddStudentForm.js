import React, { Component } from 'react';
import $ from 'jquery';
import 'jquery-ui';
import { parentsAPI, studentsAPI, enrollmentsAPI, invoicesAPI } from '../../utils/api/index';

export class AddStudentForm extends Component {
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
		uniform: false,
		parID: '',
		parIDtwo: '',
		parName: 'Please enter Parent ID',
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

	handleChangeDropdown = (e) => {
		this.setState({ [e.target.id]: e.target.value });
		if (e.target.value) {
			$(`#${e.target.id}`).parent().children('input').addClass('valid');
			$(`#${e.target.id}`).parent().children('input').removeClass('invalid');
		}
		else $(`#${e.target.id}`).parent().children('input').removeClass('valid');
	}

	handleChangeCheckbox = (e) => {
		this.setState({ [e.target.id]: (e.target.value === 'false') ? 'true' : 'false' });
		setTimeout(() => { console.log(this.state) }, 10);
	}

	handleLink = (e) => {
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

		if (!this.state.parIDtwo) {
			$('#parIDtwo').addClass('invalid');
			$('#parIDtwo').parent().addClass('animated flash');
			$('#parIDtwo').parent().one(animationEnd, () => $('#parIDtwo').parent().removeClass('animated flash'));
			return window.Materialize.toast('You must enter in a Parent ID', 5000, 'animated bounceInUp')
		};
		$('.link-btn i').addClass('animated infinite flip');
		$('.link-btn a').addClass('disabled');
		parentsAPI.getOneParentByIdTwo(this.state.parIDtwo)
			.then((data) => {
				console.log(data);
				let parent = data.data[0]
				$('.link-btn i').removeClass('animated infinite flip');
				$('.link-btn a').removeClass('disabled');
				if (data.data.length === 0) {

					return window.Materialize.toast(`No parent found with ID: ${this.state.parIDtwo}`, 5000, 'animated bounceInUp red darken-2')
				}
				else window.Materialize.toast(`${parent.info.name.dFull} linked`, 5000, 'animated bounceInUp green darken-2');
				$('#parIDtwo').removeClass('invalid');
				$('#parName').addClass('valid');
				$('#parIDtwo').addClass('valid');
				this.setState({ parID: parent.id, parName: parent.info.name.dFull });
			})
			.catch((err) => {
				console.log(err);
				$('.link-btn i').removeClass('animated infinite flip');
				$('.link-btn a').removeClass('disabled');
				window.Materialize.toast(`Error searching ParentID: ${err.response.data.name} `, 5000, 'animated bounceInUp red darken-2');
			});
	}

	handleBlur = (e) => {
		if (e.target.value !== ''); $(`#${e.target.id}`).removeClass('invalid'); $(`#${e.target.id}`).addClass('valid');
	}

	handleBlurNumber = (e) => {
		let rate = parseFloat(e.target.value).toFixed(2);
		this.setState({ [e.target.id]: rate });
		setTimeout(() => { console.log(this.state) }, 1)
	}

	// I AM SO SORRY THIS IS SO LONG I COMMENTED THE FK OUT OF IT SO IT MIGHT BE JUST A LITTLE READABLE LMAO
	handleSubmit = (e) => {
		// If user didn't link parent then exit handleSubmit and display Toast
		if (this.state.parID === '') return window.Materialize.toast(`Please link parent before submitting student`, 5000, 'animated bounceInUp');
		// If all required fields not filled in exit handleSubmit and display toast
		if (!this.allRequiredFilled()) return window.Materialize.toast('Please fill in all required * fields', 5000, 'animated bounceInUp');
		// Button goes to "Working" animation		
		console.log($('.submit-btn i'));
		$('.submit-btn i').addClass('animated infinite flip');
		$('.submit-btn a').addClass('disabled');
		// Submit this.state to enrollmentsAPI to add to DB
		enrollmentsAPI.submitEnrollment(this.state)
			.then((data) => {
				// Console log response data and display Success toast
				console.log(data.data);
				window.Materialize.toast(`Enrollment successful`, 7500, 'animated bounceInUp green darken-2');
				// Create studentData object, add enrollment id to it, and send to studentsAPI
				const studentData = this.state;
				studentData.enrollment = data.data._id;
				// Send studentData to studentsAPI
				studentsAPI.submitNewStudent(studentData)
					.then((data) => {
						// Console log response data and display Success toast
						const student = data.data;
						console.log(data.data);
						window.Materialize.toast(`${student.info.name.dFull} successfully added`, 7500, 'animated bounceInUp green darken-2');
						// Create empty array of invoice objectsto send to invoicesAPI
						let invoiceArr = [];
						// Get current Date for dueDate
						const curDate = new Date()
						// Formats dueDate into "YYYY-MM-DD"
						const dueDate = `${curDate.getFullYear()}-${(curDate.getMonth() + 1).toString().padStart(2, "0")}-${curDate.getDate()}`
						console.log(this.state);
						// If "Purchase Uniform was checked off" auto create Uniform invoice and push to invoiceArr
						if (this.state.uniform === 'true') {
							const uniformInvoiceData = {
								type: 'Uniform',
								amountDue: (this.state.beltRank.match(/^Black/)) ? '150.00' : '50.00',
								dueDate: dueDate,
								isPaid: false,
								note: `AUTO: Purchased ${(this.state.beltRank.match(/^Black/)) ? 'black belt' : 'standard'} uniform when enrolling`,
								parID: this.state.parID,
								parName: this.state.parName,
							}
							invoiceArr.push(invoicesAPI.submitInvoice(uniformInvoiceData));
						}
						// If initFee has value auto create Initation Fee Invoice and push to invoiceArr
						if (this.state.initFee !== '0.00') {
							const initInvoiceData = {
								type: 'Initiation Fee',
								amountDue: this.state.initFee,
								dueDate: dueDate,
								isPaid: false,
								note: 'AUTO: Initiation fee charged when enrolling',
								parID: this.state.parID,
								parName: this.state.parName,
							}
							invoiceArr.push(invoicesAPI.submitInvoice(initInvoiceData));
						}
						// If rateFee has value auto create Renewal Rate Invoice and push to invoiceArr
						if (this.state.rateFee !== '0.00') {
							const rateInvoiceData = {
								type: 'Member Dues',
								amountDue: this.state.rateFee,
								dueDate: dueDate,
								isPaid: false,
								note: 'AUTO: First Member dues fee charged when enrolling',
								parID: this.state.parID,
								parName: this.state.parName,
							}
							invoiceArr.push(invoicesAPI.submitInvoice(rateInvoiceData));
						}
						// Submit all generated invoice promises to invoicesAPI
						Promise.all([invoiceArr])
							// if no error then console.log dataArr and display success toast
							.then((dataArr) => {
								// Button finishes "Working" animation
								$('.submit-btn i').removeClass('animated infinite flip');
								$('.submit-btn a').removeClass('disabled');
								console.log(dataArr)
								window.Materialize.toast(`${dataArr[0].length} Invoice(s) succesfully created`, 7500, 'animated bounceInUp green darken-2');
							})
							// If error console log entire err and display generic error toast
							.catch((err) => {
								// Button finishes "Working" animation
								$('.submit-btn i').removeClass('animated infinite flip');
								$('.submit-btn a').removeClass('disabled');
								console.log(err); window.Materialize.toast(`Error adding new student: Unrecognized Error`, 5000, 'animated bounceInUp red darken-2');
							})
					})
					// Error from submitNewStudent
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
			})
			// Error from submitEnrollment			
			.catch((err) => {
				// Button finishes "Working" animation
				$('.submit-btn i').removeClass('animated infinite flip');
				$('.submit-btn a').removeClass('disabled');
				// If err then console log entire err and display generic error toast
				console.log(err); window.Materialize.toast(`Error adding new student: Unrecognized Error`, 5000, 'animated bounceInUp red darken-2')
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
		return (
			<div className="addstudent-form">
				<form className="col s12" action="#">
					<div className="divider row"></div>
					<div className="parent-info row">
						<h5 className="col s12">Link Parent

						</h5>
						<div className="">
							<div className="input-field col s12 m4">
								<input
									id="parIDtwo" type="text" className="validate"
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
								value={this.state.dob} onChange={this.handleChange} onBlur={this.handleBlur}
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
						<div className="input-field col s12 m3">
							<input
								id="initFee" type="number" className="required validate"
								value={this.state.initFee} onChange={this.handleChange} onBlur={this.handleBlurNumber}
							/>
							<label htmlFor="initFee">One Time Fee ($) *</label>
						</div>
						<div className="input-field col s12 m3">
							<input
								id="rateFee" type="number" className="required validate"
								value={this.state.rateFee} onChange={this.handleChange} onBlur={this.handleBlurNumber}
							/>
							<label htmlFor="rateFee">Renewal Fee ($) *</label>
						</div>
						<div className="input-field col s12 m6">
							<p>
								<label htmlFor="uniform">
									<input id="uniform" type="checkbox" className="filled-in"
										value={this.state.uniform} onChange={this.handleChangeCheckbox}
									/>
									<span>Purchase Uniform</span>
								</label>
							</p>
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
