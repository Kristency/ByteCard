var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
	name : String,
	phoneNo : String,
	email : String,
	googleId : String,
	thumbnail : String,
	myCard : {
		ref : "Cards",
		type : Mongoose.Schema.Types.ObjectId
	}
	Cards : [{
				card:{
					ref : "Cards",
					type : Mongoose.Schema.Types.ObjectId
				},
				Type : [String]
			}];

module.exports = mongoose.model("User",userSchema);