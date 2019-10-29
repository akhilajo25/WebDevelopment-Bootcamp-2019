var appId = 'b8779202d4a0cf1d8b4c7047a3953d6c';
var units = 'imperial';
var searchMethod='';

function getSearch(query){
	if(query.length === 5 && Number.parseInt(query)+''=== query)
		searchMethod = 'zip';
	else
		searchMethod = 'q';
}

function searchWeather(query){
	getSearch(query);
	currentDay(query);
	dailyForecast(query);
}
function currentDay(query){
	fetch(`http://api.openweathermap.org/data/2.5/weather?${searchMethod}=${query}&APPID=${appId}&units=${units}`).then(result =>{
		return result.json();
	}).then(result=>{
		console.log(result);
		init(result);


	})
}

function dailyForecast(query){
	fetch(`http://api.openweathermap.org/data/2.5/forecast?${searchMethod}=${query}&APPID=${appId}&units=${units}`).then(resultDaily =>{
		return resultDaily.json();
	}).then(resultDaily=>{
		console.log(resultDaily);
		dataForGraph(resultDaily);
	})
}
function init(resultFromServer){
	var weatherContainer = document.getElementById('container');
	weatherContainer.style.visibility = 'visible';
	console.log(resultFromServer.dt);
	var c = document.getElementById("custImg");
	var weatherIcon = document.getElementById('documentIconImg');
/*	console.log(c);*/
	switch(resultFromServer.weather[0].main){
		case 'Clouds':
			
			document.getElementById('documentIconImg').className="fas fa-cloud-moon fa-2x";
			break;

		 case 'Clear':
		 	
		 	document.getElementById('documentIconImg').className="fas fa-sun fa-2x";
		 	break;

		 case 'Rain':
		 	document.getElementById('documentIconImg').className="fas fa-cloud-showers-heavy fa-2x";
		 	break;

		 case 'Haze':
		 	document.getElementById('documentIconImg').className="fas fa-bolt fa-2x";
		 	break;

		default:
			document.getElementById('documentIconImg').className="fas fa-cloud-sun fa-2x";
			break;
	}

	switch(resultFromServer.name){
			case 'New York':
			c.src="assets/images/NY.jfif";
			break;

		 case 'Arizona':
		 	c.src="assets/images/Arizona.jfif";
		 	break;

		 case 'Miami':
		 	c.src="assets/images/Miami.jfif";
		 	break;

		 case 'Agra':
		 	c.src="assets/images/Agra.jfif";
		 	break;

		default:
			c.src="assets/images/City.jfif";
			break;
	}
	
	var weatherDescHeader = document.getElementById('weatherDescHeader');
	var name = document.getElementById('name');
	var countryDesc = document.getElementById('country');
	var dayName=document.getElementById('dayOfWeek');
	var currTemp = document.getElementById('temp');
	var mintemprature = document.getElementById('minTemp');
	var maxtemprature = document.getElementById('maxTemp');
	var windSpeed = document.getElementById('wind');
	var weatherIcon = document.getElementById('documentIconImg');
	var tempOnImg = document.getElementById('tempMain');
	var currDate = document.getElementById('dayOfMonth');
	
	weatherIcon.src = "http://openweathermap.org/img/w/"+ resultFromServer.weather[0].icon+".png";
	var resultDesc = resultFromServer.weather[0].description;
	weatherDescHeader.innerText = resultDesc.charAt(0).toUpperCase()+resultDesc.slice(1);	
	windSpeed.innerHTML = Math.floor(resultFromServer.wind.speed) + ' m/s';
	name.innerHTML = resultFromServer.name;
	countryDesc.innerHTML = resultFromServer.sys.country;
	currTemp.innerHTML = resultFromServer.main.temp;
	mintemprature.innerHTML= resultFromServer.main.temp_min;
	maxtemprature.innerHTML = resultFromServer.main.temp_max;
	tempOnImg.innerHTML=Math.floor(resultFromServer.main.temp)+'&#176';

	var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	var d = new Date(resultFromServer.dt * 1000);
	dayName.innerHTML = days[d.getDay()];
	currDate.innerHTML = moment(d).format("Do MMM");
	
}

function deduceDay(dt){
	var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	var d = new Date(dt * 1000);
	var date=d.getDate();
	return date;
}

function dataForGraph(resultDaily){
	var tempratureArray=[];
	var datesArray=[];
	
	for(var i=0;i<resultDaily["list"].length ; i++)
	{
	tempratureArray.push(resultDaily["list"][i]["main"]["temp"]);
	datesArray.push(deduceDay(resultDaily["list"][i]["dt"]));
	}
	var dateArray=datesArray.filter((item, i, ar) => ar.indexOf(item) === i);
	plotGraph(tempratureArray,dateArray);
	console.log(dateArray);
}

document.getElementById('searchBtn').addEventListener('click',()=>{
	var query = document.getElementById('searchInput').value;
	if(query)
	searchWeather(query);
	document.getElementById('searchInput').value="";
});

var myChart=null;
function plotGraph(tempratureArray,weekDayArray){
	console.log(tempratureArray);
if(myChart!=null){
        myChart.destroy();
    }

Chart.defaults.global.defaultFontColor='black';
Chart.defaults.scale.gridLines.display = false;
var ctx = document.getElementById("myChart");
myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: weekDayArray,
    datasets: [
      { 
        data: tempratureArray,
        label:"Temprature",
        borderColor: "black",
		fill: false
      }
    ]
  },
  options:{
			responsive: true,
			 elements: {
                    point:{
                        radius: 0
                    }
                },
                scales: {
						    yAxes: [{
						      scaleLabel: {
						        display: true,
						        labelString: 'Teamprature in celsius'
						      },
						      gridLines: {
       							 drawBorder: false,
      						  }
						    }]
  						},
  				legend: {
   							 display: false
  						}
        }
});

}

