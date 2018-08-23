
var string = "ilovetowritecode";
var character = "o"

function distanceFrom(str, char) {
  // ===================== YOUR WORK HERE =====================
  var positions = [];
  if (str.indexOf(char) === -1) {
    return "The character is not in the string!";
  }
  else {
    for (var i = 0; i < str.length; i++) {
      if (str[i] === char) {
        positions.push(i);
      }
    }
  }

  var distance = [];
  var curIndex = 0;

  for (var i = 0; i < str.length; i++) {
    if (curIndex < positions.length - 1) {
      if (Math.abs(i - positions[curIndex]) < Math.abs(i - positions[curIndex + 1])) {
        distance.push(Math.abs(i - positions[curIndex]));
      }
      else {
        distance.push(Math.abs(i - positions[curIndex + 1]));
        curIndex++;
      }
    }
    else{
      distance.push(Math.abs(i - positions[curIndex]));
    }
  }

  return distance;

  // ==========================================================
}

console.log(distanceFrom(string, character))
