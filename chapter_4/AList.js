// takes an array argument and produces a list data structure.
function arrayToList(array) {
  var list = {};
  if (array.length == 0) {
    return null;
  }
  list["value"] = array[0];
  list["rest"] = arrayToList(array.slice(1));
  return list;
}

// takes a list arguement and produces an array.
function listToArray(list) {
  if (list.rest == null) {
    return [list.value];
  }
  var array = [list.value];
  return array.concat(listToArray(list.rest));
}

// takes an element and list arguments and produces a new list that adds the
// element to the front of the input list.
function prepend(element, list) {
  return {
    value: element,
    rest: list
  };
}

// takes a list and a number arguments and produces a
function nth(list, number) {
  if (number == 0) {
    return list.value;
  }
  if (list.rest) {
    return nth(list.rest, number-1);
  }
  return undefined;
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 0));
// → 20