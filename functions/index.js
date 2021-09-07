console.log(greetNamed('John'));
console.log(greetUnNamed('John'));
function greetNamed(name) {
    if (name) {
        return "hi! " + name;
    }
}
var greetUnNamed = function (name) {
    if (name) {
        return "hi, " + name;
    }
};
// functions with parameters and default value
function add(foo, bar, foobar) {
    if (foobar === void 0) { foobar = 0; }
    return foo + bar + foobar;
}
// function with rest
function add1() {
    var foo = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        foo[_i] = arguments[_i];
    }
    var result = 0;
    for (var i = 0; i < foo.length; i++) {
        result += foo[i];
    }
    return result;
}
