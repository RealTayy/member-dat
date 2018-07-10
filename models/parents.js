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
const ParentSchema = new Schema({
	isActive: { type: Boolean, required: true },
	info: {
		name: {
			first: { type: String, required: true, trim: true },
			last: { type: String, required: true, trim: true }
		},
		contact: {
			phone: { type: String, required: true, trim: true },
			email: { type: String, required: true, trim: true },
		},
		dob: {
			full: { type: String, required: true, trim: true },
		},
		startDate: {
			full: { type: String, required: true, trim: true },
		},
		address: {
			line1: { type: String, required: true, trim: true },
			line2: { type: String, required: false, trim: true },
			city: { type: String, required: true, trim: true },
			state: { type: String, required: true, trim: true },
			zip: { type: String, required: true, trim: true },
		},
		emergencyContact: {
			name: {
				first: { type: String, required: true, trim: true },
				last: { type: String, required: true, trim: true },
			},
			contact: {
				phone: { type: String, required: true, trim: true },
				email: { type: String, required: true, trim: true },
			},
			relation: { type: String, required: false, trim: true },
		},
		heardBy: { type: String, required: false, trim: true },
		referBy: { type: String, required: false, trim: true },
	},
	students: [{ type: Schema.Types.ObjectId, ref: "Students" }],
	invoices: [{ type: Schema.Types.ObjectId, ref: "Invoices" }],
}, {
		toObject: {
			virtuals: true
		},
		toJSON: {
			virtuals: true
		}
	}
);

// Create Virtuals for ParentSchema
ParentSchema.virtual('info.name.full')
	.get(function () {
		return `${this.info.name.first} ${this.info.name.last}`
	})

ParentSchema.virtual('info.address.full')
	.get(function () {
		let a = this.info.address;
		return `${a.line1}${(a.line2) ? ',' : ` ${a.line2},`} ${a.city}, ${a.state}, ${a.zip}`
	})

ParentSchema.virtual('info.emergencyContact.name.full')
	.get(function () {
		return `${this.info.emergencyContact.first} ${this.info.emergencyContact.last}`
	})

/***********|
|* EXPORTS *|
|***********/
module.exports = mongoose.model("Parents", ParentSchema);
