import React, { Component } from 'react';
import './AddParent.css';
import { AddParentForm } from '../../components/AddParent';

export class Addnew extends Component {
	render() {
		return (
			<div className="row">
				<h4 className="addparent-header">Add New Parent</h4>
				<div className="addparent-subheader">Required field are indicated with a *</div>
				<div className="addparent-container col m12 l10 xl8">
					<AddParentForm />
				</div>
			</div >
		)
	}
};

export default Addnew;
