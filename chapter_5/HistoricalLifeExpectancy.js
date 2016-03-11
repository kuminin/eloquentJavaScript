// Compute and output the average age of the peopple in the ancestry data
// set per century. A person is assigned to a century by taking their year
// of death, dividing it by 100, and rounding it up.

var ANCESTRY_FILE = require("./ancestry.js");
var ancestry = JSON.parse(ANCESTRY_FILE);

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

function getCentury(person) {
  return Math.ceil(person.died / 100);
}

function groupBy(array, fnc) {
  var map = {};
  function checkForCentury(person) {
    return map[fnc(person)] == null;
  }
  function group(person) {
    if (checkForCentury(person)) {
      map[fnc(person)] = [person];
    } else {
      map[fnc(person)].push(person);
    }
  }
  array.forEach(group);
  return map;
}

var century = groupBy(ancestry, getCentury);
for (var key in century) {
  var ages = century[key].map(function(person) {
    return person.died - person.born;
  });
  console.log(key + ": " + average(ages));
}
