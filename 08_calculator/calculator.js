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

const multiply = function(arr) {
	let sum = 1;
  for(let i = 0; i < arr.length; i++) {
    sum = sum * arr[i];
  };
  return sum;
};

const power = function(num1, num2) {
	let sum = num1 ** num2;
  return sum;
};

const factorial = function(num) {
  let result = 1;
  for (let i = num; i >= 1; i--){
    result = result * i;
  };
  return result;
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
