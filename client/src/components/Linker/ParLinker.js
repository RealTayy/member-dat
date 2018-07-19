import React, { Component } from 'react';
import $ from 'jquery';
import './ParLinker.css';
import { parentsAPI } from '../../utils/api/index';

export class ParLinker extends Component {
	state = {
		parIDtwo: '',
		parName: 'Please link Parent ID',
		parPhone: 'Please link Parent ID',
		parEmail: 'Please link Parent ID',
	}

	handleChange = (e) => {
		this.setState({ [e.target.id]: e.target.value });
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
				$('#parPhone').addClass('valid');
				$('#parEmail').addClass('valid');
				this.setState({ parID: parent.id, parName: parent.info.name.dFull, parPhone: parent.info.contact.phone, parEmail: parent.info.contact.email });
				this.props.setParID(parent.id)
				this.props.setParName(parent.info.name.dFull)
				if (this.props.setInvoices) this.props.setInvoices(parent.invoices);
			})
			.catch((err) => {
				console.log(err);
				$('.link-btn i').removeClass('animated infinite flip');
				$('.link-btn a').removeClass('disabled');
				window.Materialize.toast(`Error searching ParentID: ${err.response.data.name} `, 5000, 'animated bounceInUp red darken-2');
			});
	}

	render() {
		return (
			<div className="parlinker col s12 m4 row">
				<div className="col s12 z-depth-2">
					<h4 className="parlinker-header center-align">Link Parent</h4>
					<div className="divider row"></div>
					<form className="col s12">
						<div id="parlinker-form" className="row parlinker-form">
							<div className="input-field col s12">
								<i className="material-icons prefix">featured_play_list</i>
								<input
									id="parIDtwo" type="text" className="validate required"
									value={this.state.parIDtwo} onChange={this.handleChange}
								/>
								<label htmlFor="parIDtwo">Parent ID</label>
							</div>
							<div className="input-field col s12">
								<i className="material-icons prefix">person</i>
								<input
									id="parName" type="text" className="validate" disabled
									value={this.state.parName} onChange={this.handleChange}
								/>
								<label htmlFor="parName"></label>
							</div>
							<div className="input-field col s12">
								<i className="material-icons prefix">phone</i>
								<input
									id="parPhone" type="text" className="validate" disabled
									value={this.state.parPhone} onChange={this.handleChange}
								/>
								<label htmlFor="parPhone"></label>
							</div>
							<div className="input-field col s12">
								<i className="material-icons prefix">email</i>
								<input
									id="parEmail" type="text" className="validate" disabled
									value={this.state.parEmail} onChange={this.handleChange}
								/>
								<label htmlFor="parEmail"></label>
							</div>
							<div className="col s12">
								<div className="link-btn center-align">
									<a className="waves-effect waves-light btn-large" onClick={this.handleLink}>Link<i className="material-icons right">insert_link</i></a>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		)
	}
};

export default ParLinker;
