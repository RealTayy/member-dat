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
	{
		_id: new ObjectId('012345678901234567892005'),
		idtwo: 'S000005',
		isActive: true,
		info: {
			name: {
				first: 'Letitia',
				last: 'Wright',
			},
			dob: {
				full: '1994-02-19'
			},
			startDate: {
				full: '2018-04-24'
			},
			contact: {
				phone: '713-927-6475'
			},
			school: 'Home Schooled'
		},
		enrollment: new ObjectId('012345678901234567893005'),
		parent: new ObjectId('012345678901234567891003'),
	},
	{
		_id: new ObjectId('012345678901234567892006'),
		idtwo: 'S000006',
		isActive: true,
		info: {
			name: {
				first: 'Camden',
				last: 'Kirkland',
			},
			dob: {
				full: '1991-07-03'
			},
			startDate: {
				full: '2018-05-17'
			},
			contact: {
				phone: '281-927-6475'
			},
			school: 'UT Coding Bootcamp'
		},
		enrollment: new ObjectId('012345678901234567893006'),
		parent: new ObjectId('012345678901234567891002'),
	},
	{
		_id: new ObjectId('012345678901234567892007'),
		idtwo: 'S000007',
		isActive: true,
		info: {
			name: {
				first: 'Ian',
				last: 'Mitchell',
			},
			dob: {
				full: '1994-02-13'
			},
			startDate: {
				full: '2018-05-17'
			},
			contact: {
				phone: '713-245-5472'
			},
			school: 'UT Coding Bootcamp'
		},
		enrollment: new ObjectId('012345678901234567893007'),
		parent: new ObjectId('012345678901234567891002'),
	},
	{
		_id: new ObjectId('012345678901234567892008'),
		idtwo: 'S000008',
		isActive: true,
		info: {
			name: {
				first: 'Brandon',
				last: 'Gatlin',
			},
			dob: {
				full: '1987-12-26'
			},
			startDate: {
				full: '2018-05-17'
			},
			contact: {
				phone: '281-785-9824'
			},
			school: 'UT Coding Bootcamp'
		},
		enrollment: new ObjectId('012345678901234567893008'),
		parent: new ObjectId('012345678901234567891002'),
	},
	{
		_id: new ObjectId('012345678901234567892009'),
		idtwo: 'S000009',
		isActive: false,
		info: {
			name: {
				first: 'Mariam',
				last: 'Sallam',
			},
			dob: {
				full: '1992-10-19'
			},
			startDate: {
				full: '2018-05-17'
			},
			contact: {
				phone: '281-785-9824'
			},
			school: 'UT Coding Bootcamp'
		},
		enrollment: new ObjectId('012345678901234567893009'),
		parent: new ObjectId('012345678901234567891002'),
	},
]

module.exports = studentsController.seed(studentsSeed)
	.then((students) => console.log(`${students.length} document(s) inserted to students`))
	.catch((err) => console.log('Error when running seeds for students'));