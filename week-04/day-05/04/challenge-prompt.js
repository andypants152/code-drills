// Activity 4


// In this activity, we're creating a function that generates
// the first few elements of the fibonacci sequence

// -------------------------------------------------------
//                 Generate Fibonacci Sequence
// -------------------------------------------------------
function fibonacci(num) {
  // -------------------- Your Code Here --------------------

  var sequence = [0, 1];
  
  while(sequence.length < parseInt(num)){
    var sum = sequence[sequence.length-1] + sequence[sequence.length -2];
    
    sequence.push(sum);
  }

  return sequence;

  // --------------------- End Code Area --------------------
}


// This listens for and calls on the `fibonacci` function with the user input
$(function() {
  $(document).on("click", "button[type=submit]", function(event){
    event.preventDefault();
    
    num = $("input").val().trim();
    $("#output-area").text(fibonacci(num));

  });
})