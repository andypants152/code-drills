// Activity 1


// In this activity, we're creating a function that sings the
// "99 Bottles of Beer on the Wall song"

// -------------------------------------------------------
//                Helper Functions (Optional)
//
// -------------------- Your Code Here --------------------





// --------------------- End Code Area --------------------


// -------------------------------------------------------
//                  Singing 99-Bottles Function
// -------------------------------------------------------
function sing(maxBottles) {
  // -------------------- Your Code Here --------------------

  if(maxBottles > 0){
    for(var i = maxBottles; i > 0; i--){
      if(i > 1){
        $("#output-area").append(i + " bottles of beer on the wall, " + i + " bottles of beer<br>");
      }
      else{
        $("#output-area").append(i + " bottle of beer on the wall, " + i + " bottle of beer<br>");
      }
      if(i - 1 > 1){
        $("#output-area").append("take one down pass it around, " + (i -1) + " bottles of beer on the wall<br>");
      }
      else if (i - 1 === 1){
        $("#output-area").append("take one down pass it around, " + (i -1) + " bottle of beer on the wall<br>");
      }
      else{
        $("#output-area").append("take one down pass it around, no more bottles of beer on the wall!");
      }
    }


  }
  else{
    $("#output-area").text("Go get some beer and come back...");
  }
  


  // --------------------- End Code Area --------------------
}


// This sets up a listener that calls on the `sing` function with the user input
$(function() {
  $(document).on("click", "button[type=submit]", function(event){
    event.preventDefault();

    num = $("input").val().trim();
    $("#output-area").empty();
    sing(num);

  });
})