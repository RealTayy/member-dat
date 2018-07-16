import React, { Component } from 'react';
import './AddStudent.css';
import { AddStudentForm } from '../../components/AddStudent/AddStudentForm';

export class AddStudent extends Component {
	render() {
		return (
			<div className="row">
				<div className="addstudent-container col m12 l10 xl8 push-l1 push-xl2" >
					<div className="z-depth-2 trans-card">
						<h4 className="addstudent-header center-align">Add New Student</h4>
						<div className="addstudent-subheader center-align">Required field are indicated with a *</div>
						<AddStudentForm />
						<div>&nbsp;</div>
					</div>
				</div>
			</div >
		)
	}
};

export default AddStudent;
