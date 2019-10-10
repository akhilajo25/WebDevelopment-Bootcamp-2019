var todos=[];

var option=prompt("What is your choice?");

while(option!=="quit"){
if (option==="new")
{
	var new_todo = prompt("Enter todo");
 	todos.push(new_todo);

 }else if (option==="list") {

 	console.log(todos);
 }

 option=prompt("What is your choice?");
}

console.log("Ok, you Quit!")