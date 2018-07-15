import React, { Component } from 'react';
import $ from 'jquery';

export class PointofsaleForm extends Component {
	state = {
		parID: '',
		parName: 'Please Link Parent ID',
		type: '',
		amountDue: '',
		dueDate: '',
		note: '',
	};

	typeArr = [
		'Member Dues',
		'Uniform',
		'Equipment',
		'Field Trip',
		'Special Event',
		'Other'
	]

	componentDidMount() {
		$('#type').material_select();
		$('#type').on('change', this.handleChangeDropdown);
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.parName) this.setState(nextProps);
	}
	handleChange = (e) => { this.setState({ [e.target.id]: e.target.value }); }

	handleChangeDropdown = (e) => {
		this.setState({ [e.target.id]: e.target.value });
		if (e.target.value) {
			$(`#${e.target.id}`).parent().children('input').addClass('valid');
			$(`#${e.target.id}`).parent().children('input').removeClass('invalid');
		}
		else $(`#${e.target.id}`).parent().children('input').removeClass('valid');
	}

	handleSubmit = () => {
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

		if (!this.state.parID) {
			$('#parIDtwo').addClass('invalid');
			$('#parIDtwo').parent().addClass('animated flash');
			$('#parIDtwo').parent().one(animationEnd, () => $('#parIDtwo').parent().removeClass('animated flash'));
			return window.Materialize.toast('Please link parent before creating invoice', 5000, 'animated bounceInUp')
		};

	}

	handleBlurNumber = (e) => {
		let rate = parseFloat(e.target.value).toFixed(2);
		this.setState({ [e.target.id]: rate });
		setTimeout(() => { console.log(this.state) }, 1)
	}

	handleBlur = (e) => {
		if (e.target.value !== ''); $(`#${e.target.id}`).removeClass('invalid'); $(`#${e.target.id}`).addClass('valid');
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
		const parName = this.state.parName;
		return (
			<div className="pointofsale col s8">
				<div className="col s12 z-depth-2">
					<h4 className="pointofsale-header">
						Point of Sale
						<span> - {parName}</span>
					</h4>
					<div className="divider row"></div>
					<form>
						<div className="input-field col s6">
							<select
								id="type" type="text" className="required validate"
								value={this.state.type} onChange={this.handleChange}>
								<option key="0" value="" disabled>Select Program Length</option>
								{this.typeArr.map((type, i) => {
									return <option key={i + 1} value={type}>{type}</option>
								})}
							</select>
							<label htmlFor="type">Type of Invoice*</label>
						</div>
						<div className="input-field col s3">
							<input
								id="amountDue" type="number" className="required validate"
								value={this.state.amountDue} onChange={this.handleChange} onBlur={this.handleBlurNumber}
							/>
							<label htmlFor="amountDue">Amount Due ($) *</label>
						</div>
						<div className="input-field col s3">
							<input
								id="dueDate" type="date" className="required datepicker validate"
								value={this.state.dueDate} onChange={this.handleChange} onBlur={this.handleBlur}
							/>
							<label htmlFor="dueDate">Due Date *</label>
						</div>
						<div className="input-field col s12">
							<textarea
								id="note" className="materialize-textarea validate"
								value={this.state.note} onChange={this.handleChange}
							></textarea>
							<label htmlFor="note">Note</label>
						</div>
						<div className="submit-btn center-align row">
							<a className="waves-effect waves-light btn-large" onClick={this.handleSubmit}>Create Invoice<i className="material-icons right">attach_money</i></a>
						</div>
					</form>
				</div>
			</div>
		)
	};
};

export default PointofsaleForm;
