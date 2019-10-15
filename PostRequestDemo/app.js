// npm init to add package.json
// npm install express --save to downlaod the nodemodules
// Below are the steps numbered 1-4 to be followed strictly to get your server running
// 1
var express = require("express");
var bodyParser = require("body-parser"); // body-parser will take the contents of the body and parse it into a javaScript object ehich is easier for use
// 2
var app = express();
app.use(bodyParser.urlencoded({extended: true}));
// 3
app.set("view engine", "ejs");
var friends =["Akhila","Anup","Abhinav","Dishant","Aparna"];
// 5
app.get("/",function(req,res){
	res.render("Home");
});

app.get("/friends",function(req,res){
	res.render("friends",{friends:friends});
});

app.post("/addfriend",function(req,res){ // Setting up a post route
	res.redirect("/friends");
	//console.log(req.body);
	console.log(req.body.newFriend);
	var newFriend = req.body.newFriend;
	friends.push(newFriend);
})
// 6
app.get("*",function(req,res){
	res.send("404, Page Not Found!!!!");
});
// 4
app.listen("3000",function(req,res){
	console.log("Hey, I am listening to Port 3000!!!");
});