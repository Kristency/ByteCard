const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
	//personal Info
	type : String, 
	name : String,
	phoneNo : String,
	email : String,
	address : String,
	thumbnail : {
					type : String,
					default : "https://www.colchestersun.com/wp-content/uploads/2018/01/user-dummy.png"
				},
	//social
	instagram : String,
	facebook : String,
	skype : String,
	pinterest : String,
	snapchat : String,
	twitter : String,
	relation : String,
	//professional
	linkedIn : String,
	angelList : String,
	workAddress : String,
	roleAtWork : String
});

module.exports = mongoose.model("Card",cardSchema);