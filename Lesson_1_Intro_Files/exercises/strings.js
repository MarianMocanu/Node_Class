// --------------------------------------
// Exercise 3 - Add numbers from string to float

var numberOne = "1.10";
var numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch neither line 1 or line 2

var total = parseFloat(numberOne) + parseFloat(numberTwo)
console.log(total)

// --------------------------------------
// Exercise 4 - Add the numbers and the total with 2 decimals

var numberOne = "1.10";
var numberTwo = "2.30";

var total = parseFloat(numberOne) + parseFloat(numberTwo)
console.log(total.toFixed(2))

// --------------------------------------
// Exercise 5 - Decimals and average

var one = 10;
var two = 45;
var three = 98;

// Show in the console the avg. with 5 decimals

var avg = (one + two + three) / 3
console.log(avg.toFixed(5))

// --------------------------------------

// --------------------------------------
// Exercise 6 - Get the character by index

var letters = "abc"
// Get me the character "c"

console.log(letters.charAt(2))

// --------------------------------------
// Exercise 7 - Replace

var fact = "You j are learning javascript and java!";

// capitalize the J in Javascript
    
var indexOfJ = fact.indexOf('j')
console.log(fact.replace('j', 'J'))
console.log(fact.charAt(indexOfJ).toUpperCase(), indexOfJ)



// --------------------------------------

