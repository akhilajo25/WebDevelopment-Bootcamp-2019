//alert("Connected"); Making Sure Everything is connected
var appId = 'b8779202d4a0cf1d8b4c7047a3953d6c';
var units = 'imperial';

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
	fetch(`http://api.openweathermap.org/data/2.5/weather?${searchMethod}=${query}&APPID=${appId}&units=${units}`).then(result =>{
		return result.json();
	}).then(result=>{
		init(result);

	})
}

function init(resultFromServer){
	console.log(typeof resultFromServer["cod"]);
	if(resultFromServer["cod"] == 404 ){
		var weatherContainer = document.getElementById('weatherContainer');
		notFoundHeader.style.visibility = 'visible';
		weatherContainer.style.visibility = 'hidden';
	}else{
	notFoundHeader.style.visibility = 'hidden';
	switch(resultFromServer.weather[0].main){
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

			break;
	}
	
	var weatherDescHeader = document.getElementById('weatherDescHeader');
	var cityHeader = document.getElementById('cityHeader');
	var temprature = document.getElementById('temprature');
	var humidity = document.getElementById('humidity');
	var windSpeed = document.getElementById('windSpeed');
	var weatherIcon = document.getElementById('documentIconImg');
	
	weatherIcon.src = "http://openweathermap.org/img/w/"+ resultFromServer.weather[0].icon+".png";
	var resultDesc = resultFromServer.weather[0].description;
	console.log(resultDesc);
	weatherDescHeader.innerText = resultDesc.charAt(0).toUpperCase()+resultDesc.slice(1);	
	temprature.innerHTML = Math.floor(resultFromServer.main.temp)+'&#176';

	windSpeed.innerHTML = "Wind at " + Math.floor(resultFromServer.wind.speed) + ' m/s';
	cityHeader.innerHTML = resultFromServer.name;
	humidity.innerHTML = 'Humidity levels at '+ resultFromServer.main.humidity+'%'
	setPosition();
}
}

function setPosition(){
	var weatherContainer = document.getElementById('weatherContainer');
	var weatherContainerHeight = weatherContainer.clientHeight;
	var weatherContainerWidth = weatherContainer.clientWidth;
	weatherContainer.style.left = `calc(50% - ${weatherContainerWidth/2}px)`;
	weatherContainer.style.top = `calc(50% - ${weatherContainerHeight/1.3}px)`;
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