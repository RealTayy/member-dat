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
  exField2: { type: String, required: true },
});

module.exports = mongoose.model("Parent", parentSchema);
