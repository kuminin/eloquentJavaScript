// Constructor
function Vector(x, y) {
  this.x = x;
  this.y = y;
}

// Prototyping a function named plus
Vector.prototype.plus = function(other) {
  return new Vector(this.x + other.x, this.y + other.y);
};

// Prototyping a funciton named minus
Vector.prototype.minus = function(other) {
  return new Vector(this.x - other.x, this.y - other.y);
};

// defining a getter function for variable length
Object.defineProperty(Vector.prototype, "length", {
  get: function() {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
  }
});

console.log(new Vector(1, 2).plus(new Vector(2, 3)));
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
console.log(new Vector(3, 4).length)