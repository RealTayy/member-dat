// This file empties parentsController and inserts the parentsSeeds into the collection
const parentsController = require('../controllers/parentsController');
const ObjectId = require('mongoose').Types.ObjectId;

const parentsSeed = [
	{		
		_id: new ObjectId('123456789123456789123450'),
		idtwo: 'P000000',
		isActive: true,
		info: {
			name: {
				first: 'The',
				last: 'Mai'
			},
			contact: {
				phone: '123-123-1234',
				email: 'themai@memberdat.com'
			},
			dob: {
				full: '1992-07-21'
			},
			startDate: {
				full: '2018-05-20'
			},
			address: {
				line1: '123 Real Street',
				line2: '',
				city: 'Sugar Land',
				state: 'TX',
				zip: '77498'
			},
			emergencyContact: {
				name: {
					first: 'Thanh',
					last: 'Mai',
				},
				contact: {
					phone: '281-321-4321',
					email: 'thanhmai@memberdat.com',
				},
				relation: 'Sister',
			},
			heardBy: 'Email',
			referBy: 'Andrew Nguyen',
		}
	},
	{		
		_id: new ObjectId('123456789123456789123451'),
		idtwo: 'P000001',
		isActive: true,
		info: {
			name: {
				first: 'Andrew',
				last: 'Nguyen'
			},
			contact: {
				phone: '234-234-2345',
				email: 'andrewnguyen@realemail.com'
			},
			dob: {
				full: '1991-05-11'
			},
			startDate: {
				full: '2018-02-07'
			},
			address: {
				line1: '456 Imagination Lane',
				line2: 'APT 42',
				city: 'Pearland',
				state: 'TX',
				zip: '77477'
			},
			emergencyContact: {
				name: {
					first: 'Michael',
					last: 'Tanh',
				},
				contact: {
					phone: '432-432-5432',
					email: 'michaeltang@realemail.com',
				},
				relation: 'Friend',
			},
			heardBy: '',
			referBy: '',
		}
	},
	{		
		_id: new ObjectId('123456789123456789123452'),
		idtwo: 'P000002',
		isActive: true,
		info: {
			name: {
				first: 'Michelle',
				last: 'Bury'
			},
			contact: {
				phone: '345-345-3456',
				email: 'michellebury@trilogy.com'
			},
			dob: {
				full: '1990-02-18'
			},
			startDate: {
				full: '2018-04-24'
			},
			address: {
				line1: '789 Banana Ave',
				line2: '',
				city: 'Houston',
				state: 'TX',
				zip: '77401'
			},
			emergencyContact: {
				name: {
					first: 'Esmerlda',
					last: 'Garcia',
				},
				contact: {
					phone: '543-543-6543',
					email: 'esmerldagarcia@trilogy.com',
				},
				relation: 'Career Director',
			},
			heardBy: 'Web Search',
			referBy: '',
		}
	},
	{		
		_id: new ObjectId('123456789123456789123453'),
		idtwo: 'P000003',
		isActive: true,
		info: {
			name: {
				first: 'chiwetel',
				last: 'ejiofor'
			},
			contact: {
				phone: '456-456-4567',
				email: 'blackpanther@wakanda.com'
			},
			dob: {
				full: '1977-07-10'
			},
			startDate: {
				full: '2018-04-24'
			},
			address: {
				line1: '42 T\'Challa Rd',
				line2: '',
				city: 'Wakanda',
				state: 'AF',
				zip: '55055'
			},
			emergencyContact: {
				name: {
					first: 'T\'Chaka',
					last: 'Shuri',
				},
				contact: {
					phone: '777-777-7777',
					email: 'ripinpeace@rip.com',
				},
				relation: 'Former King',
			},
			heardBy: 'Web Search',
			referBy: '',
		}
	},
]
parentsController.seed(parentsSeed)
	.then((parents) => console.log(`${parents.length} document(s) inserted to parents!`))
	.catch((err) => console.log('Error when running seeds for parents'));