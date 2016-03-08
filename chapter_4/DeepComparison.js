// takes two values and returns true only if they are the same value
// or are objects with the same properties whose values are also
// equal when compared with a recursive call to deepEqual.
function deepEqual(thisObject, otherObject) {
  if (thisObject === otherObject)
    return true;

  if (thisObject === null || typeof thisObject !== "object"
      || otherObject === null || typeof otherObject !== "object")
    return false;

  var thisObjectItem = 0, otherObjectItem = 0;

  for (var key in thisObject)
    thisObjectItem++;

  for (var key in otherObject) {
    otherObjectItem++;
    if (!(key in thisObject) || !deepEqual(thisObject[key], otherObject[key]))
      return false;
  }
  return thisObjectItem === otherObjectItem;
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
