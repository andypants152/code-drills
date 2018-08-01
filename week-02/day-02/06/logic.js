var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var keysPressed = [];

document.onkeyup = function(event){
    var selection = event.key;
    var lastKey = document.getElementById("pressed");
    var allKeys = document.getElementById("history");
    selection = selection.toLowerCase();
    console.log(selection);

    if (alphabet.indexOf(selection) != -1){
        keysPressed.push(selection);
        lastKey.textContent = selection;
        allKeys.textContent = keysPressed;
    }
    else{
        lastKey = "Please press a valid letter";
    }
}