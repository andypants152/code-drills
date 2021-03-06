console.log("////////////////////////////// QUESTION 4.1 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\")

/*Write a function called "evenWordLengthOnly".

Given an array of strings, "evenWordLengthOnly" returns an array containing only the elements of the given array whose length is an even number.

*/
function evenWordLengthOnly(words) {
  // your code here

  var evenWords = [];
  
  for(var i = 0; i < words.length; i++){
    if(words[i].length % 2 === 0){
      evenWords.push(words[i]);
    }
  }
  
  return evenWords;

  // code ends here
}
var output = evenWordLengthOnly(['word', 'words', 'food', 'foods']);
console.log(output); // --> ['word', 'food']

console.log("////////////////////////////// QUESTION 4.2 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\")

/*Write a function called "countWords".

  Given a string, "countWords" returns an object where each key is a word in that string and the value of the key is how many times that word appears 
  in the string. 

Notes:
* If given an empty string, it should return an empty object.
*/
function countWords(str) {
  // your code here

  var wordsObj = {};
  var wordsArr = str.split(" ");

  for(var i = 0; i < wordsArr.length; i++){
    if(wordsObj[wordsArr[i]]){
      wordsObj[wordsArr[i]] += 1;
    }
    else{
      wordsObj[wordsArr[i]] = 1;
    }
  }

  return wordsObj;

    // code ends here
}

var output = countWords('ask a bunch get a bunch');
console.log(output); // --> {ask: 1, a: 2, bunch: 2, get: 1}