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
// Create Schema for enrollments
const EnrollmentSchema = new Schema({
  dojo: { type: String, required: true, trim: true },
  beltRank: { type: String, required: true, trim: true },
  type: { type: String, required: true, trim: true },
  initFee: { type: Number, required: true },
  rateFee: { type: Number, required: true },
  length: { type: String, required: true, trim: true },
  startDate: { type: String, required: true, trim: true },
  expireDate: { type: String, required: true, trim: true },
  willRenew: { type: Boolean, required: true, }
});

/***********|
|* EXPORTS *|
|***********/
module.exports = mongoose.model("Enrollments", EnrollmentSchema);
