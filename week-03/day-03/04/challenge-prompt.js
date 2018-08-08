// build a function that uses bubble sort to sort an array from
// highest value to lowest value and returns the new sorted array

function bubbleSort(arr) {
// ================= code goes here ===========================

counter = arr.length;

do{
    for(var i = 0; i < counter; i++){
        if(arr[i] > arr[i+1]){
            var move = arr[i+1];
            arr[i+1] = arr[i];
            arr[i] = move;
        }
    }
    counter--;

} while(counter > 0);
 
return arr;





// ============================================================
}

var testArray = [34, 23, 3, 76, 20, 84, 18, 9];
testArray = bubbleSort(testArray);
console.log(testArray);