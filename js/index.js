
$(document).ready(function(){


$("form").submit(changeCity);

function changeCity(event) {
	event.preventDefault();


    var cityName = $("#city-type").val();
    cityName = cityName.toLowerCase()

        if (cityName == 'new york' || cityName == 'nyc' || cityName == 'new york city') {
            $("body").attr("class", "nyc");

        }


        else if (cityName == 'san francisco' || cityName == 'sf') {
            $("body").attr("class", "sf");

        }


        else if (cityName == 'la' || cityName == 'los angeles') {
            $("body").attr("class", "la");

        }

}

});