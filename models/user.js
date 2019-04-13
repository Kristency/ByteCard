const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	name : String,
	// phoneNo : String,
	email : String,
	googleId : String,
	thumbnail : {
		type : String,
		default : "https://www.colchestersun.com/wp-content/uploads/2018/01/user-dummy.png"
	},
	myCard : {
		ref : "Cards",
		type : mongoose.Schema.Types.ObjectId
	},
	cards : [{
				card:{
					ref : "Cards",
					type : mongoose.Schema.Types.ObjectId
				},
				Type : [String]
			}]
});

module.exports = mongoose.model("User",userSchema);