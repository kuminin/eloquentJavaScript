function every(array, fnc) {
  for (var i = 0; i < array.length; i++) {
    if (!fnc(array[i]))
      return false;
  }
  return true;
}

function some(array, fnc) {
  for (var i = 0; i < array.length; i++) {
    if (fnc(array[i]))
      return true;
  }
  return false;
}

// Your code here.

console.log(every([NaN, NaN, NaN], isNaN));
// → true
console.log(every([NaN, NaN, 4], isNaN));
// → false
console.log(some([NaN, 3, 4], isNaN));
// → true
console.log(some([2, 3, 4], isNaN));
// → false