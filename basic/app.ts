var obj: any = { a: 1, b: 2, c: 3 }
for (var key in obj) {
  if (obj.hasOwnProperty(key)) {
    console.log(key + " = " + obj[key]);
  }
}

function greet(name?: string): string {
  if (name) {
    return "Hi! " + name;
  } else {
    return "Hi!";
  }
}

// anonymous function
var greet1: (name: string) => string = function (name: string): string {
  if (name) {
    return "Hi " + name
  } else {
    return "Hi!"
  }
}

// call back (functions used as an argument of another function).
function sume(a: number, b: number, callback: (result: number) => void) {
  callback(a + b)
}

console.log(sume(12, 23, () => 10));
