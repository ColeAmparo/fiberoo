function fib() {
  const returnArray = [];
  let num1 = 0;
  let num2 = 1;
  for (let i = 0; i < 25; i++) {
    returnArray.push(num1);
    returnArray.push(num2);
    num1 += num2;
    num2 += num1;
  }
  return returnArray;
}

console.log(fib());

function numToString(arr) {
  let returnArray = [];
  returnArray = _.map(arr, function (num) { return `${num}`; });
  return returnArray;
}

console.log(numToString(fib()));

function numEvenNums(arr) {
  let returnArray = [];
  returnArray = _.filter(arr, function (num) { return num % 2 === 0});
  return returnArray.length;
}

console.log(numEvenNums(fib()));
