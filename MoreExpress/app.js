var express = require("express")

var app = express();

app.use(express.static("public")); /* To make use of the css file from public folder*/

app.set("view engine","ejs");

app.get("/",function(req,res){
	res.render("home");
});

/*

 */
app.get("/fallinlove/:thing",function(req,res){
	var thing = req.params.thing;
	res.render("home",{thingVar: thing });
});


app.get("/posts",function(req,res){
	var posts = [
	{name:"Akhila", lastname:"Joshi"},
	{name:"Aparna", lastname:"Bhatt"},
	{name:"Anup", lastname:"Patil"}
	];
	res.render("love.ejs",{posts: posts});
})

app.listen("3000",function(req,res){
	console.log("Listening on port 3000!");
});

app.get("*",function(req,res){
	res.send("404!!!, Page Not Found!")
});