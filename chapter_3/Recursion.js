function isEven(num) {
  if (num == 0) {
    return true;
  } else if (Math.abs(num) == 1) {
    return false;
  }
  return isEven(Math.abs(num) - 2);
}

// Your code here.

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??