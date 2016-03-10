// Using the reduce method in combination with the concat method "flatten"
// an array of arrays into a single array.

var arrays = [[1, 2, 3], [4, 5], [6]];

function flatten(a, b) {
  return a.concat(b);
}

var arr = arrays.reduce(flatten);

console.log(arr);