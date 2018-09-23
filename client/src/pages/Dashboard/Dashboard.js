import React, { Component } from 'react';
import {DashQuickInfo, DashNewsFeed} from '../../components/Dashboard';

export class Dashboard extends Component {
	state = {
		
	};	
	
	render() {
		return (
			<div className="row">
				<DashQuickInfo/>
				<DashNewsFeed/>
			</div>
		)
	}
};

export default Dashboard;
