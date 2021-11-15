// function squareOf(n: number) {
//     return n * n;
// }

// console.log(squareOf(5))
// console.log(squareOf(10))

// class MyClass {
//     add(x: number, y: number): number {
//         return x + y;
//     }
// }

// const calc = new MyClass();
// console.log(calc.add(10, 20));
// console.log(calc.add(10, 20));

// duck typing
var nameIdObject = { name: "my name", id: 1, print() { } }
nameIdObject = { id: 2, name: "anothername", print() { } }

nameIdObject = { id: 3, name: "thirdName" };

var obj1 = { id: 1, print() { } };
var obj2 = { id: 2, print() { }, select() { } }
obj1 = obj2
obj2 = obj1