var express 		= require("express");
var app 			= express();
var bodyParser 		= require("body-parser");
var cors 			= require("cors");
var dotenv 			= require("dotenv");
var mongoose 		= require("mongoose");

app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
dotenv.config();
mongoose.connect(process.env.DATABASEURL,{useNewUrlParser:true});
app.set("view engine","ejs");
app.use(express.static(__dirname + "public"));

var userRoutes = require("./routes/userRoutes.js");

app.get("/",(req,res) => {
	res.send("Working fine sir");
});


app.listen(process.env.PORT || 3000,process.env.IP,() => {
	console.log("I am at your service sir...");
});


