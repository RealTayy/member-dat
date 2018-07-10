import { addSeconds } from "date-fns";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const parentSchema = new Schema({
	info: {
		name: {
			first: { type: String, required: true },
			last: { type: String, required: true },
		}
	}
});

// Virtual for info.name.full
// Virtual for info.address.full
// Virtual for info.dob.full
// Virtual for info.startDate.full
// Virtual for emergencyContact.name.full

module.exports = mongoose.model("Parent", parentSchema);
