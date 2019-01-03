/***************|
|* DEPENDECIES *|
|***************/
/* DATABASE TOOLS*/
// Loads ObjectId from mongoose
const ObjectId = require('mongoose').Types.ObjectId;

/**********************|
|*  Imports In model  *|
|**********************/
const Enrollments = require('../models').Enrollments;

/****************************|
|*  Imports In controllers  *|
|****************************/
const countersController = require('./countersController');
const parentsController = require('./parentsController')

/***************************|
|*  Methods for controller *|
|***************************/
const EnrollmentsController = {
	create: function (req, res) {
		console.log(req.body)
		Enrollments
			.create(req.body)
			.then((enrollmentsModel) => { res.json(enrollmentsModel) })
			.catch((err) => { console.log(err); res.status(422).json(err) });
	},
	seed: function (seed) {
		return Enrollments
			.remove({})
			.then(() => Enrollments.insertMany(seed))
			.then((enrollmentsModel) => { return enrollmentsModel })
			.catch((err) => console.log(err));
	},
	update: function (req, res) {		
		Enrollments
			.findOneAndUpdate({ _id: req.params.id }, req.body)
			.then((enrollmentsModel) => res.json(enrollmentsModel))
			.catch((err) => { console.log(err); res.status(422).json(err) });
	}
}

/***********|
|* EXPORTS *|
|***********/
module.exports = EnrollmentsController;
