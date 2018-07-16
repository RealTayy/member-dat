// This file empties invoices collection and inserts the invoicesSeed
const invoicesController = require('../controllers/invoicesController');
const ObjectId = require('mongoose').Types.ObjectId;

// type:|Initiation Fee|Member Dues|
//			|Uniform|Equipment|Field Trip|Special Event|Other|
// payment: |Card|Cash|Online|
/* note:
AUTO: Purchased black belt uniform when enrolling
AUTO: Purchased standard uniform when enrolling
AUTO: Initiation fee charged when enrolling
AUTO: First Member dues fee charged when enrolling
AUTO: Member dues fee charged with automatic renewal

*/

const invoicesSeed = [
	{
		_id: new ObjectId('012345678901234567894000'),
		idtwo: 'I000000',
		type: 'Initiation Fee',
		amountDue: 3000,
		dateCreated: '2018-05-20',
		dueDate: '2018-05-20',
		paidDate: '2018-05-20',
		isPaid: true,
		note: 'AUTO: Initiation fee charged when enrolling',
		parent: new ObjectId('012345678901234567891000'),
	},
	{
		_id: new ObjectId('012345678901234567894001'),
		idtwo: 'I000001',
		type: 'Member Dues',
		amountDue: 650,
		dateCreated: '2018-01-07',
		dueDate: '2018-01-07',
		paidDate: '2018-01-07',
		isPaid: true,
		note: 'AUTO: First Member dues fee charged when enrolling',
		parent: new ObjectId('012345678901234567891001'),
	},
	{
		_id: new ObjectId('012345678901234567894002'),
		idtwo: 'I000002',
		type: 'Uniform',
		amountDue: 50,
		dateCreated: '2018-01-07',
		dueDate: '2018-01-07',
		paidDate: '2018-01-07',
		isPaid: true,
		note: 'AUTO: Purchased standard uniform when enrolling',
		parent: new ObjectId('012345678901234567891001'),
	},
	{
		_id: new ObjectId('012345678901234567894003'),
		idtwo: 'I000003',
		type: 'Member Dues',
		amountDue: 650,
		dateCreated: '2018-01-07',
		dueDate: '2018-01-07',
		paidDate: '2018-01-07',
		isPaid: true,
		note: 'AUTO: First Member dues fee charged when enrolling',
		parent: new ObjectId('012345678901234567891001'),
	},
	{
		_id: new ObjectId('012345678901234567894004'),
		idtwo: 'I000004',
		type: 'Uniform',
		amountDue: 50,
		dateCreated: '2018-01-07',
		dueDate: '2018-01-07',
		paidDate: '2018-01-07',
		isPaid: true,
		note: 'AUTO: Purchased standard uniform when enrolling',
		parent: new ObjectId('012345678901234567891001'),
	},
	{
		_id: new ObjectId('012345678901234567894005'),
		idtwo: 'I000005',
		type: 'Member Dues',
		amountDue: 650,
		dateCreated: '2018-06-23',
		dueDate: '2018-07-07',
		paidDate: '',
		isPaid: false,
		note: 'AUTO: Member dues fee charged with automatic renewal',
		parent: new ObjectId('012345678901234567891001'),
	},
]

module.exports = invoicesController.seed(invoicesSeed)
	.then((invoices) => console.log(`${invoices.length} document(s) inserted to invoices`))
	.catch((err) => console.log('Error when running seeds for invoices'));