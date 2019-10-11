alert("CONNECTED!!!");  // Making sure that our script is connected to our html

var p1 = document.querySelector("#p1Button");

var p2 = document.querySelector("#p2Button");

var p1Display=document.querySelector("#p1Display");

var p2Display=document.querySelector("#p2Display");

var resetButton = document.querySelector("#reset");

var numInput = document.querySelector("input");

console.log(numInput);

var winning = document.querySelector("p span");

var p1Score=0;

var p2Score=0;

var gameOver=false;

var winningScore=0;

p1.addEventListener("click",function(){
	if(!gameOver){
		p1Score+=1;	
		if(p1Score==winningScore){
			p1Display.classList.add("winner");
			gameOver= true;
		}
		p1Display.textContent=p1Score;
	}

});

p2.addEventListener("click",function(){
	if(!gameOver){
		p2Score+=1;;
		if(p2Score==winningScore){
			p2Display.classList.add("winner");
			gameOver= true;
		}
	
	p2Display.textContent=p2Score;
}
});

resetButton.addEventListener("click",function(){
	reset();
});

function reset(){
	p1Score=0;
	p1Display.textContent=0;
	p2Score=0;
	p2Display.textContent=0;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
	gameOver=false;
}

numInput.addEventListener("change",function(){
	winning.textContent=numInput.value;
	winningScore = numInput.value;
	console.log(winningScore);
	reset();
});
