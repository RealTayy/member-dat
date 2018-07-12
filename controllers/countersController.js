/**********************|
|*  Imports In model  *|
|**********************/
const Counters = require("../models").Counters;

/***************************|
|*  Methods for controller *|
|***************************/
const CountersControllers = {
	findAndIncrement: function (name) {
		return Counters
			.findOneAndUpdate({ _id: name }, { $inc: { seq: 1 } })
			.then((dbModel) => { return `${dbModel.prefix}${dbModel.seq}` })
			.catch((err) => { console.log(err); return false });
	},
	seed: function (seed) {
		return Counters
			.remove({})
			.then(() => Counters.insertMany(seed))
			.then((dbModel) => { return dbModel })
			.catch((err) => { console.log(err) });
	}
}

/***********|
|* EXPORTS *|
|***********/
module.exports = CountersControllers;
