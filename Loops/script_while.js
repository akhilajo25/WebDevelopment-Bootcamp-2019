alert("Hey,We are all set!");

console.log("Printing Numbers between -10 to 20");

var num=-10;

while(num<=19){
	console.log(num);
	num++;
}

// Printing all even Numbers between 10 to 20

console.log("Printing all even Numbers between 10 to 20");

var num_even=10

while(num_even<=20){
	if(num_even%2==0){
		console.log(num_even);
	}
	num_even++;
}

// Print all odd numbers betweeen 300 t0 333


console.log("Printing all odd Numbers between 300 to 333");

var num_odd=300

while(num_odd<=333){
	if(num_odd%2==1){
		console.log(num_odd);
	}
	num_odd++;
}

// Print all numbers divisible by 5 and 3 betweeen 5 and 50


console.log("Printing all numbers divisible by 5 and 3 betweeen 5 and 50");

var num=5

while(num<=50){
	if(num%5==0 && num%3==0){
		console.log(num);
	}
	num++;
}

