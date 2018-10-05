import React, { Component } from 'react';
import { DashSimpleCard } from './DashSimpleCard';

export class DashQuickInfo extends Component {

	state = {
		parentNum: 15,
		studentNum: 11,
		invoiceNum: 12,
	};

	simpleCardArr = [
		{
			header: 'PARENTS',
			preheader: 'ACTIVE',
			number: this.state.parentNum,
			bgColor: 'blue',
			icon: 'contacts'
		},
		{
			header: 'STUDENTS',
			preheader: 'ACTIVE',
			number: this.state.studentNum,
			bgColor: 'green',
			icon: 'directions_walk'
		},
		{
			header: 'INVOICES',
			preheader: 'UNPAID',
			number: this.state.invoiceNum,
			bgColor: 'red',
			icon: 'receipt'
		},
	]

	render() {
		return (
			<div className="row">
				<div className="col s12">
					{this.simpleCardArr.map((data, i) => {
						return <DashSimpleCard
							key={i}
							header={data.header}
							preheader={data.preheader}
							number={data.number}
							bgColor={data.bgColor}
							icon={data.icon}
						/>
					})}
				</div>
			</div>
		)
	}
};

export default DashQuickInfo;
