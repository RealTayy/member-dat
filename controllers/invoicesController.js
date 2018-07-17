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
			.then((idtwo) => { req.body.idtwo = idtwo })
			.catch(((err) => { res.status(422).json(err) }))
			.then(() => {
				// Add invoice to DB
				Invoices
					.create(req.body)
					.then((invoicesModel) => {
						// Add invoice _id to parent's students array
						parentsController
							.updatePromise({
								params: { id: req.body.parent },
								body: { $push: { invoices: invoicesModel._id } }
							})
							.then(() => res.json(invoicesModel))
							.catch((err) => { console.log(err); res.status(422).json(err) });
					})
					.catch((err) => { console.log(err); res.status(422).json(err) });
			})
			.catch((err) => { console.log(err); res.status(422).json(err) });
	},
	updateByID: function (req, res) {
		Invoices
			.findOneAndUpdate({ _id: req.params.id }, req.body)
			.then((invoicesModel) => res.json(invoicesModel))
			.catch((err) => { console.log(err); res.status(422).json(err) });
	},
	updateByIDTwo: function (req, res) {
		Invoices
			.findOneAndUpdate({ idtwo: req.params.idtwo }, req.body)
			.then((invoicesModel) => res.json(invoicesModel))
			.catch((err) => { console.log(err); res.status(422).json(err) });
	},
	seed: function (seed) {
		return Invoices
			.remove({})
			.then(() => Invoices.insertMany(seed))
			.then((invoicesModel) => { return invoicesModel })
			.catch((err) => console.log(err));
	},
}

/***********|
|* EXPORTS *|
|***********/
module.exports = InvoicesController;
