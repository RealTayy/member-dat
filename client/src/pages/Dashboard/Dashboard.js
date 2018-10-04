import React, { Component } from 'react';
import { DashQuickInfo, DashNewsFeed } from '../../components/Dashboard';

export class Dashboard extends Component {

	render() {
		return (
			<div className="row">
				<div className="col s12 m4">
					<DashQuickInfo />
				</div>
				<div className="col s12 m8">
					<DashNewsFeed />
				</div>
			</div>
		)
	}
};

export default Dashboard;
