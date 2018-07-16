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
		dojo: 'Pearland',
		beltRank: 'Yellow Stripe',
		type: 'Black Belt',
		initFee: 3000,
		rateFee: 0,
		length: '3 Years',
		startDate: '2018-05-20',
		expireDate: '2021-05-20',
		willRenew: false
	}
]

module.exports = enrollmentsController.seed(enrollmentsSeed)
	.then((enrollments) => console.log(`${enrollments.length} document(s) inserted to enrollments!`))
	.catch((err) => console.log('Error when running seeds for enrollments'));