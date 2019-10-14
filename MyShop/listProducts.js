var faker = require("faker");

for(var i=0;i<=10;i++){
	var randomProductName = faker.commerce.productName(); // Rowan Nikolaus
	var randomPrice = faker.commerce.price(); // Kassandra.Haley@erich.biz
	console.log(randomProductName+" - Rs."+randomPrice);
}
// console.log(randomCard);