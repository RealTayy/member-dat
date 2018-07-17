import React, { Component } from 'react';
import { StudentDetails, ParentDetails } from '.';
import './TabDetails.css';

export class TabDetails extends Component {
	render() {
		const tabs = this.props.tabs
		return (
			<div className="detail-holder">
				{tabs.map((tab, i) => {
					return (tab.idtwo.charAt(0) === "P") ?
						<ParentDetails
							key={i}
							data={tab}
						/>
						:
						<StudentDetails
							key={i}
							data={tab}
						/>
				})}
			</div>
		)
	}
};

export default TabDetails;
