var express = require("express");

var app = express();

// get takes two parameters 
	// 1. url - in our case "/"
	// 2. The call back function (req,res)

app.get("/", function(req,res){   

	res.send("Hi there!");

});

app.get("/bye", function(req,res){   

	res.send("Good-Bye!");

});


app.listen(3000,function(){

	console.log("Listening on port 3000");

});

/*When you go to an undefined route we normally get Cannot GET/ blah/ to avoid it we mostly */

app.get("*", function(req,res){
	res.send("404! Error!!!!")
})