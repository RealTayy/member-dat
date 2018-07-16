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
			.then((studentsModel) => res.json(studentsModel))
			.catch((err) => { console.log(err); res.status(422).json(err) });
	},
	findSomeRegexPop: function (req, res) {
		// Convert query to regex query
		for (let key in req.query) { req.query[key] = { $regex: `^${req.query[key]}` } }
		Students
			.find(req.query)
			.populate('enrollment')			
			.populate({ path: 'parent', populate: { path: 'students' } })
			.populate({ path: 'parent', populate: { path: 'invoices' } })
			.exec(function (err, studentsModel) {
				if (err) { console.log(err); res.status(422).json(err) }
				res.json(studentsModel)
			})
	},
	create: function (req, res) {
		console.log(req.body);
		// Get next custom studentID from counters collection
		countersController
			.findAndIncrement('studentid')
			.then((id) => { req.body.idtwo = id })
			.catch((err) => { res.status(422).json(err) })
			.then(() => {
				// Add student to DB
				Students
					.create(req.body)
					.then((dbModel) => {
						// Add student objID to parent's students array
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
	},
	seed: function (seed) {
		return Students
			.remove({})
			.then(() => Students.insertMany(seed))
			.then((studentsModel) => { return studentsModel })
			.catch((err) => console.log(err));
	}
}

/***********|
|* EXPORTS *|
|***********/
module.exports = StudentsController;
