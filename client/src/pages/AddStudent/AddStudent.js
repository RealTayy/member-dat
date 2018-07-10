import React, { Component } from 'react';
import './AddStudent.css'

export class AddStudent extends Component {	
	render() {
		return (
			<div className="row">
				<div className="addstudent-container col m12 l10 xl8" >
					<div className="z-depth-2">
						<h4 className="addstudent-header center-align">Add New Student</h4>
						<div className="addstudent-subheader center-align">Required field are indicated with a *</div>						

						<div>&nbsp;</div>
					</div>
				</div>
			</div >
		)
	}
};

export default AddStudent;
