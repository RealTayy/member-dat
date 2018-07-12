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
	create: function (req, res) {
		console.log(req.body);
		// Create ObjectID from parentID and assign to parent field		
		let parentObjId = new ObjectId(req.body.parent._id);
		req.body.parent._id = parentObjId;
		// Get next custom studentID from counters collection
		countersController.findAndIncrement('studentid')
			.then((id) => { req.body.idtwo = id })
			.catch((err) => res.status(422).json(err))
			.then(() => {
				// If didn't run into error add student to DB
				Students
					.create(req.body)
					.then((dbModel) => {
						// If didn't run into error add student objID to parent's students array
						parentsController
							.updatePromise({ params: { id: parentObjId }, body: { $push: { students: { _id: dbModel._id, dFull: dbModel.info.name.dFull } } } })
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
