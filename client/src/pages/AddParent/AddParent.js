import React, { Component } from 'react';
import './AddParent.css';
import { AddParentForm } from '../../components/AddParent';

export class Addnew extends Component {
	render() {
		return (
			<div className="row">
				<div className="addparent-container col m12 l10 xl8 push-l1 push-xl2" >
					<div className="z-depth-2">
						<h4 className="addparent-header center-align">Add New Parent</h4>
						<div className="addparent-subheader center-align">Required field are indicated with a *</div>
						<AddParentForm />
						<div>&nbsp;</div>
					</div>
				</div>
			</div >
		)
	}
};

export default Addnew;
