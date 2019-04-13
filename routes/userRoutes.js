const express = require("express");
const router = express.Router();

const User = require("../models/user.js");

router.get("/add",(req,res) => {
	res.render("user");
});

router.post("/add",(req,res) => {//to add a user to the database
	let data = req.body;
	User.findOne({googleId:data.googleId},(err,foundUser) =>{//to check if the user exists in the database
		if(err){
			console.error(err);
			return;
			res.send({});
		}
		else{
			if(foundUser == null){
				User.create({
				name : data.name,
				// phoneNo : data.phoneNo,
				email : data.email,
				googleId : data.googleId,
				thumbnail : data.thumbnail,
				myCards : data.myCards, //no need of card during the creation of a user
				cards : data.cards
				},(err,createdUser) => {
					if(err){
						console.error(err)
						res.send({});
					}
					else{
						console.log("New user created");
						console.log(createdUser);
						res.send(createdUser);
					}
				});
			}
			else{
				console.log("user existed");
				console.log("I responded the request sir");
				res.send(foundUser);
			}
			
		}
	});
});

router.get("/get/mycards/:userId",(req,res) => {// to get all cards of a user
	userId = req.params.userId;
	User.findById(userId,(err,foundUser) => {
		if(err){
			console.error(err);
			res.send({});
		}
	})

});

router.get("/get/all",(req, res) => {//to get all the users in the db - admin
    User.find({})
    .populate("myCards")
    .populate("cards")
    .exec((err,foundUsers)=>{
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