import React, { Component } from 'react';

export class ParentStudentRow extends Component {
	handleClickStudent = (e) => {
		this.props.pushTab(this.props.data);
	}

	handleClickParent = (e) => {
		this.props.pushTab(this.props.data.parent);
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
					<div className="status-col col s4">
						{getActiveDiv(data.isActive)}
						{getBeltDiv(data.enrollment.beltRank)}
					</div>
					<div className="info-col col s8">
						<div className="name-info"><i className="material-icons">person</i> {data.info.name.dFull}</div>
						<div className="id-info"><i className="material-icons">featured_play_list</i> {data.idtwo}</div>
					</div>
				</div>

				<div className="button-col col left">
					<div className="right-align">
						<a className="waves-effect waves-light btn-large btn-square open-student" data-student={data} onClick={this.handleClickStudent}><i className="material-icons">directions_walk</i></a>						
					</div>
				</div>
			</div>
		)
	}
};

export default ParentStudentRow;
