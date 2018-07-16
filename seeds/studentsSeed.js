// This file empties students collection and insrts the studentsSeed
const studentsController = require('../controllers/studentsController');
const ObjectId = require('mongoose').Types.ObjectId;

const studentsSeed = [
	{
		idtwo: 'S000000',
		isActive: true,
		info: {
			name: {
				first: 'Simba',
				last: 'Mai',
			},
			dob: {
				full: '2010-07-21'
			},
			startDate: {
				full: '2018-05-20'
			},
			contact: {
				phone: ''
			},
			school: 'Sugar Land Elementary'
		},
		enrollment: new ObjectId('012345678901234567893000'),
		parent: new ObjectId('012345678901234567891000')
	}
]

module.exports = studentsController.seed(studentsSeed)
	.then((students) => console.log(`${students.length} document(s) inserted to students!`))
	.catch((err) => console.log('Error when running seeds for students'));