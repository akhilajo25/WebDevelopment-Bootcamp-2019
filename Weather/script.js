//alert("Connected"); Making Sure Everything is connected
var appId = 'b8779202d4a0cf1d8b4c7047a3953d6c';
var units = 'metric';

var searchMethod='';
var notFoundHeader = document.getElementById('notFound');

function getSearch(query){
	if(query.length === 5 && Number.parseInt(query)+''=== query)
		searchMethod = 'zip';
	else
		searchMethod = 'q';
}

function searchWeather(query){
	getSearch(query);
	fetch(`http://api.openweathermap.org/data/2.5/forecast?${searchMethod}=${query}&APPID=${appId}&units=${units}&cnt=7`).then(result =>{
		return result.json();
	}).then(result=>{
		init(result);

	})
}

function init(resultFromServer){
	console.log(resultFromServer);
	if(resultFromServer["cod"] == 404 ){
		document.body.style.backgroundImage="url('default.jpg')";
		var weatherContainer = document.getElementById('weatherContainer');
		notFoundHeader.style.visibility = 'visible';
		weatherContainer.style.visibility = 'hidden';
	}else{
	notFoundHeader.style.visibility = 'hidden';
	var tempratureArray=[];
	var sumWindSpeed=0;
	var sumTemprature=0;
	for(var i=0;i<resultFromServer["list"].length ; i++)
	{

	tempratureArray.push(resultFromServer["list"][i]["main"]["temp"]);
	sumWindSpeed+=(resultFromServer["list"][i]["wind"]["speed"]);
	sumTemprature+=(resultFromServer["list"][i]["main"]["temp"]);
	}
	console.log(sumTemprature);
	plotGraph(tempratureArray);
/*	switch(resultFromServer.weather[0].main){
		case 'Clouds':
			document.body.style.backgroundImage="url('clouds.jpg')";
			break;

		 case 'Clear':
		 	document.body.style.backgroundImage="url('Clear.jpg')";

		 	break;

		 case 'Rain':
		 	document.body.style.backgroundImage="url('rain.jpg')";

		 	break;

		 case 'Thunderstorm':
		 	document.body.style.backgroundImage="url('storm.jpg')";

		 	break;

		default:
			document.body.style.backgroundImage="url('default.jpg')";

			break;*/
	}
	
	var weatherDescHeader = document.getElementById('weatherDescHeader');
	var cityHeader = document.getElementById('cityHeader');
	var temprature = document.getElementById('temprature');
	var humidity = document.getElementById('humidity');
	var windSpeed = document.getElementById('windSpeed');
	var weatherIcon = document.getElementById('documentIconImg');
	
/*	weatherIcon.src = "http://openweathermap.org/img/w/"+ resultFromServer.weather[0].icon+".png";
	var resultDesc = resultFromServer.weather[0].description;
	console.log(resultDesc);
	weatherDescHeader.innerText = resultDesc.charAt(0).toUpperCase()+resultDesc.slice(1);*/
	temprature.innerHTML ="Average Temprature " + Math.floor((sumTemprature)/7)+'&#176';

	windSpeed.innerHTML = "Average wind " + Math.floor((sumWindSpeed)/7) + ' m/s';
	cityHeader.innerHTML = resultFromServer.city.name;
	/*humidity.innerHTML = 'Humidity levels at '+ resultFromServer.main.humidity+'%'*/
	setPosition();
}
/*}*/

function setPosition(){
	var weatherContainer = document.getElementById('weatherContainer');
	var weatherContainerHeight = weatherContainer.clientHeight;
	var weatherContainerWidth = weatherContainer.clientWidth;
	weatherContainer.style.left = `calc(50% - ${weatherContainerWidth/2}px)`;
	weatherContainer.style.top = `calc(52% - ${weatherContainerHeight/2}px)`;
	weatherContainer.style.visibility = 'visible';
}

document.getElementById('searchInput').addEventListener('keyup',function(e){
	if (event.keyCode === 13){
		event.preventDefault();
   		document.getElementById("searchBtn").click();
		var query = document.getElementById('searchInput').value;
			if(query){
				searchWeather(query);
				document.getElementById('searchInput').value="";
			}
	}
})

var myChart=null;
function plotGraph(tempratureArray){
if(myChart!=null){
        myChart.destroy();
    }

Chart.defaults.global.defaultFontColor='white';
var day = [1,2,3,4,5,6,7];
var ctx = document.getElementById("myChart");
myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: day,
    datasets: [
      { 
        data: tempratureArray,
        label:"Temprature in C",
        borderColor: "white",
		fill: false
      }
    ]
  },
  options:{
			responsive: true  
        }
});

}
