import React, { Component } from 'react';
import './AddParent.css';

export class Addnew extends Component {
	state = {
		firstname: '',
		lastname: '',
	}

	handleChange(e) {

	}

	render() {
		return (
			<div className="row">
				<h4 className="addparent-header">Add New Parent</h4>				
				<div className="addparent-subheader">Required field are indicated with a *</div>
				<div className="addparent-container col m12 l10 xl8">
					Form goes here
				</div>
			</div >
		)
	}
};

export default Addnew;
