import React, { Component } from 'react';
import { DashSimpleCard } from './DashSimpleCard';

export class DashQuickInfo extends Component {

	state = {
		parentNum: 0,
		studentNum: 0,
		invoiceNum: 0,
	};

	simpleCardArr = [
		{
			title: 'Parents',
			subtitle: 'number of',
			number: this.state.parentNum,
			bgColor: '#000000',
			color: '#ffffff',
			icon: 'contact'
		},
	]

	render() {
		return (
			<div className="row">
				<div className="col s12">
					{this.simpleCardArr.map((data, i) => {
						return <DashSimpleCard
							key={i}
							title={data.title}
							subtitle={data.subtitle}
							number={data.number}
							bgColor={data.bgColor}
							color={data.color}
							icon={data.icon}
						/>
					})}
				</div>
			</div>
		)
	}
};

export default DashQuickInfo;
