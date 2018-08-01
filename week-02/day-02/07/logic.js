var validInput = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "-", "*", "/", "=", "c"];
var operators = ["+", "-", "*", "/"];
var expression = [];
var answered = false;
var error = false;

function calculator(input) {
    var num1 = "";
    var num2 = "";
    var operator;
    for (var i = 0; i < input.length; i++){
        if(operator){
            num2 = num2 + input[i];
        }
        else{
            if (operators.indexOf(input[i]) != -1){
                operator = input[i];
            }
            else{
                num1 = num1 + input[i];
            }
        }
    }

    if(operator === "+"){
        return parseInt(num1) + parseInt(num2);
    }
    else if (operator === "-"){
        return parseInt(num1) - parseInt(num2);
    }
    else if (operator === "*"){
        return parseInt(num1) * parseInt(num2);
    }
    else if (operator === "/"){
        return parseInt(num1) / parseInt(num2);
    }
}

document.onkeyup = function(event){
    var pressed = event.key;
    var displayedExpression = document.getElementById("calc");
    var displayedAnswer = document.getElementById("answer");
    if(error){
        displayedAnswer.textContent = "";
        error = false;
    }

    if(validInput.indexOf(pressed) != -1){
        if (pressed === "c"){
            expression = [];
            displayedExpression.textContent = expression;
            displayedAnswer.textContent = "";
            answered = false;
        }
        else if(answered === false){
            if (pressed === "="){
                displayedAnswer.textContent = calculator(expression);
                answered = true;
            }
            else if (operators.indexOf(pressed) != -1 && expression.indexOf(pressed) != -1){
                displayedAnswer.textContent = "You've already entered an operator";
                error = true;
            }
            else {
                expression.push(pressed);
            }
        }
    }
    else if(pressed != "Shift" && answered === false){
        displayedAnswer.textContent = "Input Invalid";
        error = true;
    }
    displayedExpression.textContent = expression;
}