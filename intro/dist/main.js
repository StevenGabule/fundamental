"use strict";
function main() {
    console.log('Hello World');
}
var add = function (a, b) { return a + b; };
var printOutput = function (output) { return console.log(output); };
var names = [];
var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(10);
    }, 2000);
});
main();
