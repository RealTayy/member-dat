import axios from 'axios';

export default {
	submitNewStudent: function (studentData) {
		console.log(studentData)
		let formattedData = {			
			isActive: true,
			first: studentData.first,
			parentid: studentData.parID
		};
		return axios.post('api/students', formattedData)
	}
}