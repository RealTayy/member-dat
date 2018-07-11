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
			.catch((err) => { console.log(err); return false })
	},
}

/***********|
|* EXPORTS *|
|***********/
module.exports = CountersControllers;
