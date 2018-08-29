var inquirer = require("inquirer");
var fs = require("fs");

var quotes = {};

function menu() {
    var authors = Object.keys(quotes);
    inquirer.prompt([{
        type: "list",
        message: "What would you like to do?",
        choices: ["View a Quote", "Enter a Quote", "Exit"],
        name: "option"
    }, {
        type: "list",
        message: "Show a quote from which author?",
        choices: authors,
        name: "quote",
        when: function (answer) {
            return answer.option === "View a Quote";
        }
    }, {
        type: "input",
        message: "Who's the author?",
        name: "author",
        when: function (answer) {
            return answer.option === "Enter a Quote";
        }
    }, {
        type: "input",
        message: "What did they say?",
        name: "quote",
        when: function (answer) {
            return answer.option === "Enter a Quote";
        }
    }]).then(function (resp) {
        if (resp.option === "View a Quote") {
            console.log(quotes[resp.quote]);
            menu();
        }
        else if(resp.option === "Enter a Quote"){
            addQuote(resp.quote, resp.author);
            menu();
        }
        

    });
}

function loadQuotes() {
    fs.readFile("./quotes.txt", "utf8", function (err, data) {
        if (err) return console.log(err);

        var output = data.split(";");
        //console.log(output);

        for (var i = 0; i < output.length; i++) {
            var quote = output[i].split("-");
            quotes[quote[1]] = quote[0];
        }
        menu();
    });
}

function addQuote(quote, author) {
    var output = '; "' + quote + '"' + "-" + author;
    quotes[author] = quote;

    fs.appendFile("quotes.txt", output, function (err) {
        if (err) return console.log(err);
        else {
            console.log("Quote Added!");
        }
    })
}

loadQuotes();