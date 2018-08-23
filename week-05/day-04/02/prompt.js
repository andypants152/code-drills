// ======== You are given NOTHING to start with 😱 ========
var fs = require("fs");

fs.readFile("quotes.txt", "utf8", function(err, data){
    if(err) return console.log(err);

    var output = data.split("; ");
    var quotes = {};

    for(var i = 0; i < output.length; i++){
        var quote = output[i].split("-");
        quotes[quote[1]] = quote[0];
    }

    var input = "";
    for (var i = 2; i < process.argv.length; i++) {
        if (i > 2 && i < process.argv.length) {
            input = input + " " + process.argv[i];        
          }        
          else {        
            input += process.argv[i];
          }
    }

    if(quotes[input]){
        console.log(quotes[input]);
    }
    else{
        console.log("That person never said anything!")
    }
})