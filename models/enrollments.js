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
  type: { type: String, required: true, trim: true },
  dojo: { type: String, required: true, trim: true },
  initFee: { type: Number, required: true },
  monthlyFee: { type: Number, required: true },
  startDate: { type: String, required: true, trim: true },
  expireDate: { type: String, required: true, trim: true },
  willRenew: { type: Boolean, required: true, }
});

/***********|
|* EXPORTS *|
|***********/
module.exports = mongoose.model("Enrollments", EnrollmentSchema);
