alert("Hey!");

var button_operation = document.querySelector("button");

var isPurple = false;

console.log(button_operation);

button_operation.addEventListener("click",function(){

	if(isPurple){
	document.body.style.background = "white";
	isPurple=false;
	}else{
		document.body.style.background = "purple";
		isPurple=true;
	}
});
