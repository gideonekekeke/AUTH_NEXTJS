import mongoose from "mongoose";
var Schema = mongoose.Schema;

var user = new Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	since: {
		type: Date,
		default: Date.now,
	},
});

export default mongoose.model("User", user);
