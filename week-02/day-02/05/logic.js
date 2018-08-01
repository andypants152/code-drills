var response;

document.onkeyup = function(event){
    var key = event.key;

    console.log(key);

    if (key === "h"){
        response = confirm("Do you want me to say hello if you press 'k'?");
    }

    if (key === "k"){
        if (response){
            alert("Hello");
        }
        else if (response === false){
            alert("No thanks");
        }
    }

}