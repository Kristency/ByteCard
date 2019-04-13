const express = require("express");
const router = express.Router();

const User = require("../models/user.js");

router.post("/add",(req,res) => {//to add a user to the database
	let data = req.body;
	User.create({
		name : data.name,
		// phoneNo : data.phoneNo,
		email : data.email,
		googleId : data.googleId,
		thumbnail : data.thumbnail,
		// myCard : data.myCard, //no need of card during the creation of a user
		cards : data.cards
	},(err,createdUser) => {
		if(err){
			console.error(err)
			res.send({});
		}
		else{
			console.log(createdUser);
			res.send(createdUser);
		}
	});
});

router.get("/get/all",(req, res) => {//to get all the users in the db - admin
    User.find({}).populate("cards.card").exec((err,foundUsers)=>{
        if(err){
            console.log(err);
            res.send({});
        }
        else{
            res.send(foundUsers);//to send the found users
        }
    });
});

module.exports = router;