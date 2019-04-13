const mongoose = require("mongoose");

var Card = require("./card");

const userSchema = new mongoose.Schema({
	name : String,
	// phoneNo : String,
	email : String,
	googleId : String,
	thumbnail : {
		type : String,
		default : "https://www.colchestersun.com/wp-content/uploads/2018/01/user-dummy.png"
	},
	myCards : [
				{
				ref : "Card",
				type : mongoose.Schema.Types.ObjectId
				}
			],
	cards : [
				{
					ref : "Card",
					type : mongoose.Schema.Types.ObjectId
				}
			]
});

module.exports = mongoose.model("User",userSchema);