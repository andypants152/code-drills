var request = require("request");

var zipcode = process.argv[2];
var key = "c57acabb679a0ea57954305cd31379a0";

request("https://api.openweathermap.org/data/2.5/forecast?zip=" + zipcode + "&units=imperial&appid=" + key, function (err, resp, data) {
    if (!err && resp.statusCode === 200) {

        var weather = JSON.parse(data);

        weather.list.forEach(function(threeHourForecast){
            console.log(threeHourForecast.dt_txt + " " + threeHourForecast.main.temp)
        })

    }
    else{
        console.log(err);
    }
})
