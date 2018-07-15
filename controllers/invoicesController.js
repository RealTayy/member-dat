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
		Invoices
			.create(req.body)
			.then((dbModel) => { res.json(dbModel) })
			.catch((err) => { console.log(err); res.status(422).json(err) });
	}
}

/***********|
|* EXPORTS *|
|***********/
module.exports = InvoicesController;
