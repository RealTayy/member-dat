import React, { Component } from 'react';
import { DashSimpleCard } from './DashSimpleCard';
import { parentsAPI, studentsAPI, invoicesAPI } from '../../utils/api';

export class DashQuickInfo extends Component {
	state = {
		parentNum: 15,
		studentNum: 11,
		invoiceNum: 12,
	};

	componentDidMount = () => {
		parentsAPI.getSomeParents({ 'isActive': true })
			.then((parents) => { this.setState({ parentNum: parents.data.length }) })
			.catch((err) => { console.log(err); })
		studentsAPI.getSomeStudents({ 'isActive': true })
			.then((students) => { this.setState({ studentNum: students.data.length }) })
			.catch((err) => { console.log(err); })
			
	}


	render() {
		const simpleCardArr = [
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
		return (
			<div className="row" >
				<div className="col s12">
					{simpleCardArr.map((data, i) => {
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
