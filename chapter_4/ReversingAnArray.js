// takes an array as an argument and produces a new array that has the same
// elements in the inverse order.
function reverseArray(array) {
  var newArr = [];
  for (var i = array.length - 1; i >= 0; i--) {
    newArr.push(array[i]);
  }
  return newArr;
}

// takes an array as an argument and inverses the given array argument.
function reverseArrayInPlace(array) {
  for (var i = 0, j = array.length - 1; i < j; i++, j--) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

console.log(reverseArray(["A", "B", "C"]));
// -> [ 'C', 'B', 'A' ]

var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// -> [ 5, 4, 3, 2, 1 ]