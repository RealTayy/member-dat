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
			last: { type: String, required: true, trim: true },
		},
		contact: {
			phone: { type: String, required: true, trim: true },
			email: { type: String, required: true, trim: true },
		},
		dob: {
			year: { type: String, required: true, trim: true },
			month: { type: String, required: true, trim: true },
			day: { type: String, required: true, trim: true },
		},
		stateDate: {
			year: { type: String, required: true, trim: true },
			month: { type: String, required: true, trim: true },
			day: { type: String, required: true, trim: true },
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
});

// Create Virtuals for ParentSchema
ParentSchema.virtual('info.name.full')
	.get(() => {
		return `${this.name.first} ${this.name.last}`
	})

ParentSchema.virtual('info.dob.full')
	.get(() => {
		return `${this.info.dob.year}-${this.info.dob.month}-${this.dob.day}`
	})
	.set((fullDate) => {
		var split = fullDate.split('-')
			, year = split[0]
			, month = split[1]
			, day = split[2]
		this.set('info.dob.year', year);
		this.set('info.dob.month', month);
		this.set('info.dob.day', day);
	})

ParentSchema.virtual('info.startDate.full')
	.get(() => {
		return `${this.info.startDate.year}-${this.info.startDate.month}-${this.startDate.day}`
	})
	.set((fullDate) => {
		var split = fullDate.split('-')
			, year = split[0]
			, month = split[1]
			, day = split[2]
		this.set('info.startDate.year', year);
		this.set('info.startDate.month', month);
		this.set('info.startDate.day', day);
	})

ParentSchema.virtual('info.address.full')
	.get(() => {
		let a = this.info.address;
		return `${a.line1}${(a.line2) ? ',' : ` ${a.line2},`} ${a.city}, ${a.state}, ${a.zip}`
	})

ParentSchema.virtual('info.emergencyContact.name.full')
	.get(() => {
		return `${this.info.emergencyContact.first} ${this.info.emergencyContact.last}`
	})

/***********|
|* EXPORTS *|
|***********/
module.exports = mongoose.model("Parents", ParentSchema);
