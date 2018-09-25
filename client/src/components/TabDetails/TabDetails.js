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
							pushTab={this.props.pushTab}
							setActiveTab={this.props.setActiveTab}
						/>
						:
						<StudentDetails
							key={i}
							data={tab}
							pushTab={this.props.pushTab}
						/>
				})}
			</div>
		)
	}
};

export default TabDetails;
