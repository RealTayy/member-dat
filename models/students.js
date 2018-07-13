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
	idtwo: { type: String, required: true, trim: true },
	isActive: { type: Boolean, required: true },
	info: {
		name: {
			first: { type: String, required: true, trim: true, lowercase: true },
			last: { type: String, required: true, trim: true, lowercase: true },
		},
		dob: {
			full: { type: String, required: true, trim: true },
		},
		startDate: {
			full: { type: String, required: true, trim: true },
		},
		contact: {
			phone: { type: String, required: false, trim: true },
		},
		school: { type: String, required: false, trim: true },
	},
	enrollment: {
		dojo: { type: String, required: true, trim: true },
		type: { type: String, required: true, trim: true },
		rate: { type: String, required: true, trim: true },
		beltrank: { type: String, required: true, trim: true },
	},
	parent: {
		_id: { type: Schema.Types.ObjectId, ref: 'Parents', required: true },
		dFull: { type: String, required: true, trim: true },
	}
});

// Create Virtuals for StudentSchema
StudentSchema.virtual('info.name.dFull')
	.get(function () {
		console.log('You made it here bby1')
		if (this.info.name.dFirst && this.info.name.dLast){
			console.log(`${this.info.name.dFirst} ${this.info.name.dLast}`);
			return `${this.info.name.dFirst} ${this.info.name.dLast}`
			}
	})

StudentSchema.virtual('info.name.dFirst')
	.get(function () {
		if (this.info.name.first)
			return `${this.info.name.first.charAt(0).toUpperCase()}${this.info.name.first.substring(1)}`
	})

StudentSchema.virtual('info.name.dLast')
	.get(function () {
		if (this.info.name.last)
			return `${this.info.name.last.charAt(0).toUpperCase()}${this.info.name.last.substring(1)}`
	})

/***********|
|* EXPORTS *|
|***********/
module.exports = mongoose.model("Students", StudentSchema);
