/**********************|
|*  Imports In model  *|
|**********************/
const Parents = require('../models').Parents;

/****************************|
|*  Imports In controllers  *|
|****************************/
const countersController = require('./countersController');

/***************************|
|*  Methods for controller *|
|***************************/
const ParentsController = {
	findSomeExact: function (req, res) {
		Parents
			.find(req.query)
			.then((parentsModel) => res.json(parentsModel))
			.catch((err) => { console.log(err); res.status(422).json(err) });
	},
	findSomeRegex: function (req, res) {
		// Convert query to regex query
		for (let key in req.query) { req.query[key] = { $regex: `^${req.query[key]}` } }
		Parents
			.find(req.query)
			.then((parentsModel) => res.json(parentsModel))
			.catch((err) => { console.log(err); res.status(422).json(err) });
	},
	findSomeRegexPop: function (req, res) {
		// Convert query to regex query
		for (let key in req.query) { req.query[key] = { $regex: `^${req.query[key]}` } }
		Parents
			.find(req.query)
			.populate('invoices')
			.populate('students')
			.populate({ path: 'students', populate: { path: 'parent' } })
			.populate({ path: 'students', populate: { path: 'enrollment' } })
			.exec(function (err, parentsModel) {
				if (err) { console.log(err); res.status(422).json(err) }
				res.json(parentsModel)
			})
	},
	findById: function (req, res) {
		Parents
			.findById(req.params.id)
			.then((parentsModel) => res.json(parentsModel))
			.catch((err) => { console.log(err); res.status(422).json(err) });
	},
	findByIdPop: function (req, res) {
		Parents
			.findById(req.params.id)
			.populate('invoices')
			.populate('students')
			.populate({ path: 'students', populate: { path: 'parent' } })
			.populate({ path: 'students', populate: { path: 'enrollment' } })
			.exec(function (err, parentsModel) {
				if (err) { console.log(err); res.status(422).json(err) }
				res.json(parentsModel)
			})
	},
	findByIdTwo: function (req, res) {
		console.log(req.params.id);
		Parents
			.find({ idtwo: req.params.id })
			.then((parentsModel) => res.json(parentsModel))
			.catch((err) => { console.log(err); res.status(422).json(err) });
	},
	findByIdTwoPop: function (req, res) {
		console.log(req.params.id);
		Parents
			.find({ idtwo: req.params.id })
			.populate('invoices')
			.populate('students')
			.populate({ path: 'students', populate: { path: 'parent' } })
			.populate({ path: 'students', populate: { path: 'enrollment' } })
			.exec(function (err, parentsModel) {
				if (err) { console.log(err); res.status(422).json(err) }
				res.json(parentsModel)
			})
	},
	create: function (req, res) {
		// Get next custom parentID from counters collection
		countersController.findAndIncrement('parentid')
			.then((id) => { req.body.idtwo = id })
			.catch((err) => res.status(422).json(err))
			.then(() => {
				// If didn't run into error add parent to DB
				console.log(JSON.stringify(req.body, null, 2));
				Parents
					.create(req.body)
					.then((parentsModel) => res.json(parentsModel))
					.catch((err) => { console.log(err); res.status(422).json(err) });
			})
			.catch((err) => res.status(422).json(err))
	},
	update: function (req, res) {
		Parents
			.findOneAndUpdate({ _id: req.params.id }, req.body)
			.then((parentsModel) => res.json(parentsModel))
			.catch((err) => { console.log(err); res.status(422).json(err) });
	},
	updatePromise: function (req, res) {
		return Parents.findOneAndUpdate({ _id: req.params.id }, req.body)
	},
	remove: function (req, res) {
		Parents
			.findById({ _id: req.params.id })
			.then((parentsModel) => parentsModel.remove())
			.then((parentsModel) => res.json(parentsModel))
			.catch((err) => { console.log(err); res.status(422).json(err) });
	},
	seed: function (seed) {
		return Parents
			.remove({})
			.then(() => Parents.insertMany(seed))
			.then((parentsModel) => { return parentsModel })
			.catch((err) => console.log(err));
	}
};

/***********|
|* EXPORTS *|
|***********/
module.exports = ParentsController;
