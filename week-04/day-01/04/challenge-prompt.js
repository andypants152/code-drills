// Activity 4


// We are creating a function that takes in an unsorted array of integers
// and returns a sorted array with all the even numbers first in ascending order
// and all the odd numbers in descending order after the even numbers

// -------------------------------------------------------
//                Helper Functions (Optional)
//
// -------------------- Your Code Here --------------------

function evens(arr){
  var evens = [];
  for(var i = 0; i < arr.length; i++){
    if(arr[i] % 2 === 0){
      evens.push(arr[i]);
    }
  }
  return evens;
}

function odds(arr){
  var odds = [];
  for(var i = 0; i < arr.length; i++){
    if(arr[i] % 2 != 0){
      odds.push(arr[i]);
    }
  }
  return odds;
}

function bubbleSort(array){
  var didSwap = true; //starts as true to for initial swap

  function sorting(array){
      for(var i = 0; i < array.length; i++){
          for(var j = (i+1); j < array.length; j++){
              if(array[i] > array[j]){
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
function upDownSort(arr) {
  // -------------------- Your Code Here --------------------
  evenNumberArray = evens(arr);
  oddNumberArray = odds(arr);
  upDownArray = bubbleSort(evenNumberArray);
  oddNumberArray = bubbleSort(oddNumberArray);
  for(var i = oddNumberArray.length - 1; i >= 0 ; i--){
    upDownArray.push(oddNumberArray[i]);
  }

  return upDownArray;

  // --------------------- End Code Area --------------------
}


// ------------------------------------------------------------------
console.log("==================== Test 01 ====================");
var testArr1 = [5, 32, 9, 47, 22, 6, 33, 17, 20, 73];
console.log("The following should be [6, 20, 22, 32, 73, 47, 33, 17, 9, 5]");
console.log(upDownSort(testArr1));

// ------------------------------------------------------------------
console.log("==================== Test 02 ====================");
var testArr2 = [44, 32, 6, 88, 12, 28, 20, 8, 10, 24];
console.log("The following should be [6, 8, 10, 12, 20, 24, 28, 32, 44, 88]");
console.log(upDownSort(testArr2));

// ------------------------------------------------------------------
console.log("==================== Test 03 ====================");
var testArr3 = [19, 27, 11, 23, 7, 63, 89, 15, 33, 3];
console.log("The following should be [89, 63, 33, 27, 23, 19, 15, 11, 7, 3]");
console.log(upDownSort(testArr3));