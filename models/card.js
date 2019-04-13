const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
	name : String,
	phoneNo : String,
	email : String,
	address : String, 
	//social
	instagram : String,
	facebook : String,
	skype : String,
	pinterest : String,
	snapchat : String,
	twitter : String,
	//professional
	linkedIn : String,
	angelList : String,
	workAddress : String,
	roleAtWork : String
});

module.exports = mongoose.model("Card",cardSchema);