console.log(greetNamed('John'));
console.log(greetUnNamed('John'));

function greetNamed(name: string): string {
  if (name) {
    return "hi! " + name
  }
}

var greetUnNamed = function (name: string): string {
  if (name) {
    return "hi, " + name;
  }
}


// functions with parameters and default value
function add(foo: number, bar: number, foobar: number = 0): number {
  return foo + bar + foobar
}

// function with rest
function add1(...foo: number[]): number {
  let result = 0;
  for (let i = 0; i < foo.length; i++) {
    result += foo[i];
  }
  return result;
}



