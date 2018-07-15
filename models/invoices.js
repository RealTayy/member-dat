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
// Create Schema for invoices
const InvoiceSchema = new Schema({
  idtwo: { type: String, required: true, trim: true },
  type: { type: String, required: true, trim: true },
  amountDue: { type: Number, required: true },
  dateCreated: { type: String, required: true, trim: true },
  dueDate: { type: String, required: true, trim: true },
  paidDate: { type: String, trim: true },
  isPaid: { type: Boolean, required: true },
  payment: { type: String, trim: true },
  note: { type: String, trim: true },
  parent: {
    _id: { type: Schema.Types.ObjectId, ref: 'Parents', required: true },
    dFull: { type: String, required: true, trim: true },
  }
});

/***********|
|* EXPORTS *|
|***********/
module.exports = mongoose.model("Invoices", InvoiceSchema);
