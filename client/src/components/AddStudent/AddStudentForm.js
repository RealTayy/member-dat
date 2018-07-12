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
		beltRank: 'White',
		dojo: '',
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

	handleLink = (e) => {
		if (!this.state.parIDtwo) return window.Materialize.toast('You must enter in a Parent ID', 5000, 'animated bounceInUp');
		$('.link-btn i').addClass('animated infinite flip');
		$('.link-btn a').addClass('disabled');
		parentsAPI.getOneParentByIdTwo(this.state.parIDtwo)
			.then((data) => {
				let parent = data.data[0]
				console.log(parent)
				$('.link-btn i').removeClass('animated infinite flip');
				$('.link-btn a').removeClass('disabled');
				if (data.data.length === 0) return window.Materialize.toast(`No parent found with ID: ${this.state.parIDtwo}`, 5000, 'animated bounceInUp red darken-2')
				else window.Materialize.toast(`${parent.info.name.full} linked`, 5000, 'animated bounceInUp green darken-2');
				this.setState({ parID: parent.id, parName: parent.info.name.full });
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
		if (this.state.parID === '') return window.Materialize.toast(`Please link parent before submitting student`, 5000, 'animated bounceInUp');
		$('.submit-btn i').addClass('animated infinite flip');
		$('.submit-btn a').addClass('disabled');
		let dbObject = {};
		for (let property in this.state) {
			if (this.state[property] !== "") { dbObject[property] = this.state[property] }
		}
		studentsAPI.submitNewStudent(dbObject)
			.then((data) => {
				let student = data.data;
				console.log(data);
				$('.submit-btn i').removeClass('animated infinite flip');
				$('.submit-btn a').removeClass('disabled');
				// window.Materialize.toast(`${student.info.name.full} successfully added`, 5000, 'animated bounceInUp green darken-2');
				window.Materialize.toast(`${student.first} successfully added`, 5000, 'animated bounceInUp green darken-2');
			})
			.catch((err) => {
				console.log(err)
				$('.submit-btn i').removeClass('animated infinite flip');
				$('.submit-btn a').removeClass('disabled');
				if (err.response) { console.log(err.response); window.Materialize.toast(`Error adding new student: ${err.response.data.name}`, 5000, 'animated bounceInUp red darken-2'); }
				else console.log(err); window.Materialize.toast(`Error adding new student: Unrecognized Error`, 5000, 'animated bounceInUp red darken-2');
			});

	}

	render() {
		// <div className="divider row"></div>
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
								id="dob" type="date" className="datepicker validate"
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
								id="rate" type="number" className="validate"
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
