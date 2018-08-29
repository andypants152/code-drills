// Long Division

// This is the divide function. It takes in a dividend and a divisor 
// and returns the quotient from dividing the dividend by the divisor
function divide (dividend, divisor) {
// -------------------- Your Code Here --------------------

var count = 0;

while(divisor <= dividend){
    count++;
    dividend -= divisor;
}
if(dividend){
    console.log("Remainder: " + dividend);
}

return count;

// --------------------- End Code Area --------------------
}

// Exporting the divide function for use in the test file.
module.exports = divide;