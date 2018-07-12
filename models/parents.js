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
	idtwo: { type: String, required: true, trim: true },
	isActive: { type: Boolean, required: true },
	info: {
		name: {
			first: { type: String, required: true, trim: true, lowercase: true },
			last: { type: String, required: true, trim: true, lowercase: true }
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
	students: [{
		_id: { type: Schema.Types.ObjectId, ref: "Students" },
		dFull: { type: String, required: true, trim: true },
	}],
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
ParentSchema.virtual('info.name.dFull')
	.get(function () {
		if (this.info.name.dFirst && this.info.name.dLast)
			return `${this.info.name.dFirst} ${this.info.name.dLast}`
	})

ParentSchema.virtual('info.name.dFirst')
	.get(function () {
		if (this.info.name.first)
			return `${this.info.name.first.charAt(0).toUpperCase()}${this.info.name.first.substring(1)}`
	})

ParentSchema.virtual('info.name.dLast')
	.get(function () {
		if (this.info.name.last)
			return `${this.info.name.last.charAt(0).toUpperCase()}${this.info.name.last.substring(1)}`
	})

ParentSchema.virtual('info.address.full')
	.get(function () {
		let a = this.info.address;
		if (a)
			return `${a.line1}${(a.line2) ? ',' : ` ${a.line2},`} ${a.city}, ${a.state}, ${a.zip}`
	})

ParentSchema.virtual('info.emergencyContact.name.full')
	.get(function () {
		if (this.info.emergencyContact.first && this.info.emergencyContact.last)
			return `${this.info.emergencyContact.first} ${this.info.emergencyContact.last}`
	})

/***********|
|* EXPORTS *|
|***********/
module.exports = mongoose.model("Parents", ParentSchema);
