


$(document).ready(function(){

	$("#submitForecast").click(function(){
		return getForecast();
	});

});


function getForecast(){
	var city = $("#city").val();

	if(city !=''){

		$.ajax({
			url:'http://api.openweathermap.org/data/2.5/forecast/daily?q=' + city + "&units=imperial" + "&cnt=5" 
			+ "&APPID=68329588f56831dca2223a7f58536dff",
			type: "GET",
			dataType: "jsonp",
			success: function(data){

				var table = '';

				var header ='<h2>5 day forecast for ' +data.city.name+' </h2>';

				for(var i = 0; i < data.list.length; i++){
					table +="<tr>";

					table += "<td> <img src='http://openweathermap.org/img/w/"+data.list[i].weather[0].icon+".png'>" + data.list[i].weather[0].description + "</td>";
					table += "<td>" + data.list[i].temp.day + "&deg;F</td>";
					table += "<td>" + data.list[i].temp.min + "&deg;F</td>";
					table += "<td>" + data.list[i].temp.max + "&deg;F</td>";
					table += "<td>" + data.list[i].humidity + "%</td>";

					table += "</tr>";
				}

				$("#forecastWeather").html(table);
				$("#header").html(header);
				$("#city").val('');
	
			}

		});

	}else{
		$("#error").html("<div class='alert alert-warning' id='errorCity'>Enter a city name above to get the weather</div>");
	}

}




