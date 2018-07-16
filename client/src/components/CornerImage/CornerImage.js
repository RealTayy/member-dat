import React, { Component } from 'react';
import './CornerImage.css';

export class CornerImage extends Component {
	render() {
		const getIcon = () => {
			switch (this.props.activeTab) {
				case 'dashboard-tab': return 'dashboard';
				case 'search-tab': return 'search';
				case 'invoice-tab': return 'receipt';
				case 'pointofsale-tab': return 'monetization_on';
				case 'addparent-tab': return 'contacts';
				case 'addstudent-tab': return 'directions_walk';
				default: return 'account_circle';
			}
		}
		return (
			<div className="corner-image">
				<i className="material-icons">{getIcon()}</i>
			</div>
		)
	}
};

export default CornerImage;
