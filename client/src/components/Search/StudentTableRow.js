import React, { Component } from 'react';
import { parentsAPI } from '../../utils/api';

export class StudentTableRow extends Component {
	handleClickStudent = (e) => {
		this.props.pushTab(this.props.data);
	}

	handleClickParent = (e) => {
		parentsAPI.getOneParentByIdTwo(this.props.data.parent.idtwo)
			.then((data) => { console.log(data); this.props.pushTab(data.data[0]); })
			.catch((err) => { console.log(err); window.Materialize.toast(`Error looking up Parent`, 5000, 'animated bounceInUp red darken-2') });
	}

	render() {
		const data = this.props.data;

		// TODO make this into react component
		const getActiveDiv = (isActive) => {
			if (isActive) return <div className="active-status active">Active</div>
			else return <div className="active-status inactive">Inactive</div>
		}

		const getBeltDiv = (beltRank) => {
			// Makes "Orange Stripe" -> "Orange S"
			beltRank = (beltRank.split(' ')[1] !== undefined) ? `${beltRank.split(' ')[0]} ${beltRank.split(' ')[1].charAt(0)}` : beltRank
			// OKAY ITS UGLY BUT IT WORKS OK? OK!
			return <div className={`belt-status b-${beltRank.toLowerCase().split(' ')[0]}`}>{beltRank}</div>
		}

		return (
			<div className="row table-row">
				<div className="data-col left">
					<div className="status-col col s2">
						{getActiveDiv(data.isActive)}
						{getBeltDiv(data.enrollment.beltRank)}
					</div>
					<div className="info-col col s4">
						<div className="name-info"><i className="material-icons">person</i> {data.info.name.dFull}</div>
						<div className="id-info"><i className="material-icons">featured_play_list</i> {data.idtwo}</div>
					</div>
					<div className="contact-col col s6">
						<div className="parent-contact"><i className="material-icons">contacts</i> {data.parent.info.name.dFull}</div>
						<div className="dojo-contact"><i className="material-icons">home</i> {data.enrollment.dojo} </div>
					</div>
				</div>

				<div className="button-col col left">
					<div className="right-align">
						<a className="waves-effect waves-light btn-large btn-square open-student" data-student={data} onClick={this.handleClickStudent}><i className="material-icons">directions_walk</i></a>
						<a className="waves-effect waves-light btn-large btn-square open-parent" data-parent={data.parent} onClick={this.handleClickParent}><i className="material-icons">contacts</i></a>
					</div>
				</div>
			</div>
		)
	}
};

export default StudentTableRow;
