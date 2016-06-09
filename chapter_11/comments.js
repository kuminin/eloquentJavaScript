// This is the old skipSpace. Modify it...
function skipSpace(string) {
  var re = /(\s|#.*)*/;
  var result = re.exec(string);
  if (result == null)
    return "";
  return string.slice(result[0].length);
}

console.log(parse("# hello\nx"));
// → {type: "word", name: "x"}

console.log(parse("a # one\n   # two\n()"));
// → {type: "apply",
//    operator: {type: "word", name: "a"},
//    args: []}