// Node exercises --- The basic Echo
function echo(str,n){
	for(var i=0;i<=n;i++){
		console.log(str);
	}
}
echo("Echo!!!",10)
echo("Tater tots",3)

// Array exercise --- The Average grades

function averageScore(arr){
	var sum=0;
	for(var i=0; i<arr.length; i++){
		sum+=arr[i];
	}
	
	return sum/arr.length;
}

var arr=[90,98,89,100,100,86,94];
average=averageScore(arr)
console.log(Math.round(average));

