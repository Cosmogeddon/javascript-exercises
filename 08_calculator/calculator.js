const add = function(num1, num2) {
	let sum = num1 + num2;
  return sum;
};

const subtract = function(num1, num2) {
  let sum = num1 - num2;
  return sum;	
};

const sum = function(arr) {
	let sum = 0;
  for(let i = 0; i < arr.length; i++) {
    sum += arr[i];
  };
  return sum;
};

const multiply = function() {

};

const power = function() {
	
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
