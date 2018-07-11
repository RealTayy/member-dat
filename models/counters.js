/*****************|
|*  DEPENDECIES  *|
|*****************/
//  MongoDB object modeling tool
const mongoose = require("mongoose");

/******************|
|* INITIALIZATION *| 
|******************/
// Create Schema class under Schema variable
const Schema = mongoose.Schema;

/**********|
|* SCHEMA *| 
|**********/
// Create Schema for parents
const counterSchema = new Schema({
	_id: 		{ type: String, required: true },
	seq: 		{ type: Number, required: true },
	prefix: { type: String, required: true },
});

/***********|
|* EXPORTS *|
|***********/
module.exports = mongoose.model("Counters", counterSchema);
