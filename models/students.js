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
// Create Schema for students
const StudentSchema = new Schema({
	idtwo: { type: String, required: true, trime: true },
	isActive: { type: Boolean, required: true },
	first: { type: String, required: true },
	parent: { type: Schema.Types.ObjectId, ref: 'Parents', required: true }

})

/***********|
|* EXPORTS *|
|***********/
module.exports = mongoose.model("Students", StudentSchema);
