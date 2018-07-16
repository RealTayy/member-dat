/***************|
|* DEPENDECIES *|
|***************/
/* DATABASE TOOLS*/
// Loads ObjectId from mongoose
const ObjectId = require('mongoose').Types.ObjectId;

/**********************|
|*  Imports In model  *|
|**********************/
const Students = require('../models').Students;
const Parents = require('../models').Parents;

/****************************|
|*  Imports In controllers  *|
|****************************/
const countersController = require('./countersController');
const parentsController = require('./parentsController')

/***************************|
|*  Methods for controller *|
|***************************/
const StudentsController = {
	findSomeRegex: function (req, res) {
		// Convert query to regex query
		for (let key in req.query) { req.query[key] = { $regex: `^${req.query[key]}` } }
		Students
			.find(req.query)
			.then((dbModel) => res.json(dbModel))
			.catch((err) => { console.log(err); res.status(422).json(err) });
	},
	create: function (req, res) {
		console.log(req.body);
		// Get next custom studentID from counters collection
		countersController
			.findAndIncrement('studentid')
			.then((id) => { req.body.idtwo = id })
			.catch((err) => { res.status(422).json(err) })
			.then(() => {
				// If didn't run into error add student to DB
				Students
					.create(req.body)
					.then((dbModel) => {
						console.log('YOU ARE HERE BRO');
						console.log(req.body);
						// If didn't run into error add student objID to parent's students array
						parentsController
							.updatePromise({
								params: { id: req.body.parent },
								body: { $push: { students: dbModel._id } }
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
module.exports = StudentsController;
