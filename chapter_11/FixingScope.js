specialForms["set"] = function(args, env) {
  var tempEnv = env;
  while (true) {
    tempEnv = Object.getPrototypeOf(tempEnv);
    if (tempEnv == null)
      throw new ReferenceError("There is no such reference");
    if (Object.prototype.hasOwnProperty.call(tempEnv, args[0].name)) {
      tempEnv[args[0].name] = env[args[1].name];
      return env[args[1].name];
    }
  }
};

run("do(define(x, 4),",
    "   define(setx, fun(val, set(x, val))),",
    "   setx(50),",
    "   print(x))");
// → 50
run("set(quux, true)");
// → Some kind of ReferenceError