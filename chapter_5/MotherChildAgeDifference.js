// Using the example data set from this chapter, compute the average age
// difference between mothers and children (the age of the mother when the
// child is born).

var ANCESTRY_FILE = require("./ancestry.js");
var ancestry = JSON.parse(ANCESTRY_FILE);

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

// We will filter out the current array where the child's mother is not
// inside the map. Then we will map the objects inside the array and get
// the year of the person that was born and get the year when the mother
// was born, and return the difference.
var ages = ancestry.filter(function(person) {
  return byName[person.mother] != null;
}).map(function(person) {
  // console.log(person.born - byName[person.mother].born);
  return person.born - byName[person.mother].born;
});
console.log(average(ages));