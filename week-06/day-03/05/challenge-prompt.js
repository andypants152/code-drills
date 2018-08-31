/*Write a function called "smallestNumber".

Given an array of mixed elements, "smallestNumber" returns the smallest number in the array

ignore values that aren't numbers

Starter Code :*/
function smallestNumber(arr) {
  // code starts here

  var smallest;
  var numbers = [];

  arr.forEach(element => {
    if(!isNaN(element)){
      numbers.push(element);
    }
  });

  if(numbers.length > 0){
    smallest = numbers[0];
  }
  else{
    return console.log("Array has no numbers");
  }
  numbers.forEach(element => {
    if(element < smallest){
      smallest = element;
    }
  });

  return smallest;
  
  // code ends here
}
var output = smallestNumber([4, 'lincoln', 9, 'octopus', 'a', 5, 10, 'hello']);
console.log(output); // --> 4