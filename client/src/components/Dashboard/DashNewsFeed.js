import React, { Component } from 'react';
import { DashNewsCard } from './DashNewsCard';

export class DashNewsFeed extends Component {

	state = {
		parentNum: 0,
		studentNum: 0,
		invoiceNum: 0,
	};

	render() {
		return (
			<div className="row">
				<div className="dash-news-feed-col col s12">

					<DashNewsCard />

				</div>
			</div>
		)
	}
};

export default DashNewsFeed;
