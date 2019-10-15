var express = require("express");

var app = express();

// get takes two parameters 
	// 1. url - in our case "/"
	// 2. The call back function (req,res)

app.get("/", function(req,res){   

	res.send("Hi there!");

});

app.get("/speak/:animal", function(req,res){   
	var sounds = {
		pink:"Oink",
		cow:"mooo",
		dog:"wooow",
		goldfish:"...."
	}
	var animal = req.params.animal;
	var sound=sounds[animal];
	res.send("The "+animal+" says ' "+sound+" ' ");
});


app.listen(3000,function(){

	console.log("Listening on port 3000");

});

/*When you go to an undefined route we normally get Cannot GET/ blah/ to avoid it we mostly */

app.get("*", function(req,res){
	res.send("Sorry, Page not found!!!! What are you doing with your life???")
})