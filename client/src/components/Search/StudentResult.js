import React, { Component } from 'react';

export class StudentResult extends Component {
	render() {
		console.log(this.props.results)
		return (
			<table className="student-result striped highlight">
				StudentResult
			</table>
		)
	}
};

export default StudentResult;
