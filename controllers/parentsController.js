/**********************|
|*  Imports In model  *|
|**********************/
const Parents = require("../models").Parents;

/***************************|
|*  Methods for controller *|
|***************************/
const ParentsController = {
	findAll: function (req, res) {
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
	create: function (req, res) {
		console.log(JSON.stringify(req.body, null, 2));
		Parents
			.create(req.body)
			.then((dbModel) => res.json(dbModel))
			.catch((err) => res.status(422).json(err));
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
|* EXPORTS *|
|***********/
module.exports = ParentsController;
