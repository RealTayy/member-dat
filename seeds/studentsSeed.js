// This file empties students collection and insrts the studentsSeed
const studentsController = require('../controllers/studentsController');
const ObjectId = require('mongoose').Types.ObjectId;

const studentsSeed = [
	{
		_id: new ObjectId('012345678901234567892000'),
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
	},
	{
		_id: new ObjectId('012345678901234567892001'),
		idtwo: 'S000001',
		isActive: false,
		info: {
			name: {
				first: 'Nhu Thao',
				last: 'Ta',
			},
			dob: {
				full: '1992-07-21'
			},
			startDate: {
				full: '2018-01-07'
			},
			contact: {
				phone: '281-444-4455'
			},
			school: 'Kempner High School'
		},
		enrollment: new ObjectId('012345678901234567893001'),
		parent: new ObjectId('012345678901234567891001')
	},
	{
		_id: new ObjectId('012345678901234567892002'),
		idtwo: 'S000002',
		isActive: true,
		info: {
			name: {
				first: 'Coco',
				last: 'Nguyen',
			},
			dob: {
				full: '2000-02-11'
			},
			startDate: {
				full: '2018-01-07'
			},
			contact: {
				phone: ''
			},
			school: 'Home Schooled'
		},
		enrollment: new ObjectId('012345678901234567893002'),
		parent: new ObjectId('012345678901234567891001')
	},
	{
		_id: new ObjectId('012345678901234567892003'),
		idtwo: 'S000003',
		isActive: false,
		info: {
			name: {
				first: 'Dennis',
				last: 'Reynolds',
			},
			dob: {
				full: '1997-12-14'
			},
			startDate: {
				full: '2018-05-02'
			},
			contact: {
				phone: '486-126-5124'
			},
			school: 'St. Paddy Private'
		},
		enrollment: new ObjectId('012345678901234567893003'),
		parent: new ObjectId('012345678901234567891004')
	},
	{
		_id: new ObjectId('012345678901234567892004'),
		idtwo: 'S000004',
		isActive: false,
		info: {
			name: {
				first: 'Dee',
				last: 'Reynolds',
			},
			dob: {
				full: '1997-12-14'
			},
			startDate: {
				full: '2018-05-02'
			},
			contact: {
				phone: '164-987-6871'
			},
			school: 'St. Paddy Private'
		},
		enrollment: new ObjectId('012345678901234567893004'),
		parent: new ObjectId('012345678901234567891004')
	},
]

module.exports = studentsController.seed(studentsSeed)
	.then((students) => console.log(`${students.length} document(s) inserted to students`))
	.catch((err) => console.log('Error when running seeds for students'));