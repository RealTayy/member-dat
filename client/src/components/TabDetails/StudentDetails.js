import React, { Component } from 'react';

export class StudentDetails extends Component {
	render() {
		const data = this.props.data;
		return (
			<div id={`${data.idtwo}`} className="detail-row row">
				Student {data.info.name.dFull}
			</div>
		)
	}
};

export default StudentDetails;
