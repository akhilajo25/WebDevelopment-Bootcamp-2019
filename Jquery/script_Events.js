alert("Conneccted!");

// For more events visit api.jquery.com

// Click Event begins
$("h1").click(function(){
	alert("h1 Clicked");
});

$("button").click(function(){
	$(this).css("background","pink");
});

// Click Event Ends
// Explore
// keypress event
$("input").click(function(event){
	console.log(event);
});

// on() event similar to addEventListener

// $("h1").on("click",function(){
// 	$(this).css("color","purple");
// });

// JQuery effects

$("button").on("click",function(){
	$("h1.fade").fadeOut();
});

