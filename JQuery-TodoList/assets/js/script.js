//alert("Connected!!!")

// Check off specific todo's by clicking on them

$("ul").on("click","li",function(){
	// if($(this).css("color")==="rgb(128, 128, 128)"){

	// 	$(this).css({
	// 				color:"black",
	// 				textDecoration:"none"
	// 			});

	// }else{
	// 		$(this).css({
	// 				color:"gray",
	// 				textDecoration:"line-through"
	// 			});
	// }

	$(this).toggleClass("completed");
});

// Click of x to delete todo

$("ul").on("click","span",function(e){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	console.log("Clicked");
	e.stopPropagation();
});

$("input[type='text']").keypress(function(e){
	if(e.which===13){
		 var todoText=($(this).val());
		 $(this).val("");
		 $("ul").append("<li><span><i class='fa fa-trash'></i></span> "+todoText+"</li>")
	}
})