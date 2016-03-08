// range function that takes two arguments start and end, and returns
// an array containing all the numbers from start up to end.
function range(start, end, increment) {
  var numbers = [];
  if (!increment)
    increment = 1;

  if (increment < 0) {
    for (var i = start; i >= end; i += increment)
      numbers.push(i);
  } else {
    if (start > end) {
      start = start - end;
      end = start + end;
      start = end - start;
    }
    for (var i = start; i <= end; i += increment)
      numbers.push(i);
  }
  return numbers;
}

// sum function that takes an array of numbers and returns the sum of
// the numbers inside the array.
function sum(arrayOfNumbers) {
  var sum = 0;
  for (var i = 0; i < arrayOfNumbers.length; i++) {
    sum += arrayOfNumbers[i];
  }
  return sum;
}

console.log(range(1, 10));
console.log(range(5, 2, -1));
console.log(range(5, 2));
console.log(sum(range(1, 10)));