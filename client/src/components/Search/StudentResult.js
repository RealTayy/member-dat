import React, { Component } from 'react';
import './StudentResult.css'

export class StudentResult extends Component {
	render() {
		console.log(this.props.results)
		return (
			<div className="student-result result-table">

				<div className="row table-row">
					<div className="data-col left">
						<div className="status-col col s2">
							<div className="active-status active">active</div>
							<div className="belt-status b-white">white</div>
						</div>
						<div className="info-col col s4">
							<div className="name-info"><i className="material-icons">person</i> Nhu Thao Ta</div>
							<div className="id-info"><i className="material-icons">featured_play_list</i> S000001</div>
						</div>
						<div className="contact-col col s6">
							<div className="parent-contact"><i className="material-icons">contacts</i> Andrew Nguyen</div>
							<div className="dojo-contact"><i className="material-icons">home</i> Pearland (Month to Month)</div>
						</div>
					</div>

					<div className="button-col col left">
						<div className="right-align">
						<a className="waves-effect waves-light btn-large btn-square open-student"><i className="material-icons">directions_walk</i></a>
							<a className="waves-effect waves-light btn-large btn-square open-parent"><i className="material-icons">contacts</i></a>
						</div>
					</div>
				</div>				

				<div className="row table-row">
					<div className="data-col left">
						<div className="status-col col s2">
							<div className="active-status inactive">inactive</div>
							<div className="belt-status b-orange">orange s</div>
						</div>
						<div className="info-col col s4">
							<div className="name-info"><i className="material-icons">person</i> Nhu Thao Ta</div>
							<div className="id-info"><i className="material-icons">featured_play_list</i> S000001</div>
						</div>
						<div className="contact-col col s6">
							<div className="parent-contact"><i className="material-icons">contacts</i> Andrew Nguyen</div>
							<div className="dojo-contact"><i className="material-icons">home</i> Pearland (Month to Month)</div>
						</div>
					</div>

					<div className="button-col col left">
						<div className="right-align">
						<a className="waves-effect waves-light btn-large btn-square open-student"><i className="material-icons">directions_walk</i></a>
							<a className="waves-effect waves-light btn-large btn-square open-parent"><i className="material-icons">contacts</i></a>
						</div>
					</div>
				</div>	

				<div className="row table-row">
					<div className="data-col left">
						<div className="status-col col s2">
							<div className="active-status active">active</div>
							<div className="belt-status b-black">black 9</div>
						</div>
						<div className="info-col col s4">
							<div className="name-info"><i className="material-icons">person</i> Nhu Thao Ta</div>
							<div className="id-info"><i className="material-icons">featured_play_list</i> S000001</div>
						</div>
						<div className="contact-col col s6">
							<div className="parent-contact"><i className="material-icons">contacts</i> Andrew Nguyen</div>
							<div className="dojo-contact"><i className="material-icons">home</i> Pearland (Month to Month)</div>
						</div>
					</div>

					<div className="button-col col left">
						<div className="right-align">
						<a className="waves-effect waves-light btn-large btn-square open-student"><i className="material-icons">directions_walk</i></a>
							<a className="waves-effect waves-light btn-large btn-square open-parent"><i className="material-icons">contacts</i></a>
						</div>
					</div>
				</div>	

			</div>
		)
	}
};

export default StudentResult;
