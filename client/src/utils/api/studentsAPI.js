import axios from 'axios';
// create enrollment first
// then create student
// then create invoices
export default {
	getSomeStudents: function (query) {
		return axios.get('/api/students/', { params: query });
	},
	getOneStudentByIdTwo: function (id) {
		return axios.get(`/api/students/idtwo/${id}`);
	},
	submitNewStudent: function (studentData) {
		// Get current date for startDate
		let curDate = new Date()
		// Formats Date object into "YYYY-MM-DD"
		studentData.startDate = `${curDate.getFullYear()}-${(curDate.getMonth() + 1).toString().padStart(2, "0")}-${curDate.getDate()}`
		// formats recieved data to match database
		let formattedData = {
			isActive: true,
			info: {
				name: {
					first: studentData.first,
					last: studentData.last,
				},
				dob: {
					full: studentData.dob,
				},
				startDate: {
					full: studentData.startDate,
				},
				contact: {
					phone: studentData.phone,
				},
				school: studentData.school,
			},
			enrollment: studentData.enrollment,
			parent: studentData.parID
		};
		return axios.post('api/students', formattedData);
	},
	updateStudent: function (studentData) {
		let formattedData = {
			info: {
				name: {
					first: studentData.first,
					last: studentData.last,
				},
				dob: {
					full: studentData.dob,
				},
				startDate: {
					full: studentData.startDate,
				},
				contact: {
					phone: studentData.phone,
				},
				school: studentData.school,
			},
		};		
		return axios.put(`api/students/idtwo/${studentData.idtwo}`, formattedData);
	}
}