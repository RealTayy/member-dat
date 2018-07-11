/**********************|
|*  Imports In model  *|
|**********************/
const Parents = require("../models").Parents;

/************************|
|*  Imports In counter  *|
|************************/
const countersController = require("./countersController");

/***************************|
|*  Methods for controller *|
|***************************/
const ParentsController = {
	findSomeExact: function (req, res) {
		Parents
			.find(req.query)
			.then((dbModel) => res.json(dbModel))
			.catch((err) => res.status(422).json(err));
	},
	findSomeRegex: function (req, res) {
		// Convert query to regex query
		for (let key in req.query) { req.query[key] = { $regex: `^${req.query[key]}` } }
		Parents
			.find(req.query)
			.then((dbModel) => res.json(dbModel))
			.catch((err) => res.status(422).json(err));
	},
	findById: function (req, res) {
		Parents
			.findById(req.params.id)
			.then((dbModel) => res.json(dbModel))
			.catch((err) => res.status(422).json(err));
	},
	findByIdTwo: function (req, res) {
		console.log(req.params.id);
		Parents
			.find({ idtwo: req.params.id })
			.then((dbModel) => res.json(dbModel))
			.catch((err) => res.status(422).json(err));
	},
	create: function (req, res) {
		// Get next custom parentID from DB
		countersController.findAndIncrement('parentid')
			.then((id) => { req.body.idtwo = id })
			.catch((err) => res.status(422).json(err))
			.then(() => {
				// If didn't run into error add parent to DB
				console.log(JSON.stringify(req.body, null, 2));
				Parents
					.create(req.body)
					.then((dbModel) => res.json(dbModel))
					.catch((err) => res.status(422).json(err));
			})
	},
	update: function (req, res) {
		Parents
			.findOneAndUpdate({ _id: req.params.id }, req.body)
			.then((dbModel) => res.json(dbModel))
			.catch((err) => res.status(422).json(err));
	},
	remove: function (req, res) {
		Parents
			.findById({ _id: req.params.id })
			.then((dbModel) => dbModel.remove())
			.then((dbModel) => res.json(dbModel))
			.catch((err) => res.status(422).json(err));
	}
};

/***********|
|* HELPERS *|
|***********/
// Retrieve next ID stored in counters


/***********|
|* EXPORTS *|
|***********/
module.exports = ParentsController;
