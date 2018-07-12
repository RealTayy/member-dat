console.log('Adding counters seed to DB');
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
countersController.seed(countersSeed)
	.then((counters) => console.log(`${counters.length} document(s) inserted to counters!`));