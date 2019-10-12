if(jQuery){
alert("JQuery Loaded!");
}else{
	alert("No JQuery");
}
// Select all div's and give them purple background
$("div").css("background","purple");

// Select the div's with class highlight and make them 200px wide
$("div.highlight").css("width","200px")

// Select the div with id third and give it an orange border
$("#third").css("border","2px solid orange");

// Select the first div only ang give it's font a pink color
$("div:first-of-type").css("color","pink");

$("div:first-of-type").text("New Text from Text method!")

$("h1").css("color","blue");

$("ul").addClass("correct");

$("li").text("North-East!!!!");

