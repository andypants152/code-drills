var fs = require("fs");

var input = process.argv.splice(2);

var saidIndex = input.indexOf("said");
var person = "";
var quote = input[input.length - 1];

for(var i = 0; i < saidIndex; i++){
    if(i > 0 && i < saidIndex){
        person += " " + input[i];
    }
    else{
        person += input[i];
    }
}

var output = ' "' + quote + '"' + "-" + person + ";";

fs.appendFile("quotes.txt", output, function(err){
    if(err) return console.log(err);
    else{
        console.log("Quote Added!");
    }
})