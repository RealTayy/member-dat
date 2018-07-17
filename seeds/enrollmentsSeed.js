// This file empties enrollments collection and inserts the enrollmentsSeed
const enrollmentsController = require('../controllers/enrollmentsController.js');
const ObjectId = require('mongoose').Types.ObjectId;

// dojo |Pearland|Cypress|
// beltRank |W|Yel|Ora|Gre|Blu|Bro|Red|Black Candidate|Bla 1-9|
// type |Black Belt|Standard|Trial|
// length |3 Years|1 Year|6 Months|1 Month|6 Weeks|2 Weeks|

const enrollmentsSeed = [
	{
		_id: new ObjectId('012345678901234567893000'),
		dojo: 'Cypress',
		beltRank: 'Black Candidate',
		type: 'Black Belt',
		initFee: 3000,
		rateFee: 0,
		length: '3 Years',
		startDate: '2018-05-20',
		expireDate: '2021-05-20',
		willRenew: false
	},
	{
		_id: new ObjectId('012345678901234567893001'),
		dojo: 'Pearland',
		beltRank: 'Orange Stripe',
		type: 'Standard',
		initFee: 0,
		rateFee: 650,
		length: '6 Months',
		startDate: '2018-01-07',
		expireDate: '2018-07-07',
		willRenew: false
	},
	{
		_id: new ObjectId('012345678901234567893002'),
		dojo: 'Pearland',
		beltRank: 'Black 2',
		type: 'Black Belt',
		initFee: 0,
		rateFee: 650,
		length: '6 Months',
		startDate: '2018-01-07',
		expireDate: '2019-01-07',
		willRenew: true
	},
	{
		_id: new ObjectId('012345678901234567893003'),
		dojo: 'Pearland',
		beltRank: 'White',
		type: 'Trial',
		initFee: 40,
		rateFee: 0,
		length: '2 Weeks',
		startDate: '2018-05-02',
		expireDate: '2018-05-23',
		willRenew: false
	},
	{
		_id: new ObjectId('012345678901234567893004'),
		dojo: 'Pearland',
		beltRank: 'Yellow',
		type: 'Trial',
		initFee: 40,
		rateFee: 0,
		length: '2 Weeks',
		startDate: '2018-05-02',
		expireDate: '2018-05-23',
		willRenew: false
	},
	{
		_id: new ObjectId('012345678901234567893005'),
		dojo: 'Pearland',
		beltRank: 'Black 6',
		type: 'Black Belt',
		initFee: 0,
		rateFee: 1200,
		length: '1 Year',
		startDate: '2018-05-24',
		expireDate: '2019-05-24',
		willRenew: true,
	},
	{
		_id: new ObjectId('012345678901234567893006'),
		dojo: 'Cypress',
		beltRank: 'Red Stripe',
		type: 'Standard',
		initFee: 0,
		rateFee: 650,
		length: '6 Months',
		startDate: '2018-05-17',
		expireDate: '2018-11-17',
		willRenew: true,
	},
	{
		_id: new ObjectId('012345678901234567893007'),
		dojo: 'Cypress',
		beltRank: 'Blue Stripe',
		type: 'Standard',
		initFee: 0,
		rateFee: 650,
		length: '6 Months',
		startDate: '2018-05-17',
		expireDate: '2018-11-17',
		willRenew: true,
	},
	{
		_id: new ObjectId('012345678901234567893008'),
		dojo: 'Cypress',
		beltRank: 'Brown',
		type: 'Standard',
		initFee: 0,
		rateFee: 650,
		length: '6 Months',
		startDate: '2018-05-17',
		expireDate: '2018-11-17',
		willRenew: true,
	},
	{
		_id: new ObjectId('012345678901234567893009'),
		dojo: 'Cypress',
		beltRank: 'Orange Stripe',
		type: 'Standard',
		initFee: 0,
		rateFee: 120,
		length: '1 Months',
		startDate: '2018-05-17',
		expireDate: '2018-06-17',
		willRenew: false,
	},
]

module.exports = enrollmentsController.seed(enrollmentsSeed)
	.then((enrollments) => console.log(`${enrollments.length} document(s) inserted to enrollments`))
	.catch((err) => console.log('Error when running seeds for enrollments'));