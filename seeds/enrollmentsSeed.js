// This file empties students collection and inserts the enrollmentsSeed
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
	}
]

//module.exports = studentsController.seed(studentsSeed)