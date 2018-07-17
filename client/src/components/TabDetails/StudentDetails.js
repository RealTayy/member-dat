import React, { Component } from 'react';
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
				Student {data.info.name.dFull}
			</div>
		)
	}
};

export default StudentDetails;
