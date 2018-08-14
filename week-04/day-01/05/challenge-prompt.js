// Activity 5


// We are creating a function that takes in an unsorted array of integers
// and returns a new array containing only the prime numbers sorted in
// descending order

// -------------------------------------------------------
//                Helper Functions (Optional)
//
// -------------------- Your Code Here --------------------

function isPrime(num){
  //for loop starting one below the number
  for(var i = (num -1); i >= 1; i--){
      //if i = 1, the number is prime
      if(i === 1){
          return true;
      }
      //if the number modulo i is 0 the number is not a prime
      if(num % i === 0){
          return false;
      }
  }
}

function bubbleSort(array){
  var didSwap = true; //starts as true to for initial swap

  function sorting(array){
      for(var i = 0; i < array.length; i++){
          for(var j = (i+1); j < array.length; j++){
              if(array[i] < array[j]){
                  var temp = array[j];
                  array[j] = array[i]
                  array[i] = temp;
                  didSwap = true;
              }
          }
      }
  }
  if(didSwap){
      didSwap = false;
      sorting(array);
  }
  return array;

}

// --------------------- End Code Area --------------------


// -------------------------------------------------------
//                        Sort Function
// -------------------------------------------------------
function primeSort(arr) {
  // -------------------- Your Code Here --------------------
  var primes = [];
  for(var i = 0; i < arr.length; i++){
    if(isPrime(arr[i])){
      primes.push(arr[i]);
    }
  }
  return bubbleSort(primes);

  // --------------------- End Code Area --------------------
}


// ------------------------------------------------------------------
console.log("==================== Test 01 ====================");
var testArr1 = [5, 32, 9, 47, 22, 6, 33, 17, 20, 73];
console.log("The following should be [73, 47, 17, 5]");
console.log(primeSort(testArr1));

// ------------------------------------------------------------------
console.log("==================== Test 02 ====================");
var testArr2 = [83, 6, 13, 15, 27, 19, 103, 59, 42, 4];
console.log("The following should be [103, 83, 59, 19, 13]");
console.log(primeSort(testArr2));

// ------------------------------------------------------------------
console.log("==================== Test 03 ====================");
var testArr3 = [6, 81, 36, 45, 82, 21, 8, 22, 10, 15];
console.log("The following should be []");
console.log(primeSort(testArr3));