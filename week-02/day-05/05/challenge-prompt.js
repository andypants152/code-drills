// Day 05
// Activity 05


// This is our password strength checker function. Refer to the README.md for
// instructions on the behavior.
function checkStrength(password) {
  // ----- Your code goes here -----
  var strongLength = false;
  var containsLetter = false;
  var containsNum = false;
  var containsSpecial = false;
  var alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "1234567890";

  //check password length
  if(password.length > 6){
    strongLength = true;
  }
  //check each character's value and set appropriate boolean to true
  for(var i = 0; i < password.length; i++){
    if(!alphabet.includes(password[i]) && !numbers.includes(password[i])){
      containsSpecial = true;
    }
    else if(numbers.includes(password[i])){
      containsNum = true;
    }
    else if(alphabet.includes(password[i])){
      containsLetter = true;
    }
  }

  if(containsLetter && containsNum && strongLength){
    if(containsSpecial){
      return "Your password is very strong";
    }
    else{
      return "Your password is strong";
    }
  }
  else if(!strongLength && !containsLetter && !containsSpecial && containsNum){
    return "Your password is very weak";
  }
  else if(!strongLength && !containsNum && !containsSpecial && containsLetter){
    return "Your password is weak";
  }
  else{
    return "Your password is average";
  }


  // ----- End of your code area -----
}

// document.ready shorthand
$(function () {

  // click listener on the submit button
  $(document).on("click", "#password-button", function (event) {
    // This prevents the submit button from refreshing the page
    event.preventDefault();

    // Check the strength of the password and store the return value inside a variable
    var passwordStrength = checkStrength($("#password-input").val());

    // Clear the password input field after we have grabbed the value already
    $("#password-input").val("");
    
    // Display the result of the password check in our password strength div
    $("#password-strength").text(passwordStrength)

  })
})