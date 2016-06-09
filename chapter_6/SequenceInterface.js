function logFive(sequence) {
  for (var i = 0; i < 5; i++) {
    if (!sequence.next())
      break;
    console.log(sequence.current());
  }
}

function ArraySeq(sequence) {
  this.sequence = sequence;
  this.start = -1;
}

ArraySeq.prototype.next = function() {
  this.start++;
  if (this.start == this.sequence.length)
    return false;
  return true;
};

ArraySeq.prototype.current = function() {
  return this.sequence[this.start];
};

function RangeSeq(start, end) {
  this.start = start;
  this.end = end;
}

RangeSeq.prototype.next = function() {
  this.start++;
  if (this.start == this.end)
    return false;
  return true;
};

RangeSeq.prototype.current = function() {
  return this.start - 1;
};

logFive(new ArraySeq([1, 2, 3, 4, 5]));
logFive(new RangeSeq(100, 1000));