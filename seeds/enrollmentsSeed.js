// This file empties students collection and insrts the studentSEeds into italics
const enrollmentsController = require('../controllers/enrollmentsController.js');
const ObjectId = require('mongoose').Types.ObjectId;

// dojo |Pearland|Cypress|
// beltRank |W|Yel|Ora|Gre|Blu|Bro|Red|Black Candidate|
// type |Black Belt|Standard|Trial|

const enrollmentsSeed = {
	{
		_id: new ObjectId('012345678901234567893000'),
		dojo: 'Pearland',
		beltRank: 'Yellow Stripe',
		type: 
	}
}

//module.exports = studentsController.seed(studentsSeed)