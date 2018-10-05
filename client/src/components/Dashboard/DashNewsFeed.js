import React, { Component } from 'react';

export class DashNewsFeed extends Component {

	state = {
		parentNum: 0,
		studentNum: 0,
		invoiceNum: 0,
	};

	render() {
		return (
			<div className="row">
				<div className="col s12">
					<div className="dash-news-feed-col col s12 trans-card z-depth-2">
						DashNewsFeed
					</div>
				</div>
			</div>
		)
	}
};

export default DashNewsFeed;
