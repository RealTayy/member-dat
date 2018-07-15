/***************|
|* DEPENDECIES *|
|***************/
/* DATABASE TOOLS*/
// Loads ObjectId from mongoose
const ObjectId = require('mongoose').Types.ObjectId;

/**********************|
|*  Imports In model  *|
|**********************/
const Invoices = require('../models').Invoices;

/****************************|
|*  Imports In controllers  *|
|****************************/
const countersController = require('./countersController');
const parentsController = require('./parentsController')

/***************************|
|*  Methods for controller *|
|***************************/
const InvoicesController = {
	create: function (req, res) {
		console.log(req.body)
		// Get next custom invoiceID from counters collections
		countersController
			.findAndIncrement('invoiceid')
			.then((id) => { req.body.idtwo = id })
			.catch(((err) => { res.status(422).json(err) }))
			.then(() => {
				// If didnt' run into error add invoice to DB
				Invoices
					.create(req.body)
					.then((dbModel) => {
						parentsController
							.updatePromise({
								params: { id: req.body.parent._id },
								body: { $push: { invoices: dbModel._id } }
							})
							.then(() => res.json(dbModel))
							.catch((err) => { console.log(err); res.status(422).json(err) });
					})
					.catch((err) => { console.log(err); res.status(422).json(err) });
			})
			.catch((err) => { console.log(err); res.status(422).json(err) });
	}
}

/***********|
|* EXPORTS *|
|***********/
module.exports = InvoicesController;
