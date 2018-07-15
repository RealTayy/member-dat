// This file empties counters collection and inserts the countersSeeds into the collection
const countersController = require('../controllers/countersController');

const countersSeed = [
	{
		_id: 'parentid',
		seq: 100000,
		prefix: "P"
	},
	{
		_id: "studentid",
		seq: 100000,
		prefix: "S",
	},
	{
		_id: "invoiceid",
		seq: 100000,
		prefix: "I",
	}
]

module.exports = countersController.seed(countersSeed)
	.then((counters) => console.log(`${counters.length} document(s) inserted to counters!`))
	.catch((err) => console.log('Error when running seeds for counters'));