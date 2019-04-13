const express = require("express");
const router = express.Router();

const User = require("../models/user.js");
const Card = require("../models/card.js");

router.post("/create",(req,res) => {//to create user's own cards
	let data = req.body;
	User.findOne({googleId:data.gid},(err,foundUser) =>{
		if(err){
			console.error(err);
			res.send({});
		}		
		else{
			// console.log(foundUser);
			if(foundUser == null){
				res.send({});
				return;
			}
			Card.create({
				type : data.type,
				name : data.name,
				phoneNo : data.phoneNo,
				email : data.email,
				address : data.address, 
				thumbnail : data.thumbnail,
				//social
				instagram : data.instagram,
				facebook : data.facebook,
				skype : data.skype,
				pinterest : data.pinterest,
				snapchat : data.snapchat,
				twitter : data.twitter,
				relation : data.relation,
				//professional
				linkedIn : data.linkedIn,
				angelList : data.angelList,
				workAddress : data.workAddress,
				roleAtWork : data.roleAtWork
			}, (err,createdCard) => {
				if(err){
					console.error(err);
					res.send({});
				}
				else{
					console.log(foundUser.myCards);
					foundUser.myCards.push(createdCard._id);
					foundUser.save();//to save the data into the user
					res.send(createdCard);
				}
			});
		}
	});
});



module.exports = router;