const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(numbers) {
	return numbers.reduce((prevVal, currVal) => prevVal + currVal, 0);
};

const multiply = function(numbers) {
  return numbers.reduce((prevVal, currVal) => prevVal * currVal, 1);

};

const power = function(num, pow) {
  return num ** pow;
};

const factorial = function(num) {
	if (num == 0) return 1;
  if (num == 1) return 1;

  ans = 1;
  for (; num > 1; num--){
    ans *= num;
  }
  return ans;

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
