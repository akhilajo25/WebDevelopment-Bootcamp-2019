var todos=["Eat breakfast"];

var option=prompt("What is your choice?");

while(option!=="quit"){
if (option==="new")
{
	var new_todo = prompt("Enter todo");
 	todos.push(new_todo);

 }else if (option==="list") {
 	todos.forEach(function(todo,i){
 		console.log(i+":"+todo);
 	});
 	
 }else	if (option==="delete") {
 	var index = prompt("Enter the index you wish to delete");

 	todos.splice(index,1);
 	console.log("Deleted");
 }

 option=prompt("What is your choice?");
}

console.log("Ok, you Quit!")