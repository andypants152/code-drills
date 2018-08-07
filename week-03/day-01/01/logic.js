$(document).ready(function() {
 
    $(".btn").on("click", function(e){
        //Prevent default submit button behavior
        e.preventDefault();

        //get form data
        var firstName = $("#firstName").val();
        var lastName = $("#lastName").val();
        var occupation = $("#occupation").val();
        var city = $("#city").val();
        var state = $("#state").val();

        $("#firstName").val("");
        $("#lastName").val("");
        $("#occupation").val("");
        $("#city").val("");
        $("#state").val("");

        $("#fullName").text(firstName + " " + lastName);
        $("#occupationOutput").text(occupation);
        $("#location").text(city + ", " + state);
    })

})