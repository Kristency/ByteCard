const express = require("express");
const router = express.Router();

const User = require("../models/user.js");
const Card = require("../models/card.js");

router.post("/create",(req,res) => {
	let data = req.body;
	User.findById(data.userId,(err,foundUser) =>{
		if(err){
			console.error(err);
			res.send({});
		}		
		else{
			Card.create({
				name : data.name,
				phoneNo : data.phoneNo,
				email : data.email,
				address : data.address, 
				//social
				instagram : data.instagram,
				facebook : data.facebook,
				skype : data.skype,
				pinterest : data.pinterest,
				snapchat : data.snapchat,
				twitter : data.twitter,
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
					res.send(CreatedCard);

				}
			});
		}
	});
});



module.exports = router;