var request = require("request");
var inquirer = require("inquirer");

var key = "c57acabb679a0ea57954305cd31379a0";

inquirer.prompt([{
    type: "input",
    message: "What city would you like to search for?",
    name: "city"
}]).then(function(resp){
    request("https://api.openweathermap.org/data/2.5/weather?q=" + resp.city + "&appid=" + key, function (err, resp, data) {
        if (!err && resp.statusCode === 200) {
    
            var weather = JSON.parse(data);

            console.log("Location: " + weather.name + ", " + weather.sys.country + 
                        "\nWeather: " + weather.weather[0].main);
        }
    });
});